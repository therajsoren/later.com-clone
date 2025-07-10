import { ChevronRight } from "lucide-react";
import * as motion from "motion/react-client";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className="bg-[#239cfe] p-12">
      <motion.div
        className="max-w-7xl mx-auto p-12 flex flex-col items-center text-gray-900 font-semibold text-center space-y-4"
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <h1 className="lg:text-6xl text-4xl">
          Stay ahead of the curve. <br />
          And the crowd
        </h1>
        {/* <h2 className="lg:text-6xl text-4xl">And the crowd.</h2> */}
        <Button className="rounded-4xl text-md">
          Get started
          <ChevronRight/>
        </Button>
      </motion.div>
    </div>
  );
};

export default CTA;
