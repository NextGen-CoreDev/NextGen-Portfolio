"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { useGallery } from "./Gallery";
import { ArrowRight, ArrowUpRight } from "./icons";

const INTRO_TITLE = "Shipped, not mocked up.";
const INTRO_TEXT =
  "Roof measurement SaaS, reef ray casting, a SLAM robot, IoT and quant. Each one built past the demo and onto real data.";

/*
  Desktop (≥768px, motion allowed): the section is pinned for (track width − viewport width) px of
  vertical scroll and the track is translated horizontally 1:1 with that scroll, like parish.cv.
  Mobile / reduced motion: a native horizontal swipe carousel with scroll-snap.
*/
export default function Work() {
  const { openCase, openLightbox } = useGallery();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [distance, setDistance] = useState(0);
  const distanceRef = useRef(0);

  // Decide mode from viewport + motion preference.
  useEffect(() => {
    const wide = matchMedia("(min-width: 768px)");
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPinned(wide.matches && !motion.matches);
    update();
    wide.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => { wide.removeEventListener("change", update); motion.removeEventListener("change", update); };
  }, []);

  // Measure how far the track must travel.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (!pinned) {
      track.style.transform = "";
      distanceRef.current = 0;
      setDistance(0);
      return;
    }
    const measure = () => {
      const d = Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
      distanceRef.current = d;
      setDistance(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [pinned]);

  // Map vertical scroll progress through the pinned section to horizontal translation.
  useEffect(() => {
    if (!pinned) return;
    const section = sectionRef.current, track = trackRef.current, bar = barRef.current;
    if (!section || !track) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const d = distanceRef.current;
      const top = section.getBoundingClientRect().top;
      const p = d > 0 ? Math.min(1, Math.max(0, -top / d)) : 0;
      track.style.transform = `translate3d(${-p * d}px,0,0)`;
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [pinned, distance]);

  // Keyboard users: when focus lands on an off-screen card, scroll the page so it slides into view.
  const onFocus = (e: React.FocusEvent) => {
    if (!pinned) return;
    const section = sectionRef.current, track = trackRef.current;
    if (!section || !track) return;
    const item = (e.target as HTMLElement).closest<HTMLElement>("[data-slide]");
    if (!item) return;
    // The browser may scroll a clipped ancestor to reveal the focused element; undo that so
    // only our translate moves the track.
    const sticky = section.querySelector<HTMLElement>(".work-sticky");
    if (sticky) sticky.scrollLeft = 0;
    (e.currentTarget as HTMLElement).scrollLeft = 0;
    const vw = document.documentElement.clientWidth;
    const want = Math.min(distanceRef.current, Math.max(0, item.offsetLeft + item.offsetWidth / 2 - vw / 2));
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionTop + want, behavior: "auto" });
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-label="Selected work"
      className={`work${pinned ? " is-pinned" : ""}`}
      style={pinned ? { height: `calc(100dvh + ${distance}px)` } : undefined}
    >
      <div className="work-mobile-head">
        <h2 className="display work-title">{INTRO_TITLE}</h2>
        <p className="work-intro-text">{INTRO_TEXT}</p>
      </div>

      <div className="work-sticky">
        <div className="work-scroller" onFocus={onFocus}>
          <div className="work-track" ref={trackRef}>
            <div className="work-intro">
              <p className="eyebrow">Selected work</p>
              <h2 className="display work-title">{INTRO_TITLE}</h2>
              <p className="work-intro-text">{INTRO_TEXT}</p>
            </div>

            {projects.map((p) => {
              const detail = p.images[1];
              return (
                <article className="work-card" key={p.slug} id={`project-${p.slug}`} data-slide>
                  <div className="work-media">
                    <button className="work-shot" type="button" aria-label={`Enlarge ${p.name} screenshot`} onClick={() => openLightbox(p.images, 0)}>
                      <img src={p.images[0].src} alt={p.images[0].caption} loading="lazy" style={p.focus ? { objectPosition: p.focus } : undefined} />
                    </button>
                    {detail && (
                      <button className="work-detail" type="button" aria-label={`Enlarge ${p.name} detail screenshot`} onClick={() => openLightbox(p.images, 1)}>
                        <img src={detail.src} alt={detail.caption} loading="lazy" />
                      </button>
                    )}
                  </div>
                  <div className="work-body">
                    <p className="work-meta">{p.domain} · {p.role}</p>
                    <h3 className="work-name">{p.name}</h3>
                    <p className="work-tagline">{p.tagline}</p>
                    <dl className="work-metrics">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <dt className="sr-only">{m.label}</dt>
                          <dd className="work-metric-v">{m.value}</dd>
                          <dd className="work-metric-l">{m.label}</dd>
                        </div>
                      ))}
                    </dl>
                    <ul className="work-stack" aria-label="Stack">
                      {p.stack.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                    <div className="work-actions">
                      <button className="work-case" type="button" onClick={() => openCase(p.slug)}>Case study <ArrowRight /></button>
                      <button className="work-link" type="button" onClick={() => openLightbox(p.images, 0)}>
                        {p.images.length} image{p.images.length > 1 ? "s" : ""} <ArrowUpRight />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}

            <a className="work-end" href={site.github} target="_blank" rel="noopener noreferrer" data-slide>
              <span>
                <span className="work-end-title">More on GitHub</span>
                <span className="work-end-sub">@{site.githubHandle}</span>
              </span>
              <span className="work-end-btn"><ArrowRight size={22} /></span>
            </a>
          </div>
        </div>
        <div className="work-progress" ref={barRef} aria-hidden="true" />
      </div>
    </section>
  );
}
