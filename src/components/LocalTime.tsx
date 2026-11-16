"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function LocalTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    let fmt: Intl.DateTimeFormat;
    try { fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: site.timeZone }); }
    catch { fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }); }
    const tick = () => setTime(fmt.format(new Date()).toLowerCase());
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time}</span>;
}
