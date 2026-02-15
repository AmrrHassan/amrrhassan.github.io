import { companies } from "@/data";
import React from "react";

const Clients = () => {
  return (
    <div className="my-12" id="clients">
      <h3 className="heading font-bold text-center">
        Clients that trust{" "}
        <span className="text-[var(--accent-purple)]">our service</span>
      </h3>

      <div className="max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mt-10 place-items-center">
        {companies.map(({ id, img, name, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-28 sm:w-32 md:w-36 h-24 bg-[var(--logo-background)] rounded-full p-4 shadow-md transition duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={img}
              alt={name}
              title={name}
              loading="lazy"
              width="144"
              height="64"
              className="w-full max-h-16 object-contain transition duration-300 ease-in-out hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clients;