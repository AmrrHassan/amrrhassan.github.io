'use client';

import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in full-stack development with deep expertise in React, Next.js, TypeScript, Node.js, NestJS, and Flutter. I'm proficient with both SQL databases (MySQL, PostgreSQL) and NoSQL (MongoDB), and have extensive experience with WordPress and headless CMS architectures. Over the past 5+ years, I've delivered 35+ projects leveraging these technologies."
    },
    {
      question: "How many projects have you completed?",
      answer: "I've successfully delivered over 35 professional projects across multiple industries including e-commerce, healthcare, fitness, real estate, pharmaceuticals, and food & beverage sectors. My projects span Egypt, UAE, Saudi Arabia, and Germany, with a proven 100% client satisfaction rate."
    },
    {
      question: "What industries have you worked in?",
      answer: "My experience spans diverse sectors: E-commerce platforms like GNC MENA serving 50,000+ monthly users, Healthcare apps like Alex I Care (4.8+ rating), Fitness solutions including Cairo Fitness Expo connecting 10,000+ athletes, Real Estate (Miemar KSA), Pharmaceuticals (Spire Pharma), Food & Beverage (Al Monairy Group's digital presence), and Enterprise Technology Services (Optechme, HiTech UAE)."
    },
    {
      question: "Where are you located and which regions do you serve?",
      answer: "I'm based in Alexandria, Egypt, and work with clients globally. I've successfully delivered projects across the Middle East (Egypt, UAE, Saudi Arabia) and Europe (Germany). I'm fully equipped for remote collaboration and flexible with time zones, making it easy to work with international teams."
    },
    {
      question: "What types of applications do you build?",
      answer: "I build end-to-end solutions: responsive web applications using React and Next.js with server-side rendering, cross-platform mobile apps with Flutter for iOS and Android, scalable e-commerce platforms (Shopify, WooCommerce, custom solutions), enterprise systems with microservices architecture, healthcare applications with HIPAA compliance considerations, and custom CMS implementations."
    },
    {
      question: "What's your current role and availability?",
      answer: "I currently work as a Software Engineer at Nawy (since June 2025), where I architect high-performance applications serving 50,000+ users. I also take on select freelance projects where I can bring significant value. My focus is on long-term partnerships with clients who appreciate quality, clean architecture, and measurable results."
    }
  ];

  return (
    <section id="faq" className="py-20 w-full">
      <h2 className="heading">
        Frequently Asked <span className="text-purple">Questions</span>
      </h2>
      <div className="w-full max-w-5xl mx-auto mt-10 space-y-4 px-4 sm:px-6">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group w-full bg-black-100 dark:bg-white/5 rounded-lg p-4 sm:p-6 hover:bg-black-200 transition-all cursor-pointer border border-white/[0.1]"
          >
            <summary className="text-base sm:text-lg font-semibold text-white list-none flex items-center justify-between w-full gap-4">
              <span className="flex-1 text-left">{faq.question}</span>
              <span className="group-open:rotate-180 transition-transform flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm sm:text-base text-white-100 dark:text-neutral-400 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
