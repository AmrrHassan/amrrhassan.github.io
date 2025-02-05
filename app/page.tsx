'use client';

import { useInView } from "react-intersection-observer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems, gridItems, gridItemsTwo } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";
import { motion } from "framer-motion";

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: workExpRef, inView: workExpInView } = useInView({ triggerOnce: true });

  return (
    <main className="relative dark:bg-black-100 light:bg[#f0f0f0] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        
        <motion.div ref={aboutRef}>{aboutInView && <Grid divID="about" gridItems={gridItems} />}</motion.div>
        <motion.div ref={clientsRef}>{clientsInView && <Clients />}</motion.div>
        <motion.div ref={projectsRef}>{projectsInView && <RecentProjects />}</motion.div>
        <motion.div ref={workExpRef}>{workExpInView && <WorkExperience />}</motion.div>

        <Grid divID="" gridItems={gridItemsTwo} />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}