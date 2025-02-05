import React from "react";
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <BackgroundLines
      className="flex items-center justify-center w-full flex-col px-4"
      svgOptions={{ duration: 5 }}
    >
      {/* Optimized H1 - Only one main heading */}
      <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 sm:py-5 relative z-20 font-bold tracking-tight">
        Amr Hassan Hafez
      </h1>

      {/* Moved Subtitle to H2 for better SEO */}
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-3xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
        <TextGenerateEffect words="Pixel-Perfect Solutions" />
      </h2>

      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        As a full-stack engineer, I specialize in creating end-to-end solutions,
        from conceptualization to deployment.
        <br />
        In this portfolio, I&apos;ll be showcasing my most prized projects,
        sharing my experiences and insights.
      </p>

      <a href="#projects" className="py-10">
        <MagicButton
          title="Check my Work"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </BackgroundLines>
  );
};

export default Hero;