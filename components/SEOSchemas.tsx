'use client';

import { useEffect } from 'react';
import { projects } from '@/data';
import { getItemListSchema } from '@/utils/seo/schemas';

export default function SEOSchemas() {
  useEffect(() => {
    // Add ItemList schema on client-side after data is available
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(getItemListSchema(projects));
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}
