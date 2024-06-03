import { NextApiRequest, NextApiResponse } from 'next';

export default async function RobotsTxt(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const robotsTxt = `
    User-agent: *
    Disallow: /secret-page
    Disallow: /admin
    Allow: /

    Sitemap: https://yourdomain.com/sitemap.xml
  `;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(robotsTxt);
}
