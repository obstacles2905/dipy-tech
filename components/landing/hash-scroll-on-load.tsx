"use client";

import { useEffect } from "react";

/**
 * Якщо відкрили /#section без кліку по Link, браузер інколи не встигає
 * після гідрації — підстраховуємо після mount.
 */
export function HashScrollOnLoad() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return () => clearTimeout(t);
  }, []);

  return null;
}
