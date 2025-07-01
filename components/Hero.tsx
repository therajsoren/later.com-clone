const Hero = () => {
  return (
    <div className="p-16">
      <div className="max-w-5xl mx-auto text-slate-950 p-4">
        <div className="pb-12">
          <span className="lg:text-6xl -tracking-wide md:text-3xl text-xl">Campaigns, creators, conversions.</span>
          <br />
          <span className="lg:text-6xl md:text-3xl text-xl font-bold -tracking-wide">Influencer marketing, reimagined.</span>
        </div>
        <p className="p-20 text-xs text-center">
          By signing up, I agree to Later’s{" "}
          <span className="underline"> Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
