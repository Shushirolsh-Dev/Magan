import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");

const checks = [
  ["HTML document has a title", /<title>.+<\/title>/.test(html)],
  ["React mount point exists", /id="root"/.test(html)],
  ["Work section exists", /id="work"/.test(app)],
  ["About section exists", /id="about"/.test(app)],
  ["Contact section exists", /id="contact"/.test(app)],
];

let failed = false;
for (const [label, passed] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${label}`);
  if (!passed) failed = true;
}
if (failed) process.exit(1);
console.log(`\n${checks.length} checks passed.`);