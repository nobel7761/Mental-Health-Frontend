"use client";

import React from "react";
import { Carousel } from "antd";
// import "antd/dist/antd.css";
import Image from "next/image";

const images = [
  "https://img.freepik.com/free-photo/flat-lay-music-concept-with-copy-space_23-2148605792.jpg?w=1380&t=st=1697753715~exp=1697754315~hmac=af8234a05049cc4eef9fe0adf8566494796a1587c741a7496ccedebb218f60c6",
  "https://img.freepik.com/free-photo/close-up-glowing-neon-tube_23-2147881293.jpg?w=1380&t=st=1697753751~exp=1697754351~hmac=ab283604cef558ca64c75af868b21aacfd910f92e3b47b30bcdbbe64b66ab494",
  "https://img.freepik.com/free-photo/bicolored-paper-sheets-with-copy-space_23-2148320412.jpg?w=1380&t=st=1697753793~exp=1697754393~hmac=e738478aa46f0b378366d5494cc0f18054803a34ad3c8dbfa19c87a2b8e63dc4",
  // Add more image URLs here
];

const CarouselSection = () => {
  return (
    <Carousel autoplay>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Image ${index + 1}`} width={800} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSection;
