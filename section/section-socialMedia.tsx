import React from "react";

const InfluencerImage = [
  {
    image: "https://later.com/images/temp/profiles/shadelleg.png",
    name: "Shadelle Goodson",
    username: "@shadelleg",
  },
  {
    image: "https://later.com/images/temp/profiles/ayelow.jpg",
    name: "David Contreras",
    username: "@ayelow",
  },
  {
    image: "https://later.com/images/temp/profiles/honestlylynn.png",
    name: "Lynn",
    username: "@honestly.lynn",
  },
  {
    image: "https://later.com/images/temp/profiles/ayyysebas.jpg",
    name: "Sebastian Robles",
    username: "@ayyysebas",
  },
  {
    image: "https://later.com/images/temp/profiles/jenickalopez.jpg",
    name: "Jenicka Lopez",
    username: "@jenickalopez",
  },
];

const SectionSocialMedia = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center flex-col text-center">
        <h1 className="md:text-4xl font-semibold text-2xl">
          Influence is everything.
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto p-4 text-lg">
          We pair your brand with the creators proven to power performance in
          your category.
        </p>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 pt-12 gap-4 border-red-500 p-2 md:p-0 mb-[4rem]">
        {InfluencerImage.map((InfluencerImage, index) => (
          <div
            key={index}
            className=" flex flex-col items-center gap-4 md:p-4 p-8"
          >
            <div className=" overflow-hidden">
              <img
                src={InfluencerImage.image}
                className="rounded-full object-cover w-fit h-fit "
              />
              <div className="flex items-center flex-col text-center space-y-1">
                <h1 className="font-bold pt-2">{InfluencerImage.username}</h1>
                <h2 className="font-extralight">{InfluencerImage.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSocialMedia;
