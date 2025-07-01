// sitemap-builder.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = "https://johncodes.xyz";

const staticRoutes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/business", changefreq: "monthly", priority: 0.9 },
  { url: "/ngo", changefreq: "monthly", priority: 0.9 },
  { url: "/about", changefreq: "yearly", priority: 0.5 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "weekly", priority: 0.7 },
  { url: "/work", changefreq: "monthly", priority: 0.7 },
];

const dynamicRoutes = [];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

async function generate() {
  const sitemap = new SitemapStream({ hostname: baseUrl });
  const write = createWriteStream(
    path.resolve(__dirname, "public", "sitemap.xml")
  );

  allRoutes.forEach((route) => sitemap.write(route));
  sitemap.end();

  await streamToPromise(sitemap).then((sm) => write.write(sm));

  console.log("✅  Sitemap generated at /public/sitemap.xml");
}

generate().catch(console.error);
