import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems, gridItems, gridItemsTwo } from "@/data";
import { FaHome } from "react-icons/fa";
import RecentProjects  from "@/components/RecentProjects";
import Clients  from "@/components/Clients";
import Approach  from "@/components/Approach";
import Contact  from "@/components/Contact";

export default function Home() {
  return (
    <main id="about" className="relative dark:bg-black-100 light:bg[#f0f0f0] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid gridItems={gridItems} />
        <RecentProjects />
        <Clients /> 
        <Grid gridItems={gridItemsTwo} />
        <Approach />
        <Contact />
      </div>
    </main>
  );
}
