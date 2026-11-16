"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import Avatar from "./Avatar";

/* Fades .reveal elements in as they scroll into view. */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}

/* Floating "Message David" pill, hidden over the hero, contact and footer. */
export function FloatingMessage() {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    const targets = ["#top", "#contact", "footer"].map((s) => document.querySelector(s)).filter(Boolean) as Element[];
    if (!("IntersectionObserver" in window)) { setHide(false); return; }
    const seen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => (en.isIntersecting ? seen.add(en.target) : seen.delete(en.target)));
      setHide(seen.size > 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return (
    <a className={`float-msg${hide ? " hide" : ""}`} href="#contact" tabIndex={hide ? -1 : 0}>
      <Avatar small />
      Message {site.shortName}
    </a>
  );
}
