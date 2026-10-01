import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "./source/site.js";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const outputRoot = join(projectRoot, "public");
const basePath = "/stretchtap-support";

const routes = [
  ["/", "index.html"],
  ["/support", "support/index.html"],
  ["/privacy", "privacy/index.html"],
  ["/fr", "fr/index.html"],
  ["/fr/support", "fr/support/index.html"],
  ["/fr/privacy", "fr/privacy/index.html"],
  ["/es", "es/index.html"],
  ["/es/support", "es/support/index.html"],
  ["/es/privacy", "es/privacy/index.html"],
  ["/de", "de/index.html"],
  ["/de/support", "de/support/index.html"],
  ["/de/privacy", "de/privacy/index.html"],
  ["/it", "it/index.html"],
  ["/it/support", "it/support/index.html"],
  ["/it/privacy", "it/privacy/index.html"]
];

function adaptForProjectPages(html) {
  return html.replaceAll(/href="\/([^"#]*)"/g, (_match, path) => {
    return `href="${basePath}/${path}"`;
  });
}

await rm(outputRoot, { recursive: true, force: true });

for (const [route, destination] of routes) {
  const html = render(route);
  if (!html) throw new Error(`Route did not render: ${route}`);
  const outputPath = join(outputRoot, destination);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, adaptForProjectPages(html), "utf8");
}

await writeFile(join(outputRoot, ".nojekyll"), "", "utf8");
await writeFile(join(outputRoot, "404.html"), adaptForProjectPages(render("/")), "utf8");

console.log(`Generated ${routes.length} localized pages for GitHub Pages.`);
