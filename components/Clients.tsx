import { companies } from "@/data";
import React from "react";

const Clients = () => {
  return (
    <div className="mb-20" id="clients">
      <h1 className="heading font-bold justify-center text-center">
        Clients that trust{" "}
        <span className="text-[var(--accent-purple)]">our service</span>
      </h1>

    
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 max-lg: mt-10">
        {companies.map(({ id, img, name }) => (
          <div
            key={id}
            className="flex justify-center items-center md:max-w-80 max-w-32 h-24 gap-1 bg-[var(--logo-background)] rounded-full p-6"
          >
            <img
              className="md:w-24 w-20 object-contain transition duration-300 ease-in-out hover:scale-110"
              src={img}
              alt={name}
            />

            {/* <img className="md:w-24 w-20" src={img} alt={name} /> */}
            {/* {nameImg ? (
              <img className="md:w-24 w-20" src={nameImg} alt={name} />
            ) : (
              <h3 className="text-center font-bold">{name}</h3>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
