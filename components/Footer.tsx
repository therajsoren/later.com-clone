"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaApple,
  FaChevronDown,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu: any) => {
    setOpenMenu(openMenu == menu ? null : menu);
  };

  const menus = {
    Products: [
      "Services",
      "Influencer Marketing",
      "Social Media Management",
      "Social Listening",
      "Link in Bio",
      "Creators",
    ],
    Company: ["About", "Careers", "Newsroom", "Affiliate program"],
    "Get started": [
      "Book a demo",
      "Influencer marketing plans",
      "Social media management plans",
    ],
  };

  return (
    <div className="px-6 py-12 bg-gray-800 text-slate-200">
      {/* Logo (desktop) */}
      <div className="hidden md:block max-w-6xl mx-auto pb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded transform rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45" />
          </div>
          <span className="text-2xl font-bold">Later</span>
          <span className="text-2xl text-gray-400">|</span>
          <span className="text-2xl font-bold">Mavely</span>
        </div>
      </div>

      {/* Logo (mobile) + Awards */}
      <div className="md:hidden max-w-6xl mx-auto mb-8 text-center">
        {/* Centered Logo */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded transform rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45" />
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span>Later</span>
            <span className="text-gray-400">|</span>
            <span>Mavely</span>
          </div>
        </div>

        {/* Awards */}
        <div className="flex justify-center gap-4 flex-wrap">
          <img
            src="https://later.com/images/awards/leader-winter-2025.png"
            alt="Leader Award"
            className="h-20 w-20 object-contain"
          />
          <img
            src="https://later.com/images/awards/highest-user-adoption-winter-2025.png"
            alt="User Adoption Award"
            className="h-20 w-20 object-contain"
          />
          <img
            src="https://later.com/images/awards/most-implementable-winter-2025.png"
            alt="Implementable Award"
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* Newsletter text */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Join our newsletter</h3>
          <p className="text-sm text-slate-300">
            Stay updated with the latest news and tips
          </p>
        </div>
      </div>

      {/* Menus + Awards (desktop) */}
      <div className="max-w-6xl mx-auto pt-8">
        <div className="flex flex-col md:flex-row md:gap-6">
          {/* Menu Columns */}
          {Object.keys(menus).map((menuTitle) => {
            const title = menuTitle;
            return (
              <div key={title} className="w-full md:w-1/4 mb-6 md:mb-0">
                <div
                  className="flex justify-between items-center md:block cursor-pointer"
                  onClick={() => toggleMenu(title)}
                >
                  <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">
                    {title}
                  </h3>
                  <FaChevronDown
                    className={`md:hidden text-xl transition-transform duration-200 ${
                      openMenu === title ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <ul
                  className={`space-y-3 text-sm mt-4 ${
                    openMenu === title ? "block" : "hidden"
                  } md:block`}
                >
                  {menus[title].map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Awards section for md+ */}
          <div className="hidden md:block w-full md:w-1/4 border-2">
            <h3 className="text-lg font-semibold">Join our newsletter</h3>
            <p className="text-sm text-slate-300">
              Stay updated with the latest news and tips
            </p>
            <div className="flex gap-2 py-8 flex-wrap">
              <img
                src="https://later.com/images/awards/leader-winter-2025.png"
                alt="Leader Award"
                className="h-20 w-20 object-contain"
              />
              <img
                src="https://later.com/images/awards/highest-user-adoption-winter-2025.png"
                alt="User Adoption Award"
                className="h-20 w-20 object-contain"
              />
              <img
                src="https://later.com/images/awards/most-implementable-winter-2025.png"
                alt="Implementable Award"
                className="h-20 w-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* done */}
      {/* social media icons */}
      <div className="flex md:justify-between md:flex-row gap-4 flex-col items-center max-w-6xl mx-auto border-t border-gray-600 py-4">
        <div className="flex items-center gap-6 md:flex-row flex-col">
          <div className="text-base font-semibold">Follow us</div>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaTiktok className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaYoutube className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaThreads className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaPinterest className="w-5 h-5" />
            </Link>

            <Link href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaXTwitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <button className="bg-black border-gray-600 text-white rounded-full py-2 px-3 flex items-center gap-2">
            <span>
              <FaApple />
            </span>
            <span>App Store</span>
          </button>
          <button className="bg-black border-gray-600 text-white rounded-full py-2 px-3 flex items-center gap-2">
            <span>
              <FaGooglePlay />
            </span>
            <span>Google Play</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-2 max-w-6xl mx-auto">
        <div className="text-sm border-2">
          <p className="font-semibold">Partnerships</p>
          <a href="#" className="text-blue-400 hover:underline text-xs">
            Become a Partner
          </a>
        </div>
        {/* Logos */}
        <div className="flex items-center gap-2 border-2 lg:w-[34%] w-full justify-center ">
          <img
            src="https://later.com/images/platform-logos/pinterest-icon.png"
            alt="Pinterest Partner"
            width={30}
            height={30}
          />
          <img
            src="https://later.com/images/badges/tiktok-marketing-partners.png"
            alt="TikTok Marketing Partner"
            width={100}
            height={30}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            role="img"
            width="132"
            height="16"
            viewBox="0 0 99 12"
            className="w-26 h-6"
          >
            <path
              d="m32.4,10.1H8.1l1.9,1.9,22.4-1.9ZM10.3,2.2v.3c-.5-.3-.9-.5-1.4-.5-1.7,0-3,1.6-3,3.5s1.3,3.5,3,3.5,1-.2,1.4-.5v.3h1.5V2.2h-1.5Zm-1.4,5.2c-.8,0-1.5-.8-1.5-1.9s.6-1.9,1.5-1.9,1.4.8,1.4,1.9-.6,1.9-1.4,1.9Zm13.4-5.2v3.9c0,.7-.5,1.3-1.2,1.3s-1.2-.6-1.2-1.3v-3.9h-1.5v3.9c0,1.6,1.1,2.9,2.7,2.9s1.3-.4,1.3-.4v.2h1.5V2.2h-1.5Zm14,6.6v-3.9c0-.7.5-1.3,1.2-1.3s1.2.6,1.2,1.3v3.9h1.5v-3.9c0-1.6-1.1-2.9-2.7-2.9s-1.3.4-1.3.4v-.2h-1.5v6.6h1.5ZM1.6,8.8v-2.6h1.1l1.9,2.6h2l-2.3-3.1c.7-.5,1.2-1.4,1.2-2.3,0-1.6-1.3-2.9-2.9-2.9H0v8.3h1.6Zm0-6.7h1c.7,0,1.3.6,1.3,1.3s-.6,1.3-1.3,1.3h-1v-2.6h0Zm26.3,5.1c-.1,0-.3.2-.5.2s-.7-.2-.7-.8v-2.8h1.3v-1.6h-1.3V.5h-1.5v1.6h-.8v1.6h.8v2.9c0,1.5,1.1,2.4,2.2,2.4s1-.1,1.5-.4l-1-1.3Zm-12.3-2l2.6-3.1h-2.1l-1.8,2.3V0h-1.5v8.8h1.5v-2.7l2.2,2.7h2.1l-3-3.5Zm15.8-3.3c-1.7,0-3,1.5-3,3.5s1.6,3.5,3.1,3.5,1.8-.3,2.7-1.5l-1.3-.8c-1,1.5-2.7.7-2.9-.8h4.3c.4-2.4-1.2-3.9-2.9-3.9h0Zm1.3,2.6h-2.7c.3-1.6,2.4-1.6,2.7,0Zm9.9,4.2l2.9-7.9h1.2l2.9,7.9h-1.1l-.7-2h-3.5l-.7,2h-1,0Zm2-2.9h2.9l-1.4-4-1.4,4h0Zm7.7,3c-.5,0-1-.1-1.4-.4-.4-.3-.7-.7-1-1.2-.2-.5-.4-1.1-.4-1.7s.1-1.2.4-1.7c.2-.5.6-.9,1-1.2.4-.3.9-.4,1.4-.4s.9.1,1.3.4c.4.2.6.5.8.9V0h1v8.7h-.8v-1.2c-.3.4-.6.7-1,.9-.4.2-.8.4-1.3.4Zm.2-1c.4,0,.7,0,1-.3.3-.2.5-.5.7-.8.2-.3.3-.7.3-1.2s0-.9-.3-1.2c-.2-.3-.4-.6-.7-.8-.3-.2-.6-.3-1-.3s-.7,0-1,.3c-.3.2-.5.5-.7.8-.2.3-.3.7-.3,1.2s0,.9.3,1.2c.2.3.4.6.7.8.3.2.6.3,1,.3Zm6,.8l-2.4-6.3h1.1l1.9,5.2,1.9-5.2h1l-2.4,6.3h-1.1Zm6.4.1c-.6,0-1.1-.1-1.6-.4s-.8-.7-1-1.2c-.2-.5-.4-1.1-.4-1.7s.1-1.2.4-1.7c.2-.5.6-.9,1-1.2.4-.3.9-.4,1.5-.4s1,.1,1.5.4c.4.3.7.7,1,1.2.2.5.4,1.1.4,1.7v.2h-4.6c0,.7.2,1.2.6,1.6.4.4.8.5,1.4.5s1.4-.4,1.9-1.1l.6.7c-.3.4-.7.7-1.1,1-.5.2-.9.4-1.5.4h0Zm-.1-5.7c-.5,0-.9.2-1.2.5-.3.3-.5.8-.6,1.3h3.6c0-.6-.3-1-.6-1.3s-.7-.5-1.2-.5Zm3.6,5.5V2.5h.8v1.2c.3-.4.5-.7.8-1,.3-.2.6-.4,1-.4s.8.1,1.1.4l-.3,1c-.3-.2-.6-.4-.9-.4s-.6,0-.8.3c-.2.2-.4.5-.6.8-.1.3-.2.7-.2,1.1v3.2h-1Zm7.2.1c-1.2,0-1.8-.7-1.8-2.1v-3.4h-1.1v-.9h1.1V.9h1v1.6h2.2v.9h-2.2v3.3c0,.8.3,1.2.9,1.2s.4,0,.5-.1c.2,0,.4-.2.6-.3l.3,1c-.4.3-.9.4-1.5.4h0Zm2.8-7.4c-.2,0-.4,0-.5-.2-.1-.1-.2-.3-.2-.5s0-.4.2-.5c.1-.1.3-.2.5-.2s.4,0,.5.2c.1.1.2.3.2.5s0,.4-.2.5c-.1.1-.3.2-.5.2Zm-.5,7.2V2.5h1v6.3h-1Zm4.2.1c-.5,0-1-.1-1.4-.3-.4-.2-.8-.5-1.1-1l.6-.7c.5.7,1.1,1.1,1.9,1.1s.7,0,.9-.2c.2-.2.3-.4.3-.6,0-.5-.4-.8-1.1-1l-.7-.2c-.5-.1-.9-.4-1.2-.7-.3-.3-.4-.7-.4-1.1s0-.7.3-.9c.2-.3.4-.5.8-.6.3-.2.7-.2,1.1-.2s.9,0,1.2.3c.4.2.7.4.9.8l-.6.7c-.2-.3-.4-.5-.7-.7-.2-.1-.5-.2-.8-.2s-.6,0-.8.2c-.2.2-.3.4-.3.6s0,.4.2.6c.2.1.4.3.8.4l.7.2c.5.1.9.4,1.2.7.3.3.4.7.4,1.1s-.2,1-.6,1.3c-.4.3-1,.5-1.6.5h0Zm3.5-7.4c-.2,0-.4,0-.5-.2-.1-.1-.2-.3-.2-.5s0-.4.2-.5c.1-.1.3-.2.5-.2s.4,0,.5.2c.1.1.2.3.2.5s0,.4-.2.5c-.1.1-.3.2-.5.2Zm-.5,7.2V2.5h1v6.3h-1Zm2.1,0V2.5h.8v1.2c.3-.4.6-.7,1-.9.4-.2.8-.3,1.2-.3.7,0,1.2.2,1.6.7.4.5.6,1.2.6,2.1v3.6h-1v-3.6c0-.6-.1-1.1-.4-1.4-.3-.3-.6-.5-1.1-.5s-.7,0-.9.3c-.3.2-.5.4-.6.8-.2.3-.2.7-.2,1v3.3h-1Zm8.8,2.5c-.5,0-1,0-1.5-.3-.5-.2-.9-.4-1.2-.7l.4-.9c.3.3.7.5,1.1.7.4.2.8.2,1.2.2,1.3,0,2-.8,2-2.4v-.5c-.2.4-.5.7-.8.9-.4.2-.8.4-1.2.4s-1-.1-1.4-.4c-.4-.3-.7-.6-1-1.1-.2-.5-.4-1-.4-1.6s.1-1.2.4-1.6c.2-.5.6-.9,1-1.1.4-.3.9-.4,1.4-.4s.9.1,1.2.4c.4.2.7.5.9.9v-1.1h.9v5.4c0,1.1-.3,1.9-.8,2.5-.5.6-1.2.8-2.2.8h0Zm0-3.5c.4,0,.7,0,1-.3.3-.2.5-.5.7-.8.2-.3.2-.7.2-1.2s0-.8-.2-1.2c-.2-.3-.4-.6-.7-.8-.3-.2-.6-.3-1-.3s-.7,0-1,.3c-.3.2-.5.5-.7.8-.2.3-.2.7-.2,1.2s0,.8.2,1.2c.2.3.4.6.7.8.3.2.6.3,1,.3h0Z"
              fill="currentcolor"
            ></path>
          </svg>
        </div>

        <div className="flex flex-wrap items-center justify-center  gap-4 text-sm mt-4 md:mt-0 border-2">
          <span className="text-gray-400">
            © 2025 Later. All Rights Reserved.
          </span>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <button className="border border-gray-400 rounded-full px-4 py-1 hover:bg-gray-700">
            Cookie Settings
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
