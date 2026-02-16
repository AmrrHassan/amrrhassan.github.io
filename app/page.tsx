
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems, gridItems, gridItemsTwo } from "@/data";

import Clients from "@/components/Clients";
import SEOSchemas from "@/components/SEOSchemas";

import dynamic from 'next/dynamic';

// Lazy load heavy components to reduce initial bundle size
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), {
  ssr: false,
});
const Grid = dynamic(() => import('@/components/Grid'), {
  ssr: false,
});
const Approach = dynamic(() => import('@/components/Approach'), {
  ssr: false,
  loading: () => <div className="h-screen" />
});
const WorkExperience = dynamic(() => import('@/components/WorkExperience'), {
  ssr: false,
  loading: () => <div className="min-h-[50vh]" />
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  ssr: false,
  loading: () => <div className="min-h-[40vh]" />
});
const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
  loading: () => <div className="min-h-[60vh]" />
});
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => <div className="min-h-[20vh]" />
});

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 light:bg[#f0f0f0] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <SEOSchemas />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid divID="about" gridItems={gridItems} />
        <Clients />
        <RecentProjects />
        <Grid divID="" gridItems={gridItemsTwo} />
        <Approach />
        <WorkExperience />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}