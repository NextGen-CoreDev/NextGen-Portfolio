import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-bricolage", display: "swap" });
const body = Geist({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-geist", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap" });

const description =
  "Senior computer vision and geospatial AI engineer. I build the software that turns LiDAR scans, drone imagery and camera data into accurate 3D models, maps and AI you can put into production. 12+ years, Python.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Senior CV/ML Engineer | LiDAR, GIS & 3D Geospatial AI`,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.name} · Senior CV/ML Engineer`,
    description: "LiDAR, point clouds, 3D reconstruction and geospatial AI, from raw sensor data to production.",
    images: ["/projects/tak24/6.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Runs before paint: applies the saved theme (no flash) and enables reveal animations.
const bootScript = `(function(){var t=null;try{t=localStorage.getItem("theme")}catch(e){}if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t);document.documentElement.classList.add("js")})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
