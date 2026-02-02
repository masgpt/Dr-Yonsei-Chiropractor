import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yonseichiro.com';
  
  const staticPages = [
    '',
    '/about',
    '/accessibility',
    '/contact',
    '/message',
    '/reviews',
    '/services',
    '/techniques/about-chiropractic',
    '/techniques/car-accident',
    '/techniques/innate-intelligence',
    '/techniques/subluxation',
    '/techniques/tmj',
    '/techniques/upper-cervical',
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
