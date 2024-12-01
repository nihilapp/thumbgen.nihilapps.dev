import { Metadata } from 'next';
import { siteConfig } from '@/_config';
import type { SiteMetadata } from '@/_types';

export const setMeta = (meta: SiteMetadata): Metadata => {
  const siteDescription = meta.description || siteConfig.description;
  const siteKeywords = meta.keywords
    ? `${siteConfig.keywords}, ${meta.keywords}`
    : siteConfig.keywords;
  const siteUrl = `${siteConfig.url}${meta.url}`;
  const siteImageLink = meta.image
    ? `${siteConfig.url}${meta.image.link}`
    : `${siteConfig.url}${siteConfig.image.link}`;
  const siteImageAlt = meta.image?.alt || siteConfig.image.alt;

  return {
    metadataBase: new URL(siteConfig.url),
    title: meta.title,
    description: siteDescription,
    keywords: siteKeywords,
    authors: {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    openGraph: {
      title: meta.title,
      description: siteDescription,
      locale: 'ko_KR',
      type: 'website',
      siteName: siteConfig.title,
      url: siteUrl,
      images: [
        {
          url: siteImageLink,
          width: 1920,
          height: 1080,
          alt: siteImageAlt,
        },
      ],
    },
    alternates: {
      canonical: siteUrl,
    },
    other: {
      version: siteConfig.version,
    },
  };
};
