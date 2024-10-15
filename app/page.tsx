"use client";
import React from "react";
import HomeSwiper from "./_components/HomeSwiper/HomeSwiper";
import Brand from "./_components/Brand/Brand";
import Information from "./_components/Information/Information";
import Suitproducts from "./_components/Suitproducts/Suitproducts";

const Home = () => {
  return (
    <div>
      <HomeSwiper />
      <Brand />
      <Information />
      <Suitproducts />
    </div>
  );
};

export default Home;
