"use client";

import { useEffect, useRef } from "react";

/*
  LiDAR-style point cloud: a gable-roof house with trees on noisy terrain, slowly orbiting.
  Colour encodes class/height like a classified LiDAR tile. Animates only while on screen.
*/
export default function PointCloud() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Seeded RNG so the cloud is identical on every load.
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    const rnd = (a: number, b: number) => a + rand() * (b - a);

    type Pt = [number, number, number, number];
    const pts: Pt[] = [];
    for (let i = 0; i < 2600; i++) {
      const x = rnd(-6, 6), z = rnd(-6, 6);
      if (Math.abs(x) < 2.05 && Math.abs(z) < 1.45) continue;
      pts.push([x, 0.18 * Math.sin(x * 0.9) * Math.cos(z * 0.7) + rnd(-0.03, 0.03), z, 0]);
    }
    for (const [tx, tz] of [[-4, 3], [4.2, -3.4], [-3.6, -3.8], [3.8, 3.6]]) {
      for (let i = 0; i < 160; i++) {
        const r = rnd(0, 0.7), a = rnd(0, Math.PI * 2), h = rnd(0.6, 1.9), k = 1 - (h - 0.6) / 1.4;
        pts.push([tx + Math.cos(a) * r * k, h, tz + Math.sin(a) * r * k, 1]);
      }
    }
    for (let i = 0; i < 700; i++) {
      const h = rnd(0, 1.2), side = Math.floor(rnd(0, 4));
      const x = side < 2 ? rnd(-2, 2) : side === 2 ? 2 : -2;
      const z = side < 2 ? (side ? 1.4 : -1.4) : rnd(-1.4, 1.4);
      pts.push([x, h, z, 2]);
    }
    for (let i = 0; i < 1500; i++) {
      const x = rnd(-2.2, 2.2), z = rnd(-1.6, 1.6);
      pts.push([x, 1.2 + (1.6 - Math.abs(z)) * 0.62, z, 3]);
    }
    for (let i = 0; i < 120; i++) pts.push([rnd(-2.2, 2.2), 1.2 + 1.6 * 0.62, 0, 4]);

    const COLORS = ["rgba(82,82,91,0.75)", "rgba(45,212,191,0.75)", "rgba(161,161,170,0.55)", "rgba(184,242,58,0.85)", "rgba(190,242,100,1)"];
    const proj = pts.map(() => [0, 0, 0, 0] as [number, number, number, number]);

    let w = 0, h = 0, angle = 0.6, raf = 0, running = false;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const wide = w > 900;
      const cx = wide ? w * 0.72 : w * 0.6, cy = h * 0.62;
      const scale = Math.min(w, h * 1.6) / (wide ? 13 : 10);
      const ca = Math.cos(angle), sa = Math.sin(angle), ct = Math.cos(0.42), st = Math.sin(0.42);
      for (let i = 0; i < pts.length; i++) {
        const [x, y, z] = pts[i];
        const rx = x * ca - z * sa, rz = x * sa + z * ca;
        const ry = y * ct - rz * st, depth = y * st + rz * ct, persp = 9 / (9 + depth);
        const o = proj[i]; o[0] = cx + rx * scale * persp; o[1] = cy - ry * scale * persp; o[2] = depth; o[3] = i;
      }
      const order = [...proj].sort((a, b) => b[2] - a[2]);
      for (const [px, py, d, i] of order) {
        const s = Math.max(1, 2.2 - d * 0.12);
        ctx.fillStyle = COLORS[pts[i][3]];
        ctx.fillRect(px, py, s, s);
      }
    };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const loop = () => { angle += 0.0025; draw(); if (running) raf = requestAnimationFrame(loop); };

    resize();
    window.addEventListener("resize", resize);
    let io: IntersectionObserver | undefined;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
      io = new IntersectionObserver(([en]) => {
        running = en.isIntersecting;
        cancelAnimationFrame(raf);
        if (running) raf = requestAnimationFrame(loop);
      });
      io.observe(canvas);
    }
    return () => { running = false; cancelAnimationFrame(raf); io?.disconnect(); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="cta-cloud" aria-hidden="true" />;
}
