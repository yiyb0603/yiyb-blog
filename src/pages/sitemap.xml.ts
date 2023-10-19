import { NextPage, GetServerSideProps } from 'next';
import dayjs from 'dayjs';
import { allPosts } from '@/contentlayer/generated';
import { pageRoute } from '@/libs/models/route';
import generateFullURL from '@/utils/string/generateFullURL';

const SitemapPage: NextPage = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;

  let pagesXMLString = '';

  const descOrderPosts = [...allPosts].sort((prev, next) => {
    return Date.parse(next.createdAt) - Date.parse(prev.createdAt);
  });

  for (const { _raw, createdAt } of descOrderPosts) {
    pagesXMLString += `
      <url>
        <loc>${generateFullURL(
          `${pageRoute.POSTS}/${encodeURIComponent(_raw.flattenedPath)}`,
        )}</loc>
        <lastmod>${dayjs(createdAt).format('YYYY-MM-DDTHH:mm:ssZ')}</lastmod>
      </url>
    `;
  }

  const xmlContents = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pagesXMLString}
    </urlset>
  `;

  res?.setHeader('Content-Type', 'text/xml');

  res?.write(xmlContents);
  res?.end();

  return {
    props: {},
  };
};

export default SitemapPage;
