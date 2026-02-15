export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amr Hassan Hafez",
  "url": "https://amrrhassan.github.io",
  "jobTitle": "Full-Stack Engineer",
  "description": "Full-stack engineer with 35+ delivered projects across Egypt, UAE, Saudi Arabia, and Germany, specializing in web technologies, mobile applications, and end-to-end solutions.",
  "image": "https://amrrhassan.github.io/android-chrome-512x512.png",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Engineering Background"
  },
  "knowsAbout": [
    "Full-Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Flutter",
    "Web Development",
    "Mobile Development",
    "E-commerce Solutions",
    "Healthcare Applications",
    "Fitness Technology"
  ],
  "sameAs": [
    "https://github.com/AmrrHassan",
    "https://www.linkedin.com/in/amrrhassan/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "EG",
    "addressRegion": "Alexandria"
  }
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Amr Hassan - Full-Stack Engineer Portfolio",
  "url": "https://amrrhassan.github.io",
  "description": "Portfolio showcasing 35+ full-stack development projects including e-commerce platforms, healthcare applications, and enterprise solutions.",
  "author": {
    "@type": "Person",
    "name": "Amr Hassan Hafez"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://amrrhassan.github.io#projects?query={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Amr Hassan - Full-Stack Development Services",
  "url": "https://amrrhassan.github.io",
  "logo": "https://amrrhassan.github.io/android-chrome-512x512.png",
  "description": "Professional full-stack development services specializing in modern web applications, mobile solutions, and enterprise platforms.",
  "founder": {
    "@type": "Person",
    "name": "Amr Hassan Hafez"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Egypt"
    },
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    {
      "@type": "Country",
      "name": "Germany"
    }
  ],
  "serviceType": [
    "Full-Stack Development",
    "Web Application Development",
    "Mobile Application Development",
    "E-commerce Solutions",
    "Healthcare Technology",
    "Enterprise Software"
  ]
});

export const getItemListSchema = (projects: any[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Featured Projects by Amr Hassan",
  "description": "A curated list of 35+ professional projects spanning e-commerce, healthcare, fitness, real estate, and enterprise solutions.",
  "numberOfItems": projects.length,
  "itemListElement": projects.slice(0, 10).map((project, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.des,
      "url": project.link !== "#" ? project.link : "https://amrrhassan.github.io#projects",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  }))
});

export const getFAQPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What technologies does Amr Hassan specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amr Hassan specializes in full-stack development with deep expertise in React, Next.js, TypeScript, Node.js, NestJS, and Flutter. He is proficient with both SQL databases (MySQL, PostgreSQL) and NoSQL (MongoDB), and has extensive experience with WordPress and headless CMS architectures. Over the past 5+ years, he has delivered 35+ projects leveraging these technologies."
      }
    },
    {
      "@type": "Question",
      "name": "How many projects has Amr Hassan completed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amr Hassan has successfully delivered over 35 professional projects across multiple industries including e-commerce, healthcare, fitness, real estate, pharmaceuticals, and food & beverage sectors. His projects span Egypt, UAE, Saudi Arabia, and Germany, with a proven 100% client satisfaction rate."
      }
    },
    {
      "@type": "Question",
      "name": "What industries has Amr Hassan worked in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amr Hassan's experience spans diverse sectors: E-commerce platforms like GNC MENA serving 50,000+ monthly users, Healthcare apps like Alex I Care (4.8+ rating), Fitness solutions including Cairo Fitness Expo connecting 10,000+ athletes, Real Estate (Miemar KSA), Pharmaceuticals (Spire Pharma), Food & Beverage (Al Monairy Group's digital presence), and Enterprise Technology Services (Optechme, HiTech UAE)."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Amr Hassan located and which regions does he serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amr Hassan is based in Alexandria, Egypt, and works with clients globally. He has successfully delivered projects across the Middle East (Egypt, UAE, Saudi Arabia) and Europe (Germany). He is fully equipped for remote collaboration and flexible with time zones, making it easy to work with international teams."
      }
    },
    {
      "@type": "Question",
      "name": "What types of applications does Amr Hassan develop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amr Hassan builds end-to-end solutions: responsive web applications using React and Next.js with server-side rendering, cross-platform mobile apps with Flutter for iOS and Android, scalable e-commerce platforms (Shopify, WooCommerce, custom solutions), enterprise systems with microservices architecture, healthcare applications with HIPAA compliance considerations, and custom CMS implementations."
      }
    },
    {
      "@type": "Question",
      "name": "What is Amr Hassan's current role and availability?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amr Hassan currently works as a Software Engineer at Nawy (since June 2025), where he architects high-performance applications serving 50,000+ users. He also takes on select freelance projects where he can bring significant value. His focus is on long-term partnerships with clients who appreciate quality, clean architecture, and measurable results."
      }
    }
  ]
});

export const getBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://amrrhassan.github.io"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://amrrhassan.github.io#about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Projects",
      "item": "https://amrrhassan.github.io#projects"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Work Experience",
      "item": "https://amrrhassan.github.io#work"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Contact",
      "item": "https://amrrhassan.github.io#contact"
    }
  ]
});
