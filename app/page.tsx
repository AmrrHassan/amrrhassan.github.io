import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems, gridItems, gridItemsTwo } from "@/data";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 light:bg[#f0f0f0] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid divID="about" gridItems={gridItems} />
        <RecentProjects />
        <Clients />
        <Grid divID="" gridItems={gridItemsTwo} />
        <Approach />
        <WorkExperience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
