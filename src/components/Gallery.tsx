"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import type { ProjectImage } from "@/data/types";
import { Close } from "./icons";

type Ctx = {
  openCase: (slug: string) => void;
  openLightbox: (images: ProjectImage[], index?: number) => void;
};
const GalleryContext = createContext<Ctx | null>(null);

export function useGallery() {
  const ctx = useContext(GalleryContext);
  if (!ctx) throw new Error("useGallery must be used inside <GalleryProvider>");
  return ctx;
}

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [lb, setLb] = useState<{ images: ProjectImage[]; index: number } | null>(null);

  const openCase = useCallback((s: string) => setSlug(s), []);
  const openLightbox = useCallback((images: ProjectImage[], index = 0) => setLb({ images, index }), []);

  return (
    <GalleryContext.Provider value={{ openCase, openLightbox }}>
      {children}
      <CaseModal slug={slug} onClose={() => setSlug(null)} onNavigate={setSlug} openLightbox={openLightbox} />
      <Lightbox state={lb} onChange={setLb} />
    </GalleryContext.Provider>
  );
}

/* Keeps a native <dialog> in sync with React state and locks page scroll while open. */
function useDialog(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handle = () => onCloseRef.current();
    d.addEventListener("close", handle);
    return () => d.removeEventListener("close", handle);
  }, []);
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = prev; };
  }, [open]);
  return ref;
}

function CaseModal({ slug, onClose, onNavigate, openLightbox }: {
  slug: string | null;
  onClose: () => void;
  onNavigate: (s: string) => void;
  openLightbox: Ctx["openLightbox"];
}) {
  const ref = useDialog(slug !== null, onClose);
  const [idx, setIdx] = useState(0);
  const p = projects.find((x) => x.slug === slug);

  useEffect(() => {
    setIdx(0);
    if (ref.current) ref.current.scrollTop = 0;
  }, [slug, ref]);

  const i = p ? projects.indexOf(p) : 0;
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const img = p?.images[idx] ?? p?.images[0];

  return (
    <dialog ref={ref} className="modal" aria-labelledby="caseTitle" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      {p && img && (
        <div className="modal-inner">
          <div className="modal-head">
            <p className="project-meta">{p.domain}</p>
            <button className="icon-btn" type="button" aria-label="Close" onClick={onClose}><Close /></button>
          </div>
          <div className="modal-content">
            <h2 id="caseTitle">{p.name}</h2>
            <p className="modal-full">{p.title}</p>
            <button className="modal-hero" type="button" aria-label="Enlarge image" onClick={() => openLightbox(p.images, idx)}>
              <img src={img.src} alt={img.caption} />
            </button>
            <p className="modal-cap">{img.caption}</p>
            {p.images.length > 1 && (
              <div className="thumbs">
                {p.images.map((im, k) => (
                  <button key={im.src} className="thumb" type="button" aria-label={`Show image ${k + 1}`} aria-current={k === idx ? "true" : undefined} onClick={() => setIdx(k)}>
                    <img src={im.src} alt="" />
                  </button>
                ))}
              </div>
            )}
            <div className="modal-cols">
              <div>
                <h3>Overview</h3>
                <p>{p.summary}</p>
                <h3 style={{ marginTop: 32 }}>What I built</h3>
                <ul className="job-list">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              </div>
              <div>
                <h3>My role</h3>
                <p style={{ marginBottom: 28 }}>{p.role}</p>
                <h3>At a glance</h3>
                <div className="metrics">
                  {p.metrics.map((m) => (
                    <div className="metric" key={m.label}><div className="metric-v">{m.value}</div><div className="metric-l">{m.label}</div></div>
                  ))}
                </div>
                <h3>Skills &amp; deliverables</h3>
                <div className="chips">{p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
              </div>
            </div>
            <div className="modal-nav">
              <button className="pill-btn" type="button" onClick={() => onNavigate(prev.slug)}>← {prev.name}</button>
              <button className="pill-btn" type="button" onClick={() => onNavigate(next.slug)}>{next.name} →</button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

function Lightbox({ state, onChange }: {
  state: { images: ProjectImage[]; index: number } | null;
  onChange: (s: { images: ProjectImage[]; index: number } | null) => void;
}) {
  const close = () => onChange(null);
  const ref = useDialog(state !== null, close);
  const n = state?.images.length ?? 0;
  const go = (d: number) => state && onChange({ images: state.images, index: (state.index + d + n) % n });
  const img = state?.images[state.index];

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label="Image viewer"
      onClick={(e) => { const t = e.target as HTMLElement; if (t === e.currentTarget || t.tagName === "FIGURE") close(); }}
      onKeyDown={(e) => { if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); }}
    >
      <button className="lb-close" type="button" aria-label="Close" onClick={close}>×</button>
      {n > 1 && <button className="lb-nav lb-prev" type="button" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>}
      {img && (
        <figure>
          <img src={img.src} alt={img.caption} />
          <figcaption>{img.caption}{n > 1 ? `  (${state!.index + 1}/${n})` : ""}</figcaption>
        </figure>
      )}
      {n > 1 && <button className="lb-nav lb-next" type="button" aria-label="Next image" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>}
    </dialog>
  );
}
