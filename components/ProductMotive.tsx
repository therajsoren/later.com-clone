import { ChevronRight } from "lucide-react";

import { numberProps } from "@/types";
import { ProductMotiveCard } from "@/types";

const ProductMotive = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:text-5xl text-3xl text-gray-900/100 text-center font-extrabold pb-2">
          Powerful alone. Stronger together.
        </h1>

        <div className="text-slate-950 grid md:grid-cols-3 grid-cols-1 p-5 ">
          {ProductMotiveCard.map((ProductMotiveCard, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "md:border-2 p-3 pb-0 md:border-l-0 md:border-t-0 md:border-b-0 border-b-2 w-full mx-auto"
                  : ""
              } flex flex-col justify-around items-center gap-4 p-3 pb-0 ${
                index == 2
                  ? "md:border-2 md:border-t-0 md:border-r-0 md:border-b-0  border-t-2"
                  : ""
              }`}
            >
              <h1 className="text-xl text-center font-bold">
                {ProductMotiveCard.heading}
              </h1>
              <p className="text-center lg:text-base text-sm text-slate-900/80 p-4 pb-0 ">
                {ProductMotiveCard.description}
              </p>
              <div className="bg-blue-500 border-2 rounded-4xl from-background lg:text-sm p-1.5 pl-3 text-xs mb-8 flex items-center text-slate-200">
                {ProductMotiveCard.buttonLabel}
                <span>
                  <ChevronRight />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 text-slate-950 gap-3 p-5 mt-10">
          {numberProps.map((numberProps, index) => (
            <div
              key={index}
              className="flex flex-col justify-around items-center"
            >
              <h1 className="text-7xl font-semibold">{numberProps.number}</h1>
              <h2 className="font-semibold text-slate-400 text-2xl text-center pt-2">
                {numberProps.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMotive;
