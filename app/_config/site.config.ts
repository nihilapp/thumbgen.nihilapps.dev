import { SiteConfig } from '@/_types/common.types';

export const siteConfig: SiteConfig = {
  title: '썸네일 생성기',
  description: '편리하게 블로그 썸네일을 생성하세요.',
  keywords: '블로그,썸네일,blog,thumbnail',
  author: {
    name: 'NIHILncunia',
    url: 'https://github.com/NIHILncunia',
  },
  type: 'website',
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://thumbgen.nihilapps.dev',
  image: {
    link: '/opengraph-image.png',
    alt: 'site image',
  },
  version: 'v0.0.0',
  googleVerfi: '',
  googleAdSrc: '',
  googleAnalyticsId: '',
  get isBaseUrl() {
    return `${this.url}/api`;
  },
};
