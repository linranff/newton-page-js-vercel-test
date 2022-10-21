import React from "react";
import ReactDOM from "react-dom";
import LINK from "next/link";
import Image from "next/image";
import image42 from "/public/image42.png";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* landing */}
      <section id="landing-section-1">
        <div className="relative flex flex-col text-center">
          {/* landing bg-video */}

          <video
            className=" top-0 w-full opacity-90 object-cover"
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.sega.co.uk/humankind-game/public/content/media/bg/video/cosmonaut-loop.mp4?VersionId=blKvqbesH7C6EnEjD32tdzXdKvKfrSo9"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>

          {/* landing bg-video text*/}
          <div className="absolute z-10 w-full top-0 lg:top-[15%] xl:top-1/4   ">
            <h1 className="pt-16 md:pt-12 text-center mx-auto my-auto text-[3rem] md:text-[6rem] text-white/90 ">
              Civil and Slay
            </h1>
            <p className="pt-2 md:pt-8 lg:pt-10 text-white/90 text-[1.5rem] lg:text-[3rem] ">
              Discovery, Collect and Battle with web3 collectable cards
            </p>
            <button className="">
              <a
                href="/wallet"
                className="px-6 py-1 mx-12 text-[2rem] md:text-[3rem] text-black bg-pink-400 rounded-full baseline hover:bg-sky-400 "
              >
                Wallet
              </a>
              <span className="block">Learn More→</span>
            </button>
          </div>
        </div>
      </section>

      <section
        id="landing-section-2 "
        className="bg-gradient-to-r h-[60vh] from-violet-500 to-fuchsia-500"
      >
        <h1 className="text-center text-xl font-bold md:text-2xl lg:text-5xl mt-8 mb-0 pb-0">
          How far you will push the civilization Come and explore Civil and Slay
        </h1>
        <Carousel1 />
        {/* <div className="container2">
          <div className="card">
            <h3 className="title">France</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>

            <div className="flex my-auto mx-auto align-center  justify-center">
              <Image
                src="/Rectangle 23870 (2).png"
                alt="sale"
                layout="fixed"
                height={150}
                width={150}
              />
            </div>
          </div>
          <div className="card">
            <h3 className="title">Russia</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="flex my-auto mx-auto align-center  justify-center">
              <Image
                src="/Rectangle 23870.png"
                alt="sale"
                layout="fixed"
                height={150}
                width={150}
              />
            </div>
          </div>
          <div className="card">
            <h3 className="title">China</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="flex my-auto mx-auto align-center  justify-center">
              <Image
                src="/Rectangle 23870 (1).png"
                alt="sale"
                layout="fixed"
                height={150}
                width={150}
              />
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Japan</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="flex my-auto mx-auto align-center  justify-center">
              <Image
                src="/Rectangle 23870 (3).png"
                alt="sale"
                layout="fixed"
                height={150}
                width={150}
              />
            </div>
          </div>

          <div className="card">
            <h3 className="title">Card 3</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Card 3</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Card 4</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
        </div> */}
      </section>

      <section id="landing-section-3"></section>

      {/* Carousel Teams Slider */}
      <section id="landing-section-4">
        <div className=" h-[60vh] bg-gradient-to-b  from-[#022a2a] to-[#450202] ">
          <div className="mx-36 pt-24 items-center my-auto ">
            <Carousel2 />
          </div>
        </div>
      </section>

      <section id="landing-section-5">
        <div className="flex flex-col items-start md:items-center md:flex-row md:pb-10 bg-[url('../public/humankind-white-bkg.png')] ">
          <div className="flex flex-col mx-auto pl-8 w-[80%] md:w-1/2  md:ml-32 ">
            <h1 className="font-bold text-2xl mt-16 mb-4 ">
              PLAY Civil and Slay TODAY!
            </h1>

            <h2 className="font-bold text-xl mb-6 md:w-3/4">
              Buy Civil and Slay Deluxe Edition and enjoy the slaying in battle
              ground!
            </h2>
            <ul className="text-xl">
              <li className="pt-1">The digital Deluxe Edition includes:</li>
              <li className="pt-1">-Civil and Slay digital game</li>
              <li className="pt-1">-50 basic cards</li>
              <li className="pt-1">-10 civil cards</li>
              <li className="pt-1">-10 slay cards</li>
            </ul>
            <LINK href={"/launchpad"}>
              <a className="text-white cursor-pointer bg-sky-500 mx-auto md:mx-0 text-center inline-block w-64 text-4xl font-bold rounded-2xl my-5 py-8 ">
                BUY NOW
              </a>
            </LINK>
          </div>

          <div className="flex md:w-1/2 mx-auto justify-center items-center md:mr-32  ">
            <Image
              src={image42}
              alt="sale"
              layout="fixed"
              height={350}
              width={350}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
