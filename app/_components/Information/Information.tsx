import Image from "next/image";
import React from "react";

const Information = () => {
  const informationStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div style={informationStyle}>
      <div>
        <div>
          <Image
            alt=""
            src={
              "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-section-three-left-image-1.jpg"
            }
            height={100}
            width={100}
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Information;
