import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { businessConfig } from '../config/business';

type SeoProps = {
  title: string;
  description: string;
};

function setMeta(key: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export function Seo({ title, description }: SeoProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | ${businessConfig.displayName}`;
    const canonicalUrl = new URL(pathname, businessConfig.siteUrl).href;

    document.title = fullTitle;
    setMeta('description', description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, pathname]);

  return null;
}
