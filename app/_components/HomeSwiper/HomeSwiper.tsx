import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const HomeSwiper = () => {
  return (
    <div className="relative w-full">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="flex h-[60rem] relative">
            <div className="w-1/2 relative h-full">
              <Image
                alt="slider image 1"
                src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-1-a.webp"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="w-1/2 relative h-full">
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
