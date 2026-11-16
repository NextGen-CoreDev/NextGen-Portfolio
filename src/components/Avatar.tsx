"use client";

import { useState } from "react";
import { site } from "@/data/site";

/* Initials badge; shows site.avatar on top once a photo is configured and loads. */
export default function Avatar({ small = false }: { small?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className={`avatar${small ? " avatar-sm" : ""}`} aria-hidden="true">
      <span className="avatar-initials">{site.initials}</span>
      {site.avatar && !failed && <img src={site.avatar} alt="" onError={() => setFailed(true)} />}
    </span>
  );
}
