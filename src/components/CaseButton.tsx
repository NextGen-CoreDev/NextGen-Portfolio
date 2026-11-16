"use client";

import { useGallery } from "./Gallery";

export default function CaseButton({ slug, children, className }: { slug: string; children: React.ReactNode; className?: string }) {
  const { openCase } = useGallery();
  return <button type="button" className={className} onClick={() => openCase(slug)}>{children}</button>;
}
