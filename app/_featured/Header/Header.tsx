import AddToCartLogo from "@/app/_assets/AddToCartLogo";
import OpenBarLogo from "@/app/_assets/OpenBarLogo";
import SearchLogo from "@/app/_assets/SearchLogo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  const linkClass = (path: string) =>
    pathname === path
      ? `relative text-[#BB9D7B] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#BB9D7B]`
      : `relative  hover:text-[#BB9D7B] duration-300  text-white after:content-[""] after:absolute   after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#BB9D7B] after:transition-all after:duration-300 hover:after:w-full`;

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
        <div>
          <ul className="flex text-[14px] gap-7  mt-[15px]   ">
            <Link href="/" className={linkClass("/")}>
              HOME
            </Link>
            <Link href="/pages" className={linkClass("/pages")}>
              PAGES
            </Link>
            <Link href="/gift-card" className={linkClass("/gift-card")}>
              GIFT CARD
            </Link>
            <Link href="/gallery" className={linkClass("/gallery")}>
              GALLERY
            </Link>
            <Link href="/shop" className={linkClass("/shop")}>
              SHOP
            </Link>
            <Link href="/news" className={linkClass("/news")}>
              NEWS
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              CONTACT
            </Link>
          </ul>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-7">
            <div className="mr-2 cursor-pointer">
              <SearchLogo />
            </div>
            <div className="cursor-pointer relative">
              <div className="w-5 h-5 rounded-full bg-[#BB9D7B] absolute right-[-10px] top-[-10px]  flex items-center  justify-center text-[10px] text-white">
                0
              </div>
              <AddToCartLogo />
            </div>
            <div className="pt-[0.5px] cursor-pointer">
              <OpenBarLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
