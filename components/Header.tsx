import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="h-fit my-auto sticky top-0 z-10">
      <div className="max-w-7xl mx-auto p-1">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-12">
            <h1 className="text-3xl font-bold cursor-pointer">{navlinks.logo.label}</h1>
            {navlinks.links?.map((item, index) => (
              <ul key={index} className="lg:block hidden p-1">
                <li className="flex items-center gap-1 cursor-pointer">
                  {item.label}{" "}
                  <span>
                    {" "}
                    <IoIosArrowDown />{" "}
                  </span>
                </li>
              </ul>
            ))}
          </div>

          <div className="pr-6 lg:block hidden">
            <div className="flex items-center p-1 border-0 rounded-4xl bg-slate-950 cursor-pointer">
              <span className="p-1 px-2">{navlinks.button.label}</span>
              <span className="p-1 pr-2">{navlinks.button.icon}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

interface Logo {
  icon?: ReactNode;
  label: string;
}

interface Links {
  icon?: ReactNode;
  label: string;
}

interface NavLinks {
  logo: Logo;
  links?: Links[];
  button: {
    label: string;
    icon: ReactNode;
  };
}

const navlinks: NavLinks = {
  logo: {
    label: "Later",
  },
  links: [
    {
      label: "Products",
    },
    {
      label: "Services",
    },
    {
      label: "Customers",
    },
    {
      label: "Resources",
    },
    {
      label: "Pricing",
    },
  ],
  button: {
    label: "Get later",
    icon: <FaArrowRight />,
  },
};
