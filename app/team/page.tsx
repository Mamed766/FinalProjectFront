import React from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Image from "next/image";
import ShopLogo from "../_assets/ShopLogo";
import { FaPlay } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import TeamCategory from "../_components/TeamCategory/TeamCategory";
import TeamInfo from "../_components/TeamInfo/TeamInfo";

const Team = () => {
  return (
    <div>
      <div className="pt-16">
        <Breadcrump bread1="Home" title="Team Members" />
      </div>
      <div>
        <TeamCategory />
      </div>
      <div>
        <TeamInfo />
      </div>
    </div>
  );
};

export default Team;
