import React from "react";
import Scissor from "@/app/_assets/Scissor";

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

      <div className="text-white flex flex-col z-20  pt-5 gap-2 items-center h-full">
        <div className="flex-shrink-0 z-20 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
          <Scissor />
        </div>
        <div className="ml-4 text-center z-20 ">
          <h2 className="text-[14px]">GLOBAL BRAND</h2>
          <h1 className="text-[50px]">Fashion & Design Company</h1>
        </div>
      </div>
    </div>
  );
};

export default Brand;
