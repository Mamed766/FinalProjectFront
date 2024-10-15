import React from "react";
import { FaPlay } from "react-icons/fa";

const HomePhoto = () => {
  const homephotoStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/video-bg-scaled.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div
      style={homephotoStyle}
      className="h-[70vh] flex items-center justify-center group  w-full"
    >
      <div className="flex justify-center scale-50 p-10 border opacity-0 group-hover:opacity-100 group-hover:scale-100 cursor-pointer duration-700 rounded-full">
        <FaPlay className="text-white text-[30px]" />
      </div>
    </div>
  );
};

export default HomePhoto;
