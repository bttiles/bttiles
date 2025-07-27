"use client";

import { useEffect } from 'react';

export default function PerformanceOptimization() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];
      
      fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Optimize images loading
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    };

    // Prefetch next page content
    const prefetchNextPageContent = () => {
      const prefetchLinks = document.querySelectorAll('a[href^="/texture/"], a[href^="/categories"]');
      const linkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const link = entry.target as HTMLAnchorElement;
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = link.href;
            document.head.appendChild(prefetchLink);
            linkObserver.unobserve(link);
          }
        });
      });
      
      prefetchLinks.forEach(link => linkObserver.observe(link));
    };

    // Initialize optimizations
    preloadCriticalResources();
    setTimeout(optimizeImageLoading, 100);
    setTimeout(prefetchNextPageContent, 1000);

    // Cleanup
    return () => {
      // Remove any observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
}
