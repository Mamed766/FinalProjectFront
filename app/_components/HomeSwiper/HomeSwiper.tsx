import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

const HomeSwiper = () => {
  return (
    <div className="relative w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex gap-5 bg-black flex-col md:gap-0 md:flex-row h-[60rem] relative">
            <div className="w-full md:w-1/2 group relative h-full">
              <Image
                alt="slider image 1"
                src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-1-a.webp"
                layout="fill"
                objectFit="cover"
                quality={100}
              />

              <div className="flex flex-col mb-5 max-h-[12rem] overflow-hidden   justify-center  items-center w-full absolute bottom-0">
                <h2 className="text-white ">CASUAL JACKET</h2>
                <h1 className="text-[4rem] text-white duration-500 group-hover:text-[#BB9D7B]  ">
                  <span className="hover:text-white duration-300">
                    For Women
                  </span>
                </h1>
                <p className="flex items-center text-[14px] text-white absolute duration-500 bottom-[-5rem] group-hover:bottom-[2px]">
                  DISCOVER <FaAngleRight />
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-full">
              <Image
                alt="slider image 2"
                src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-1-b.webp"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>

            <div className="absolute left-[-6rem] top-[25rem] text-white">
              <ul className="flex gap-8 rotate-[270deg]">
                <li className="hover:text-[#BB9D7B] duration-300">Facebook</li>
                <li className="hover:text-[#BB9D7B] duration-300">Instagram</li>
                <li className="hover:text-[#BB9D7B] duration-300">Twitter</li>
                <li className="hover:text-[#BB9D7B] duration-300">Linkedin</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
