import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  
  const defaultTitle = 'Yonsei Chiropractic Clinic - Upper Cervical Health Care';
  const defaultDescription = "Dedicated to restoring your health through the precise Palmer Upper Cervical method in Los Angeles. Specialist in TMJ, car accidents, and natural healing.";
  const siteUrl = window.location.origin;
  const defaultImage = `${siteUrl}/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg`;
  
  const seo = {
    title: title ? `${title} | Yonsei Chiropractic Clinic` : defaultTitle,
    description: description || defaultDescription,
    image: image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage,
    url: `${siteUrl}${pathname}`,
  };

  useEffect(() => {
    document.title = seo.title;

    const updateMetaTag = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attr, value);
      } else {
        element = document.createElement('meta');
        const [attrName, attrValue] = selector
          .replace('meta[', '')
          .replace(']', '')
          .split('=');
        element.setAttribute(attrName, attrValue.replace(/"/g, ''));
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
    };

    updateMetaTag('meta[name="description"]', 'content', seo.description);
    
    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'content', seo.title);
    updateMetaTag('meta[property="og:description"]', 'content', seo.description);
    updateMetaTag('meta[property="og:image"]', 'content', seo.image);
    updateMetaTag('meta[property="og:url"]', 'content', seo.url);
    updateMetaTag('meta[property="og:type"]', 'content', article ? 'article' : 'website');

    // Twitter
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', seo.title);
    updateMetaTag('meta[name="twitter:description"]', 'content', seo.description);
    updateMetaTag('meta[name="twitter:image"]', 'content', seo.image);

  }, [seo.title, seo.description, seo.image, seo.url, article]);

  return null;
};

export default SEO;
