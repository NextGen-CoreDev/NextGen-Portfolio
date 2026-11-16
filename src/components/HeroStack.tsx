"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { useGallery } from "./Gallery";
import { ArrowUpRight } from "./icons";

const DUR = 6000;
const heroes = projects.filter((p) => p.hero).slice(0, 4);

export default function HeroStack() {
  const { openCase } = useGallery();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0); // bumps to restart the tab progress bar + timer
  const reduce = useRef(false);

  useEffect(() => { reduce.current = matchMedia("(prefers-reduced-motion: reduce)").matches; }, []);

  const show = useCallback((i: number) => {
    setActive((i + heroes.length) % heroes.length);
    setCycle((c) => c + 1);
  }, []);

  useEffect(() => {
    if (paused || reduce.current || heroes.length < 2) return;
    const id = setTimeout(() => show(active + 1), DUR);
    return () => clearTimeout(id);
  }, [active, paused, cycle, show]);

  if (!heroes.length) return null;
  const cur = heroes[active];

  return (
    <div className="hero-visual" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className={`stack${paused ? " paused" : ""}`} aria-live="polite">
        {heroes.map((p, i) => {
          const pos = (i - active + heroes.length) % heroes.length;
          return (
            <div
              key={p.slug}
              className="shot"
              data-pos={Math.min(pos, 3)}
              role="button"
              tabIndex={pos === 0 ? 0 : -1}
              aria-label={pos === 0 ? `Open ${p.name} case study` : `Show ${p.name}`}
              onClick={() => (pos === 0 ? openCase(p.slug) : show(i))}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (pos === 0) openCase(p.slug); else show(i); } }}
            >
              <div className="shot-bar"><i /><i /><i /><span>{p.slug}.project</span></div>
              <img src={p.images[0].src} alt={p.images[0].caption} loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} />
            </div>
          );
        })}
      </div>
      <div className="stack-caption">
        <p><strong>{cur.name}.</strong> {cur.tagline}</p>
        <button className="pill-btn" type="button" onClick={() => openCase(cur.slug)}>Case study <ArrowUpRight /></button>
      </div>
      <div className="stack-tabs" role="tablist" aria-label="Featured projects">
        {heroes.map((p, i) => (
          <button
            key={p.slug}
            className="stack-tab"
            role="tab"
            type="button"
            aria-selected={i === active}
            style={{ ["--dur" as string]: `${DUR}ms` }}
            onClick={() => show(i)}
          >
            {p.tab}
            {/* keyed by cycle so the progress animation restarts on every change */}
            <span className="bar" key={i === active ? cycle : undefined} />
          </button>
        ))}
      </div>
    </div>
  );
}
