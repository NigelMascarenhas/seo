// /pages/api/sitemap.ts
import { NextApiRequest, NextApiResponse } from 'next';

const generateSitemap = () => {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static pages
  const staticPages = ['/']; // Add more static pages if needed
  staticPages.forEach((page) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://visionxtechnologies.com${page}</loc>\n`;
    sitemap += `  </url>\n`;
  });

  // Add dynamic pages
  const dynamicPages = ['/blog', '/pricing', '/contact']; // Add more dynamic pages if needed
  dynamicPages.forEach((page) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://visionxtechnologies.com${page}</loc>\n`;
    sitemap += `  </url>\n`;
  });

  // Close urlset
  sitemap += '</urlset>';

  return sitemap;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = generateSitemap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
