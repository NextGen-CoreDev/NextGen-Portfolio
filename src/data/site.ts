/* Personal links. Leave a value empty ("") to hide the matching button/link. */
export const site = {
  name: "David Alejandro O.",
  shortName: "David",
  initials: "DA",
  role: "Senior CV/ML Engineer · LiDAR, GIS, 3D Geospatial AI",
  location: "Zacatecas, Mexico",
  timeZone: "America/Mexico_City",
  rate: "$35/hr",
  github: "https://github.com/NextGen-CoreDev",
  githubHandle: "NextGen-CoreDev",
  email: "",    // e.g. "you@domain.com"
  upwork: "",   // full Upwork profile URL
  linkedin: "", // full LinkedIn URL
  avatar: "",   // e.g. "/avatar.jpg" after adding public/avatar.jpg
  // Absolute site URL for SEO/social previews. On Vercel it is detected automatically;
  // set NEXT_PUBLIC_SITE_URL in Vercel → Settings → Environment Variables if you add a custom domain.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
};
