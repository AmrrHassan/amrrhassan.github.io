'use client';

import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in full-stack development with deep expertise in React, Next.js, TypeScript, Node.js, NestJS, and Flutter. I'm proficient with both SQL databases (MySQL, PostgreSQL) and NoSQL (MongoDB), and have extensive experience with WordPress and headless CMS architectures. Over the past 5+ years, I've delivered 40+ projects leveraging these technologies.",
    },
    {
      question: "How many projects have you completed?",
      answer:
        "I've successfully delivered over 40 professional projects across multiple industries including e-commerce, healthcare, fitness, real estate, pharmaceuticals, and food & beverage sectors. My projects span Egypt, UAE, Saudi Arabia, and Germany, with a proven 100% client satisfaction rate.",
    },
    {
      question: "What industries have you worked in?",
      answer:
        "My experience spans diverse sectors: E-commerce platforms like GNC MENA serving 50,000+ monthly users, Healthcare apps like Alex I Care (4.8+ rating), Fitness solutions including Cairo Fitness Expo connecting 10,000+ athletes, Real Estate (Miemar KSA), Pharmaceuticals (Spire Pharma), Food & Beverage (Al Monairy Group's digital presence), and Enterprise Technology Services (Optechme, HiTech UAE).",
    },
    {
      question: "Where are you located and which regions do you serve?",
      answer:
        "I'm based in Cairo, Egypt, and work with clients globally. I've successfully delivered projects across the Middle East (Egypt, UAE, Saudi Arabia) and Europe (Germany). I'm fully equipped for remote collaboration and flexible with time zones, making it easy to work with international teams.",
    },
    {
      question: "What types of applications do you build?",
      answer:
        "I build end-to-end solutions: responsive web applications using React and Next.js with server-side rendering, cross-platform mobile apps with Flutter for iOS and Android, scalable e-commerce platforms (Shopify, WooCommerce, custom solutions), enterprise systems with microservices architecture, healthcare applications with HIPAA compliance considerations, and custom CMS implementations.",
    },
    {
      question: "What's your current role and availability?",
      answer:
        "I currently work as a Software Engineer at Nawy (since June 2025), where I architect high-performance applications serving 50,000+ users. I also take on select freelance projects where I can bring significant value. My focus is on long-term partnerships with clients who appreciate quality, clean architecture, and measurable results.",
    },
  ];

  return (
    <section id="faq" className="py-20 w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m here to help you with any questions you may have. If you
            don&apos;t find what you need, please contact me through form below{" "}
            <a
              href="mailto:amrhassanhafez@hotmail.com"
              className="text-purple hover:underline transition-all"
            >
              amrhassanhafez@hotmail.com
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-black-100/50 backdrop-blur-sm rounded-xl border border-white/[0.05] overflow-hidden transition-all duration-300 hover:border-white/[0.1] hover:bg-black-100"
            >
              <summary className="list-none flex items-start gap-4 p-6 cursor-pointer select-none">
                <span className="mt-1 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <span className="text-xl font-medium text-white group-hover:text-purple transition-colors">
                  {faq.question}
                </span>
              </summary>
              <div className="px-16 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-gray-400 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
