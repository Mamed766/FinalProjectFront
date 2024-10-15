import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Suitproducts = () => {
  const suitStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div style={suitStyle} className="py-20">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>
      <div className=" relative z-20">
        <div className="flex flex-col gap-1 text-white justify-center items-center">
          <h2>RECENT PRODUCTS</h2>
          <h1 className="text-[50px]">Enduringly Stylish Materials</h1>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[30rem] relative max-h-[48rem] group border border-transparent  duration-700">
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#BB9D7B] z-20 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#BB9D7B] z-20 transition-all duration-200 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#BB9D7B] z-20 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#BB9D7B] z-20 transition-all duration-200 group-hover:h-full"></span>
            <div className="relative max-h-[35rem] overflow-hidden">
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  alt=""
                  src={
                    "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-11-4.webp"
                  }
                  height={100}
                  width={1000}
                />
              </motion.div>

              <motion.div
                className="absolute top-0 left-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  alt=""
                  src={
                    "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-3-3.webp"
                  }
                  height={100}
                  width={1000}
                />
              </motion.div>
            </div>
            <div className="text-center relative  overflow-hidden w-full  pt-10 pb-20">
              <h3 className="text-white text-[20px]">Double Breasted Blazer</h3>
              <p className="text-gray-500">$580.00</p>
              <div className="w-full flex justify-center items-center">
                <button className="text-white bg-[#BB9D7B] border border-transparent hover:border-[#BB9D7B] absolute bottom-[-1rem] opacity-0  group-hover:bottom-[1rem] group-hover:opacity-100 hover:bg-transparent duration-700  py-2 px-5 mt-2">
                  Select Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suitproducts;
