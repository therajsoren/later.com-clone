"use client";
import ImageGallery from "./ImageGallery";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto pt-[3rem]">
        <h1 className="bg-gradient-to-b from-sky-600/60 to-neutral-800 bg-clip-text text-transparent p-4 text-3xl md:text-6xl font-semibold text-center">
          Campaigns, creators, conversions.
          <br />
          Influencer marketing, reimagined.
        </h1>
        <div className="flex md:flex-row flex-col items-center justify-center max-w-2xl mx-auto pt-[4rem] gap-2">
          <Input placeholder="Enter your email" className="rounded-3xl bg-neutral-50 md:w-1/2 w-full p-6 md:text-left text-center" />
          <Button className="rounded-3xl p-6 md:w-fit w-full">Get started for free</Button>
        </div>
        <p className="pt-[3rem] text-xs text-center text-gray-700">
          By signing up, I agree to Later’s{" "}
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy.</span>
        </p>

        <div className="min-h-[500px] my-auto">
          <ImageGallery />
        </div>
      </div>
    </section>
  );
};

export default Hero;
