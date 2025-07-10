import React from "react";

import * as motion from "motion/react-client";
import { FaArrowRight } from "react-icons/fa";
import { SocialMedia } from "@/types";
const SectionInfluencerBenfits = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center flex-col mx-auto text-center">
        <h1 className="text-4xl max-w-3xl">
          Social media and influencer marketing should be seamless, not siloed.
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl p-4 mx-auto">
          With Later, you get the tech, services, and data you need to manage
          brand, creator, and paid social—in one place.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 pt-8 p-4">
        {SocialMedia.map((SocialMedia, index) => (
          <div key={index} className="rounded-lg bg-slate-100 pb-4">
            <img className="p-4" src={SocialMedia.img} />
            <div className="flex flex-col items-center p-2 space-y-4">
              <h1 className="text-xl">{SocialMedia.heading}</h1>
              <p className="text-center">{SocialMedia.description}</p>
              <motion.a
                href="#"
                className="flex items-center gap-2 underline text-blue-400 hover:no-underline"
                initial={{
                  x: 0,
                }}
                whileHover={{
                  x: 30,
                }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 30,
                }}
              >
                <span>Learn more</span>
                <span>
                  <FaArrowRight />
                </span>
              </motion.a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionInfluencerBenfits;
