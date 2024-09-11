import { workExperience } from "@/data";
import React from "react";
import { TechCard } from "./ui/TechCard";

const WorkExperience = () => {
  return (
    <section className="my-10" id="work">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <h3 className="heading font-bold justify-center text-center">
          My work <span className="text-purple">experience</span>
        </h3>
        <div className="work-container my-10">
          <div className="work-card px-6 sm:px-0">
            <TechCard />
          </div>
          <div className="work-content sm:grid-cols-1 md:grid-cols-1 px-4">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperience.map(
                ({ id, name, title, pos, duration, icon, location }) => (
                  <div key={id} className="work-content_container group">
                    <div className="flex flex-col h-full w-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-200">{name}</p>
                      <p className="text-sm mb-5 text-white-200">
                        {pos} - {duration}{" "}
                        <span className="text-white-200 block lg:inline lg:float-end lg:py-3">
                          {" "}
                          {location}
                        </span>
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
