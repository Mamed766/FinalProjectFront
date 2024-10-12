import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="px-5 pb-5 pt-3 bg-black border-[1px] border-gray-600">
      <div className="bg-black flex items-center justify-between ">
        <div>
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
          <ul className="flex text-[14px] gap-7  mt-[15px]  text-white  ">
            <li>HOME</li>
            <li>PAGES</li>
            <li>GIFT CARD</li>
            <li>GALLERY</li>
            <li>SHOP</li>
            <li>NEWS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
