import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full pt-10 sm:pt-5 pb-0 mb-[50px] md:mb-5"
      id="contact"
    >
      <div className="w-full absolute -bottom-80 sm:-bottom-60 left-0 sm:-left-50 sm:inset-x-10 sm:inset-y-auto min-h-96 sm:min-h-0">
        <img src="/svg/footer-grid.svg" alt="footer-grid" width="500" height="500" />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="heading lg:max-w-[45vw] text-center font-bold">
          Ready to start <span className="text-[var(--accent-purple)]">your</span> new
          project?
        </h3>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in touch with me today to discuss how I can help you grow your
          online presence.
        </p>
        <a href="mailto:amrhassanhafez@hotmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
      {" "}
          Copyright &copy; 2025 Amr Hassan Hafez
        </p>

        <div className="flex items-center md:gap-3 gap-6 pt-3">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link}>
                <img
                  src={profile.img}
                  alt={profile.name}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
