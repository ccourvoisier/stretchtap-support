import { access, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const outputRoot = join(projectRoot, "public");
const basePath = "/stretchtap-support/";
const languages = ["fr", "es", "de", "it"];

const expectedFiles = [
  "index.html",
  "support/index.html",
  "privacy/index.html",
  "404.html",
  ".nojekyll",
  ...languages.flatMap((language) => [
    `${language}/index.html`,
    `${language}/support/index.html`,
    `${language}/privacy/index.html`
  ])
];

for (const file of expectedFiles) {
  await access(join(outputRoot, file));
}

for (const file of expectedFiles.filter((file) => file.endsWith(".html"))) {
  const html = await readFile(join(outputRoot, file), "utf8");
  if (!html.includes("StretchTap")) throw new Error(`${file}: missing title`);
  if (html.includes("CONTACT_EMAIL_REQUIRED")) throw new Error(`${file}: unresolved email placeholder`);
  if (!html.includes("support.stretchtap@gmail.com") && file.includes("support")) {
    throw new Error(`${file}: missing support email`);
  }
  const rootLinks = [...html.matchAll(/href="\/(?!stretchtap-support\/)/g)];
  if (rootLinks.length) throw new Error(`${file}: link escapes the GitHub Pages base path`);
  if (!html.includes(basePath)) throw new Error(`${file}: missing project base path`);
}

console.log(`Verified ${expectedFiles.length} GitHub Pages files.`);
