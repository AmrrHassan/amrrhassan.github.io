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
      <h1 className="heading font-bold justify-center text-center">
        A selection of
        <span className="text-purple"> recent projects</span>
      </h1>
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
                  {/* <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  > */}
                  {/* <img src="images/bg.png" alt="bgimg" /> */}
                  {/* </div> */}
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 object-cover rounded-lg w-full h-full"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

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
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-l md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        {visibleProjects < projects.length && (
          <a onClick={handleLoadMore}>
            <MagicButton
              title="Load More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        )}
        {visibleProjects > 6 && (
          <a onClick={handleCollapse}>
            <MagicButton
              title="Collapse"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
