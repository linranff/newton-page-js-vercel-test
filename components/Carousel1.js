import React from "react";
import Image from "next/image";
import Char_Card from "./Char_Card";
const Carousel1 = () => {
  return (
    <>
      {/* <div className="carousel carousel-center rounded-box">
        <div
          id="item1"
          className="carousel-item w-full flex my-auto mx-auto align-center justify-center "
        >
          <Image
            className="mx-12 "
            src="/Rectangle 23870 (2).png"
            alt="sale"
            layout="fixed"
            height={150}
            width={150}
          />
          <Image
            src="/Rectangle 23870.png"
            alt="sale"
            layout="fixed"
            height={150}
            width={150}
          />
          <Image
            src="/Rectangle 23870.png"
            alt="sale"
            layout="fixed"
            height={150}
            width={150}
          />
        </div>
        <div
          id="item2"
          className="carousel-item w-full flex my-auto mx-auto align-center justify-center"
        >
          <Image
            src="/Rectangle 23870.png"
            alt="sale"
            layout="fixed"
            height={150}
            width={150}
          />
        </div>
        <div
          id="item3"
          className="carousel-item w-full flex my-auto mx-auto align-center justify-center"
        >
          <Image
            src="/Rectangle 23870 (1).png"
            alt="sale"
            layout="fixed"
            height={150}
            width={150}
          />
        </div>
        <div
          id="item4"
          className="carousel-item w-full flex my-auto mx-auto align-center justify-center"
        >
          <Image
            src="/Rectangle 23870 (3).png"
            alt="sale"
            layout="fixed"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div> */}
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <Char_Card src="/../public/Rectangle 23870 (1).png " />
        </div>
        <div className="carousel-item">
          <Char_Card src="/../public/Rectangle 23870 (1).png " />
        </div>
        <div className="carousel-item">
          <Char_Card src="/../public/Rectangle 23870 (1).png " />
        </div>
        <div className="carousel-item">
          <Char_Card src="/../public/Rectangle 23870 (1).png " />
        </div>
        <div className="carousel-item">
          <Char_Card src="/../public/Rectangle 23870 (1).png " />
        </div>
        <div className="carousel-item">
          <Char_Card src="/../public/Rectangle 23870 (1).png " />
        </div>
        <div className="carousel-item">
          <Char_Card src="/../public/Rectangle 23870 (1).png " />
        </div>
      </div>
    </>
  );
};

export default Carousel1;
