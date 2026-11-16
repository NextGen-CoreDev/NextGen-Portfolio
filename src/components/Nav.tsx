"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { ArrowRight, GitHub, Menu, Moon, Sun } from "./icons";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme") ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch {}
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a href="#top" className="logo" aria-label={`${site.name}, home`}>david<span className="logo-tag">.cv</span></a>
        <ul className="nav-links">
          {LINKS.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <div className="nav-actions">
          <button className="icon-btn" type="button" aria-label="Toggle dark mode" onClick={toggleTheme}><Moon /><Sun /></button>
          <a className="nav-gh" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a>
          <a className="btn btn-dark btn-sm" href="#contact">Hire me <span className="btn-dot"><ArrowRight /></span></a>
          <button className="icon-btn menu-btn" type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobileMenu" onClick={() => setOpen((o) => !o)}>
            <Menu />
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mobileMenu" hidden={!open}>
        {[...LINKS, { href: "#contact", label: "Contact" }].map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </header>
  );
}
