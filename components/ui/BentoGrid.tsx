'use client';
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  titleClassName,
  imgClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string;
  img?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("amrhassanhafez@hotmail.com");

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento shadow-xl first-letter:hover:shadow-2xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background:
          "linear-gradient(to bottom right, var(--background), rgb(20, 30, 60))",
        backgroundColor:
          "linear-gradient(to bottom right, rgb(4, 7, 29), rgb(20, 30, 60))",
      }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={title ? String(title) : "Portfolio Image"}
              className={cn(imgClassName, "object-cover object-center")}
              width="400" // Set a reasonable width
              height="250" // Set a reasonable height
              loading="lazy"
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={`Additional graphic for ${title ? String(title) : "Portfolio Item"}`}
              className="object-cover object-center w-full h-auto"
              width="200"
              height="100"
              loading="lazy"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 6 || id === 1 ? "text-white" : "text-[var(--text-primary)]"
          )}
        >
          <div className="font-sans font-extralight text-[var(--text-third)] light:text-[var(--text-secondary)] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {/* {id === 2 && <GlobeDemo />} */}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col gap-3 lg:gap-4">
                {["ReactJS", "NextJS", "TypeScript", "ReactJS"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[var(--background-layer)]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 lg:py-6 px-3 rounded-lg text-center bg-[var(--background-layer)]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-6">
                <span className="py-4 lg:py-3 px-3 rounded-lg text-center bg-[var(--background-layer)]" />

                {["Flutter", "NodeJS", "ThreeJS"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[var(--background-layer)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};