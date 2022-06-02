/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const globby = require("globby");

function addPage(page) {
  const path = page.replace("src/pages", "").replace(".tsx", "");
  const route = path === "/index" ? "" : path;

  return `  <url>
    <loc>${`beatricecox.com${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    "src/pages/**/*.tsx",
    "!src/pages/admin/**/*.tsx",
    "!src/pages/_*.tsx",
    "!src/pages/404.tsx",
    "!pages/api",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
