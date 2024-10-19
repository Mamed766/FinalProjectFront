"use client";
import React from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Image from "next/image";
import { useRequest } from "../_http/axiosFetcher";
import { FaSearch } from "react-icons/fa";

type NewsData = {
  id: number;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  date: string;
  title: string;
};

const newsItems: NewsData[] = [
  {
    id: 1,
    image: {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-2-150x150.webp",
      alt: "Blog Image 1",
      height: 100,
      width: 100,
    },
    date: "OCT 19",
    title: "What & How To Pack For Your Workout?",
  },
  {
    id: 2,
    image: {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-1-150x150.webp",
      alt: "Blog Image 2",
      height: 100,
      width: 100,
    },
    date: "OCT 19",
    title: "Week End Fun Exercises To Burn Calories ",
  },
  {
    id: 3,
    image: {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-10-150x150.webp",
      alt: "Blog Image 2",
      height: 100,
      width: 100,
    },
    date: "OCT 19",
    title: "7 Different Types And Styles Of Blazers ",
  },
  {
    id: 4,
    image: {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-11-150x150.webp",
      alt: "Blog Image 2",
      height: 100,
      width: 100,
    },
    date: "OCT 19",
    title: "List Of On-trend Classic Tweed Women Blazers",
  },
];

const News = () => {
  const { data, isLoading, error } = useRequest("news", {
    method: "GET",
    module: "newsApi",
  });

  console.log(data);

  return (
    <div className="pt-16 bg-black">
      <Breadcrump bread1="Home" title="News" />
      <div className="max-w-[1500px] mx-auto ">
        <div className="py-20 flex   gap-10 px-5 bg-black">
          <div className="flex flex-wrap sm:gap-20 md:gap-14  gap-20">
            {data &&
              data?.news.map((item: any, index: number) => {
                return (
                  <div className="relative cursor-pointer min-w-[30rem] group max-w-[30rem] max-h-[25rem] min-h-[25rem]  bg-black">
                    <div className="relative group min-w-[30rem] max-w-[30rem] max-h-[22rem] min-h-[20rem] overflow-hidden">
                      <div className="max-w-[35rem]  overflow-hidden">
                        <Image
                          alt=""
                          src={`http://localhost:3001/${item?.image}`}
                          height={1000}
                          width={1000}
                          quality={100}
                          objectFit="cover"
                          className="object-cover max-h-[16rem] min-h-[16rem] absolute scale-110 transition-transform duration-500 ease-in-out  group-hover:translate-x-[5%]"
                        />
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-2   justify-center  w-[300px] min-h-[15rem] max-h-[15rem] group-hover:w-full group-hover:bg-[#23201E] group-hover:text-white bottom-[-3rem] right-0 py-10 px-10 bg-white transition-all duration-500 ease-in-out ">
                      <h2 className="group-hover:text-[#BB9D7B] duration-700 ">
                        {item?.createAt.slice(0, 10)}
                      </h2>
                      <h2 className="text-[25px] hover:text-[#BB9D7B] duration-700">
                        {item?.title}
                      </h2>
                      <div>
                        <button className="border hover:bg-black duration-700 border-black group-hover:text-[#BB9D7B] group-hover:border-[#BB9D7B] px-10 py-2">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="bg-[#23201E] max-w-[300px] py-10 px-10">
            <div className="flex items-center gap-2 border-b-[1px] border-[#B18D73]">
              <input
                type="search"
                placeholder="Enter keyword"
                className="border-none outline-none bg-transparent text-[#B18D73] placeholder:text-[#B18D73]"
              />
              <FaSearch className="text-[#B18D73]" />
            </div>
            <div>
              <h2 className="text-white text-[30px] pt-5">Recent Articles :</h2>
              {newsItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="max-w-[80px] min-w-[80px] max-h-[100px] min-h-[100px]">
                    <Image
                      alt={item.image.alt}
                      src={item.image.src}
                      height={item.image.height}
                      width={item.image.width}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#B18D73] ">{item.date}</h2>
                    <p className="max-w-[300px] text-[12px] text-white cursor-pointer hover:text-[#B18D73] duration-700">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2>Tags:</h2>
              <div className="flex flex-wrap gap-2">
                <button className="bg-gray-700 px-2 py-1 hover:bg-[#B18D73] duration-700 text-white">
                  BLAZER
                </button>
                <button className="bg-gray-700 px-2 py-1 hover:bg-[#B18D73] duration-700 text-white">
                  FITNESS WEAR
                </button>
                <button className="bg-gray-700 px-2 py-1 hover:bg-[#B18D73] duration-700 text-white">
                  JEWELRY
                </button>
                <button className="bg-gray-700 px-2 py-1 hover:bg-[#B18D73] duration-700 text-white">
                  WATCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
