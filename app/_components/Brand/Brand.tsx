import React from "react";
import Scissor from "@/app/_assets/Scissor";
import ScissorRotate from "@/app/_assets/ScissorRotate";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Brand = () => {
  const brandStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "100vh",
    position: "relative",
  };

  return (
    <div style={brandStyle}>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>
      <div className="h-full z-20">
        <div className="flex flex-col z-20 items-center text-white  pt-5 gap-5">
          <div className="flex-shrink-0 z-20 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
            <Scissor />
          </div>
          <div className="ml-4 text-center z-20 ">
            <h2 className="text-[14px]">GLOBAL BRAND</h2>
            <h1 className="text-[50px]">Fashion & Design Company</h1>
          </div>
        </div>

        <div className="relative text-white w-full flex justify-center mt-10 z-20">
          <div className="relative flex flex-col gap-5 max-w-[25rem] min-h-[25rem] justify-center px-5 bg-opacity-90 transition-all duration-500 group overflow-hidden">
            <div className="absolute top-0 left-0 h-0 group-hover:h-full border-l-[2px] border-[#BB9D7B] z-30 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 h-0 group-hover:h-full border-r-[2px] border-[#BB9D7B] z-30 transition-all duration-500"></div>

            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-3.webp')",
              }}
            >
              <div className="absolute inset-0 bg-[#34312E] opacity-60"></div>
            </div>

            {/* Kartın içeriği */}
            <div className="z-20 relative">
              <ScissorRotate />
            </div>
            <h2 className="z-20 relative text-[32px]">
              Cutting-Edge Technology
            </h2>
            <p className="z-20 relative text-[16px]">
              Nec ullamcorper sit amet risus nullam eget felis eget nunc.
              Ultrices neque ornare aenean euismod elementum nisi eleifend.
              click here
            </p>
            <div className="flex justify-end items-end z-20 relative">
              <MdOutlineArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
