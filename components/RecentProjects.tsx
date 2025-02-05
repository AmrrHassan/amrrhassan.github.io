"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { useState } from "react";
import { MagicButton } from "./ui/MagicButton";

const RecentProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLoadMore = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleProjects((prev) => prev + 6);
      setIsAnimating(false);
    }, 400);
  };

  const handleCollapse = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleProjects(6);
      setIsAnimating(false);
    }, 400);
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-10 sm:py-20 mt-10 mb-10" id="projects">
      <h3 className="heading font-bold justify-center text-center">
        A selection of
        <span className="text-[var(--accent-purple)]"> recent projects</span>
      </h3>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 mt-10">
        {projects
          .slice(0, visibleProjects)
          .map(({ id, title, des, img, iconLists, link }, index) => (
            <div
              className={`sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] transition-opacity duration-500 ease-in-out transform ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
              key={id}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] sm-h[40vh] mb-10">
                  <img
                    src={img}
                    alt={`Project - ${title}`}
                    className="z-10 absolute bottom-0 object-cover rounded-lg w-full h-full"
                    width="570"
                    height="340"
                    loading="lazy"
                  />
                </div>

                <h4 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h4>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-[var(--background-layer)] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img
                          src={icon}
                          alt={`Tech Icon ${index + 1}`}
                          className="p-2"
                          width="40"
                          height="40"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center cursor-pointer hover:opacity-80 transition"
                  >
                    <p className="flex lg:text-l md:text-xs text-sm text-[var(--accent-purple)]">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        {visibleProjects < projects.length && (
          <button
            onClick={handleLoadMore}
            className="cursor-pointer hover:opacity-80 transition"
          >
            <MagicButton
              title="Load More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </button>
        )}
        {visibleProjects > 6 && (
          <button
            onClick={handleCollapse}
            className="cursor-pointer hover:opacity-80 transition"
          >
            <MagicButton
              title="Collapse"
              icon={<FaLocationArrow />}
              position="right"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default RecentProjects;