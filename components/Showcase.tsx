import MarketingImg from "@/public/assests/marketing-creator-era.webp";
import Image from "next/image";
const Showcase = () => {
  return (
    <div className="pt-8 mt-10 space-y-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center flex-col p-4 space-y-4">
          <h1 className="text-3xl font-bold pb-2">
            This is marketing in the creator era.
          </h1>
          <p className="max-w-3xl p-2 text-center text-slate-500/100 text-lg">
            Creators have changed everything. Marketing budgets are shifting
            from traditional channels to influencers—amplifying the voices
            consumers trust.
          </p>
          <div
            className="
            max-w-5xl mx-auto"
          >
            <Image
              src={MarketingImg}
              alt="marketing  image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
