"use client";

import { useRef, useState } from "react";
import { services } from "@/data/services";
import { useGallery } from "./Gallery";
import { ArrowRight, ArrowUpRight, Check } from "./icons";

export default function Services() {
  const { openCase } = useGallery();
  const [active, setActive] = useState(0);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);
  const s = services[active];

  const onKey = (e: React.KeyboardEvent) => {
    const d = ({ ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 } as Record<string, number>)[e.key];
    if (!d) return;
    e.preventDefault();
    const n = (active + d + services.length) % services.length;
    setActive(n);
    btns.current[n]?.focus();
  };

  return (
    <div className="goal reveal">
      <div className="goal-list" role="tablist" aria-label="Services" aria-orientation="vertical" onKeyDown={onKey}>
        <p className="goal-label">I need to…</p>
        {services.map((x, i) => (
          <button
            key={x.id}
            ref={(el) => { btns.current[i] = el; }}
            className="goal-btn"
            role="tab"
            type="button"
            id={`goal-${x.id}`}
            aria-controls="goalPanel"
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {x.label}<ArrowRight />
          </button>
        ))}
      </div>
      <div className="goal-panel" id="goalPanel" role="tabpanel" aria-labelledby={`goal-${s.id}`} key={s.id}>
        <p className="goal-kicker">{s.kicker}</p>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
        <div className="goal-feats">
          {s.feats.map(([h, d]) => (
            <div className="feat" key={h}><div className="feat-ic"><Check /></div><h4>{h}</h4><p>{d}</p></div>
          ))}
        </div>
        <div className="goal-tools">{s.tools.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
        <div className="done-before">
          <div>
            <span>Done before</span>
            {s.done.project ? (
              <button className="done-link" type="button" onClick={() => openCase(s.done.project!)}>{s.done.label} <ArrowUpRight /></button>
            ) : (
              <a className="done-link" href={s.done.section}>{s.done.label} <ArrowUpRight /></a>
            )}
          </div>
          <a className="btn btn-dark btn-sm" href="#contact">Discuss your data <span className="btn-dot"><ArrowRight /></span></a>
        </div>
      </div>
    </div>
  );
}
