#!/usr/bin/env node
/**
 * HEAD-checks club website URLs from data (run locally / in CI).
 * Usage: node scripts/check-club-links.mjs
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function extractUrls() {
  const files = [
    "data/clubs/consulting.ts",
    "data/clubs/rest.ts",
    "data/clubs/enrichments.ts",
  ];
  const urls = new Set();
  const re = /https?:\/\/[^\s"'`]+/g;
  for (const f of files) {
    const text = readFileSync(join(root, f), "utf8");
    let m;
    while ((m = re.exec(text)) !== null) {
      let u = m[0].replace(/[,;)\]}>'"]+$/, "");
      urls.add(u);
    }
  }
  return [...urls];
}

async function checkUrl(url) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 12000);
  try {
    const headRes = await fetch(url, { method: "HEAD", signal: ac.signal, redirect: "follow" });
    clearTimeout(t);
    if (headRes.ok) return { url, ok: true, status: headRes.status, via: "HEAD" };
    // Some hosts block HEAD or return 405 — try GET once
    if (headRes.status === 405 || headRes.status === 403 || headRes.status === 501) {
      const ac2 = new AbortController();
      const t2 = setTimeout(() => ac2.abort(), 12000);
      try {
        const getRes = await fetch(url, { method: "GET", signal: ac2.signal, redirect: "follow" });
        clearTimeout(t2);
        return {
          url,
          ok: getRes.ok,
          status: getRes.status,
          via: "GET",
        };
      } catch (e2) {
        clearTimeout(t2);
        return { url, ok: false, status: 0, error: String(e2), via: "GET" };
      }
    }
    return { url, ok: headRes.ok, status: headRes.status, via: "HEAD" };
  } catch (e) {
    clearTimeout(t);
    const ac3 = new AbortController();
    const t3 = setTimeout(() => ac3.abort(), 12000);
    try {
      const getRes = await fetch(url, { method: "GET", signal: ac3.signal, redirect: "follow" });
      clearTimeout(t3);
      return { url, ok: getRes.ok, status: getRes.status, via: "GET-after-error" };
    } catch (e2) {
      clearTimeout(t3);
      return { url, ok: false, status: 0, error: String(e2) };
    }
  }
}

const urls = extractUrls();
console.log(`Checking ${urls.length} URLs…\n`);
let failed = 0;
for (const url of urls.sort()) {
  const r = await checkUrl(url);
  if (r.ok) {
    console.log(`OK ${r.status}${r.via ? ` (${r.via})` : ""}  ${url}`);
  } else {
    failed++;
    console.log(`FAIL ${r.status}  ${url}${r.error ? `  (${r.error})` : ""}`);
  }
}
console.log(`\nDone. ${failed} failed.`);
process.exit(failed > 0 ? 1 : 0);
