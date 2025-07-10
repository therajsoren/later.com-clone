"use client";

import Image from "next/image";
import logo_acme from "../public/assests/logo-acme.png";
import logo_apex from "../public/assests/logo-apex.png";
import logo_celestial from "../public/assests/logo-celestial.png";
import logo_echo from "../public/assests/logo-echo.png";
import logo_pulse from "../public/assests/logo-pulse.png";
import logo_quantum from "../public/assests/logo-quantum.png";
import { motion } from "motion/react";
import ProductMotive from "./ProductMotive";

const slides = [
  {
    icon: logo_acme,
  },
  {
    icon: logo_apex,
  },
  {
    icon: logo_celestial,
  },
  {
    icon: logo_echo,
  },
  {
    icon: logo_pulse,
  },
  {
    icon: logo_quantum,
  },
];

const BrandSlide = () => {
  const duplicatedSlides = [...slides, ...slides];
  return (
    <div className="relative bg-background p-10 w-full mx-auto overflow-hidden border-none">
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-background before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-background after:to-transparent after:filter after:blur-3"></div>
      <motion.div
        className="flex md:gap-2 gap-10"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((item, index) => (
          <div
            key={index}
            className="shrink-0"
            style={{
              width: `${100 / slides.length}%`,
            }}
          >
            <div className="flex items-center justify-center h-full">
              <Image
                src={item.icon}
                alt="logo"
                className="w-fit object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandSlide;
