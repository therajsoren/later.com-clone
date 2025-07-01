import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#6eb3fe] via-[#d4e7ff] to-[#c2defe]">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
