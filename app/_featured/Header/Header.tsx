import AddToCartLogo from "@/app/_assets/AddToCartLogo";
import OpenBarLogo from "@/app/_assets/OpenBarLogo";
import SearchLogo from "@/app/_assets/SearchLogo";
import Dropdown from "@/app/_components/Dropdown/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  homeItems,
  newsItems,
  pageItems,
  shopItems,
} from "@/app/_static/mockdb";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import "./header.scss";

const Header = ({ handleUserSideBar }: any) => {
  const pathname = usePathname();
  const router = useRouter();

  const linkClass = (path: string) =>
    pathname === path
      ? `relative text-[#BB9D7B] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#BB9D7B]`
      : `relative  hover:text-[#BB9D7B] duration-300  text-white after:content-[""] after:absolute   after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#BB9D7B] after:transition-all after:duration-300 hover:after:w-full`;

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="px-5 pb-5 pt-3 bg-black border-[1px] border-gray-600">
      <div className="bg-black flex items-center justify-between ">
        <div className="cursor-pointer">
          <Image
            alt=""
            src={
              "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg"
            }
            height={36}
            width={183}
          />
        </div>
        <div className="header__mobile">
          <ul className="flex text-[14px] gap-7  mt-[15px]">
            <li className={`${linkClass("/")} relative group`}>
              <div
                onClick={() => handleNavigation("/")}
                className="cursor-pointer"
              >
                HOME
                <Dropdown items={homeItems} />
              </div>
            </li>
            <li className={`${linkClass("/pages")} relative group`}>
              <div
                onClick={() => handleNavigation("/pages")}
                className="cursor-pointer"
              >
                PAGES
                <Dropdown items={pageItems} />
              </div>
            </li>
            <li className={linkClass("/gift-card")}>
              <div
                onClick={() => handleNavigation("/gift-card")}
                className="cursor-pointer"
              >
                GIFT CARD
              </div>
            </li>
            <li className={linkClass("/gallery")}>
              <div
                onClick={() => handleNavigation("/gallery")}
                className="cursor-pointer"
              >
                GALLERY
              </div>
            </li>
            <li className={`${linkClass("/shop")} relative group`}>
              <div
                onClick={() => handleNavigation("/shop")}
                className="cursor-pointer"
              >
                SHOP
                <Dropdown items={shopItems} />
              </div>
            </li>
            <li className={`${linkClass("/news")} relative group`}>
              <div
                onClick={() => handleNavigation("/news")}
                className="cursor-pointer"
              >
                NEWS
                <Dropdown items={newsItems} />
              </div>
            </li>
            <li className={linkClass("/contact")}>
              <div
                onClick={() => handleNavigation("/contact")}
                className="cursor-pointer"
              >
                CONTACT
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-7">
            <div className="mr-2 cursor-pointer header__mobile">
              <SearchLogo />
            </div>
            <div className="cursor-pointer relative header__mobile">
              <div className="w-5 h-5 rounded-full bg-[#BB9D7B] absolute right-[-10px] top-[-10px]  flex items-center  justify-center text-[10px] text-white">
                0
              </div>
              <AddToCartLogo />
            </div>
            <div
              onClick={handleUserSideBar}
              className="pt-[0.5px] cursor-pointer header__mobile"
            >
              <OpenBarLogo />
            </div>

            <div className="text-white header__xl text-[25px]">
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
