import { useEffect } from 'react';
import { personalInfo } from '../data/portfolio';

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": personalInfo.name,
      "jobTitle": personalInfo.title,
      "email": personalInfo.email,
      "telephone": personalInfo.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amritsar",
        "addressCountry": "IN"
      },
      "url": "https://vartika.dev",
      "sameAs": [
        personalInfo.github,
        personalInfo.linkedin,
        personalInfo.leetcode
      ],
      "knowsAbout": [
        "Java",
        "Spring Boot",
        "React",
        "Data Structures and Algorithms",
        "Artificial Intelligence",
        "MySQL",
        "JavaScript"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Guru Nanak Dev University",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Amritsar",
          "addressCountry": "IN"
        }
      }
    };

    // Check if script already exists
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup on unmount
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
