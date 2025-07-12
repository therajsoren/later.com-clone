import FirstImage from "@/public/assests/andre-sebastian-SX5CfzVt4so-unsplash.jpg";
import SecondImage from "@/public/assests/luis-aleman-z5QeZu0Judw-unsplash.jpg";
import ThirdImage from "@/public/assests/andre-sebastian-kXUlDvWYGjo-unsplash.jpg";
import FourthImage from "@/public/assests/good-faces-_6Bk0nZf4lU-unsplash.jpg";
import FifthImage from "@/public/assests/mike-von-V4cl7_0N2mc-unsplash.jpg";

const ImageGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-[2rem]">
      <div className="flex overflow-hidden items-center justify-center">
        <div className="hidden md:flex items-center justify-center z-10 md:w-[200px] lg:w-[280px] md:h-[280px] lg:h-[380px]">
          <img
            src={FirstImage.src}
            alt="leftmost"
            className="w-full h-full object-cover rounded-l-4xl"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-center z-20 w-[240px] lg:w-[300px] h-[380px] lg:h-[480px]">
          <img
            src={SecondImage.src}
            alt="left"
            className="w-full h-full object-cover rounded-l-4xl"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-center z-30 w-[300px] lg:w-[440px] h-[460px] lg:h-[560px]">
          <img
            src={ThirdImage.src}
            alt="center"
            className="w-full h-full object-cover shadow-xl rounded-4xl"
            loading="eager"
          />
        </div>
        <div className="flex items-center justify-center z-20 w-[240px] lg:w-[300px] h-[380px] lg:h-[480px]">
          <img
            src={FourthImage.src}
            alt="right"
            className="w-full h-full object-cover rounded-r-4xl"
            loading="lazy"
          />
        </div>
        <div className="hidden md:flex items-center justify-end z-10 md:w-[200px] lg:w-[280px] md:h-[280px] lg:h-[380px]">
          <img
            src={FifthImage.src}
            alt="rightmost"
            className="w-full h-full object-cover rounded-r-4xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
