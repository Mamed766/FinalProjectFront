"use client";
import React from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Image from "next/image";
import { useRequest } from "../_http/axiosFetcher";
import { FaSearch } from "react-icons/fa";
import ArticlesBar from "../_components/ArticlesBar/ArticlesBar";
import "./news.scss";

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
        <div className="py-20 flex flexwrapbar flexjustifybar gap-10 px-5 bg-black">
          <div className="flex newscenter flex-wrap sm:gap-20 md:gap-14  gap-20">
            {data &&
              data?.news.map((item: any, index: number) => {
                return (
                  <div className="relative  cursor-pointer min-w-[30rem] group max-w-[30rem] max-h-[25rem] min-h-[25rem]  bg-black">
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

          <div className="marginbar">
            <ArticlesBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
