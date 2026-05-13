'use client';

import { useEffect } from 'react';

export function AnchorHandler() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = (e.target as HTMLElement).closest('a[data-scroll-to]');
      
      if (!target) return;

      const targetId = target.getAttribute('data-scroll-to');
      if (!targetId) return;

      e.preventDefault();

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Handle click events
    document.addEventListener('click', handleScroll, true);
    
    // Handle touch events for iOS
    document.addEventListener('touchend', handleScroll, true);

    return () => {
      document.removeEventListener('click', handleScroll, true);
      document.removeEventListener('touchend', handleScroll, true);
    };
  }, []);

  return null;
}
