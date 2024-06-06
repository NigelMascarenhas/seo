// pages/sitemap.ts

import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap: { url: string; lastModified: Date }[] = [
    {
      url: 'https://www.visionxtechnologies.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.visionxtechnologies.com/products',
      lastModified: new Date(),
    },
    {
      url: 'https://www.visionxtechnologies.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.visionxtechnologies.com/support',
      lastModified: new Date(),
    },
  ];

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap
    .map((item) => {
      return `
        <url>
          <loc>${item.url}</loc>
          <lastmod>${item.lastModified.toISOString()}</lastmod>
        </url>
      `;
    })
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapXML);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}

export { getServerSideProps };
