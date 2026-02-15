
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems, gridItems, gridItemsTwo } from "@/data";

import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";
import FAQ from "@/components/FAQ";
import SEOSchemas from "@/components/SEOSchemas";

import dynamic from 'next/dynamic';

const RecentProjects = dynamic(() => import('@/components/RecentProjects'), {
  ssr: false,
});
const Grid = dynamic(() => import('@/components/Grid'), {
  ssr: false,
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