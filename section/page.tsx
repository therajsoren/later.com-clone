import Showcase from "@/components/Showcase";
import SectionCard from "@/section/section-card";
import React from "react";
import SectionInfluencerBenfits from "./section-influencer-benfits";
import SectionSocialMedia from "./section-socialMedia";

const SectionPage = () => {
  return (
    <section className="pt-8 mt-10 space-y-8">
      <div className="bg-pink-200/20">
        <div className="max-w-6xl mx-auto">
          <SectionCard />
          <Showcase />
        </div>
      </div>
      <SectionInfluencerBenfits />
      <SectionSocialMedia />
    </section>
  );
};

export default SectionPage;
