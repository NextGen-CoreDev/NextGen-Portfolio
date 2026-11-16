import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { experience, skills, tools } from "@/data/experience";
import { GalleryProvider } from "@/components/Gallery";
import Nav from "@/components/Nav";
import Avatar from "@/components/Avatar";
import LocalTime from "@/components/LocalTime";
import HeroStack from "@/components/HeroStack";
import Work from "@/components/Work";
import Services from "@/components/Services";
import PointCloud from "@/components/PointCloud";
import CaseButton from "@/components/CaseButton";
import { FloatingMessage, RevealObserver } from "@/components/Effects";
import { ArrowDown, ArrowRight, GitHub } from "@/components/icons";

const WHY = [
  ["One engineer, whole pipeline", "Sensor data, processing, AI, backend and viewer. You don’t have to coordinate a GIS specialist, an ML engineer and a web developer who each see a third of the problem."],
  ["Method before code", "LiDAR or photogrammetry, splats or meshes, classical geometry or deep learning. The wrong call costs months. I’ll tell you which fits your accuracy target, budget and hardware, and what will not work."],
  ["Built for real data", "Coordinate systems handled correctly, results checked against ground truth, and pipelines that keep working past the sample file."],
  ["No surprises", "Written scope, milestones you can verify, and documented code your team can run without me."],
];

const STEPS = [
  ["Day one", "Send a sample.", "A sample of your data (LAS, LAZ, E57, PLY, imagery, video) and one line about what you need out of it."],
  ["Within a day or two", "The approach, the risks, an estimate.", "How I would solve it, what could go wrong, and a realistic number. If I’m not the right fit, I’ll say so."],
  ["Every milestone", "Results you can check.", "Milestones you can verify against ground truth, so course changes happen while they are still cheap."],
  ["Handover", "Documented, deployed, yours.", "Code in your repo, documented so your team can run it without me. No lock-in."],
];

const NAV = [["#work", "Work"], ["#services", "Services"], ["#experience", "Experience"], ["#process", "Process"], ["#about", "About"], ["#contact", "Contact"]];

export default function Page() {
  return (
    <GalleryProvider>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="who">
                <Avatar />
                <div>
                  <div className="who-name">{site.name}</div>
                  <div className="who-status"><span className="pulse" />Open to new projects · Zacatecas, MX · <LocalTime /> local</div>
                </div>
              </div>
              <h1 className="display hero-title">Point clouds to <span className="mark">production</span>, not notebooks.</h1>
              <p className="lead">
                I build the software that turns LiDAR scans, drone imagery and camera data into accurate 3D models, maps and AI you can put into production. Senior computer vision &amp; geospatial AI engineer. 12+ years of Python.
              </p>
              <div className="cta-row">
                <a className="btn btn-dark btn-lg" href="#contact">Send a data sample <span className="btn-dot"><ArrowRight size={16} /></span></a>
                <a className="btn btn-ghost btn-lg" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <a className="see-work" href="#work">Or see the work first <ArrowDown /></a>
            </div>
            <HeroStack />
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="stats-band" aria-label="At a glance">
          <div className="container stats reveal">
            <div className="stat"><div className="stat-v">12+</div><div className="stat-l">years writing Python for vision, 3D and data</div></div>
            <div className="stat"><div className="stat-v">4</div><div className="stat-l">engineering teams: Rappi, Blue Yonder, H1, Teradata</div></div>
            <div className="stat"><div className="stat-v">1</div><div className="stat-l">engineer across sensor data, AI, backend and viewer</div></div>
            <div className="stat"><div className="stat-v">$35</div><div className="stat-l">per hour, with written scope and milestones</div></div>
          </div>
          <div className="marquee" aria-label="Tools I use">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <ul className="marquee-list" key={copy} aria-hidden={copy === 1 || undefined}>
                  {tools.map((t) => <li key={t}>{t}</li>)}
                </ul>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WORK (pinned horizontal slider) ============ */}
        <Work />

        {/* ============ SERVICES ============ */}
        <section className="section section-muted" id="services">
          <div className="container">
            <header className="section-head reveal">
              <p className="eyebrow">What I can build for you</p>
              <h2 className="display h2">Tell me the data. Here’s the plan.</h2>
              <p className="section-sub">Pick what you are after to see what you get, the tools I would reach for, and a project where I have already done it.</p>
            </header>
            <Services />
          </div>
        </section>

        {/* ============ WHY ============ */}
        <section className="section" id="why">
          <div className="container">
            <header className="section-head reveal">
              <p className="eyebrow">Why a senior engineer</p>
              <h2 className="display h2">Most 3D projects break at the same point.</h2>
              <p className="section-sub">The demo works on a sample file, then the real data arrives: billions of points, mixed coordinate systems, noisy scans, and a model that is accurate in a notebook but too slow to ship. That gap is where I spend my time.</p>
            </header>
            <div className="why-grid">
              {WHY.map(([h, p], i) => (
                <article className="why-card reveal" key={h}>
                  <span className="why-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section className="section section-muted" id="experience">
          <div className="container">
            <header className="section-head reveal">
              <p className="eyebrow">Experience</p>
              <h2 className="display h2">Ten years of shipping, four teams.</h2>
              <p className="section-sub">From enterprise data engineering to geospatial AI and production computer vision.</p>
            </header>
            <ol className="timeline">
              {experience.map((j) => (
                <li className="job reveal" key={j.company + j.when}>
                  <div className="job-when"><span>{j.when}</span></div>
                  <div className={`job-card${j.education ? " job-edu" : ""}`}>
                    <div className="job-top">
                      <h3>{j.title} <span className="job-at">· {j.company}</span></h3>
                      <span className={`chip${j.education ? "" : " chip-signal"}`}>{j.focus}</span>
                    </div>
                    {j.summary && <p className="job-sum">{j.summary}</p>}
                    {j.bullets.length > 0 && <ul className="job-list">{j.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
                    {j.stack.length > 0 && <div className="chips">{j.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="section" id="process">
          <div className="container">
            <header className="section-head reveal">
              <p className="eyebrow">How to start</p>
              <h2 className="display h2">No black box.</h2>
              <p className="section-sub">You always know the approach, the risks and the cost before any code is written.</p>
            </header>
            <ol className="steps">
              {STEPS.map(([when, h, p]) => (
                <li className="step reveal" key={h}>
                  <span className="step-when">{when}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section className="section section-muted" id="about">
          <div className="container about">
            <div className="about-main reveal">
              <p className="eyebrow">About</p>
              <h2 className="display h2">I make complicated geometry look simple.</h2>
              <p>I’m David, a senior computer vision and geospatial AI engineer based in Zacatecas, Mexico, working with teams worldwide. I studied Computer Science at Universidad Autónoma de Zacatecas and have spent more than a decade writing Python for data, vision and 3D.</p>
              <p>My favourite problems live where sensors meet software: LiDAR and point clouds, photogrammetry and Gaussian splats, detection and segmentation models, and the backends and web viewers that make all of it usable.</p>
              <div className="skills">{skills.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
            </div>
            <div className="about-side">
              <article className="story reveal">
                <span className="story-icon" aria-hidden="true">🏠</span>
                <h3>Roofing meets AI</h3>
                <p>I’ve spent years looking at roofs from a different angle. Literally. Where most people see shingles and chimneys, I see point clouds, roof planes, pitch angles and geometry waiting to be solved.</p>
                <p>From detecting roof edges and calculating slopes to building 3D roof models: because climbing a roof is hard enough. Your software shouldn’t have to.</p>
              </article>
              <article className="story reveal">
                <span className="story-icon" aria-hidden="true">🎹</span>
                <h3>Coffee into code &amp; music</h3>
                <p>By day I make computers follow instructions. By night I try to make 88 piano keys cooperate. Music and programming share patterns, timing, creativity and the occasional unexpected error.</p>
                <p>The difference? When I hit the wrong key on a piano, the whole system doesn’t crash.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="section" id="contact">
          <div className="container">
            <div className="cta-card reveal">
              <PointCloud />
              <div className="cta-inner">
                <p className="eyebrow eyebrow-on-dark">Got data that won’t behave?</p>
                <h2 className="display h2">Send me a sample and one line about what you need.</h2>
                <p className="cta-sub">I’ll reply with how I would approach it, the risks I see and a realistic estimate. If I’m not the right fit, I’ll say so.</p>
                <div className="cta-row">
                  <a className="btn btn-signal btn-lg" href={site.github} target="_blank" rel="noopener noreferrer"><GitHub /> github.com/{site.githubHandle}</a>
                  {site.email && <a className="btn btn-outline-dark btn-lg" href={`mailto:${site.email}`}>Email me</a>}
                  {site.upwork && <a className="btn btn-outline-dark btn-lg" href={site.upwork} target="_blank" rel="noopener noreferrer">Hire on Upwork</a>}
                </div>
                <p className="cta-note">{site.rate} · Remote · Zacatecas, Mexico (CST, UTC−6)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">david<span className="logo-tag">.cv</span></a>
            <p className="footer-name">{site.name}</p>
            <p className="footer-role">{site.role}</p>
            <p className="footer-blurb">Software that turns LiDAR scans, drone imagery and camera data into accurate 3D models, maps and AI you can put into production.</p>
          </div>
          <div>
            <p className="footer-h">Explore</p>
            <ul className="footer-links">{NAV.map(([h, l]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
          </div>
          <div>
            <p className="footer-h">Projects</p>
            <ul className="footer-links">{projects.map((p) => <li key={p.slug}><CaseButton slug={p.slug}>{p.name}</CaseButton></li>)}</ul>
          </div>
          <div>
            <p className="footer-h">Elsewhere</p>
            <ul className="footer-links">
              <li><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
              {site.upwork && <li><a href={site.upwork} target="_blank" rel="noopener noreferrer">Upwork ↗</a></li>}
              {site.linkedin && <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>}
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}. Built with Next.js, hosted on Vercel.</p>
          <p>Based in Zacatecas, Mexico, working worldwide.</p>
        </div>
      </footer>

      <FloatingMessage />
      <RevealObserver />
    </GalleryProvider>
  );
}
