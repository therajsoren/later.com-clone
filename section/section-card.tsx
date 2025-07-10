import { SectionCards } from "@/types";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SectionCard = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center p-2 md:max-w-3xl max-w-2xl mx-auto">
        <h1 className="text-gray-500/50 uppercase text-base">
          The later difference
        </h1>
        <h2 className="text-4xl p-4 text-center text-slate-900">
          World-class tech. Industry-leading expertise. Predictable performance.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 rounded-md gap-[3rem]">
        {SectionCards.map((SectionCards, index) => (
          <div
            className="flex flex-col items-center rounded-lg shadow-xl border-t-2 border-sky-300 to-green-500/80 gap-0 bg-slate-100"
            key={index}
          >
            <img src={SectionCards.img} className="p-3" />
            <div className="flex items-center flex-col justify-center p-4">
              <h1 className="font-semibold md:text-xl text-base">
                {SectionCards.heading}
              </h1>
              <p className="text-center p-2 md:text-base text-sm">
                {SectionCards.description}
              </p>
              <h2 className="underline text-blue-500 flex items-center gap-2">
                Learn more
                <span>
                  <FaArrowRight />
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
