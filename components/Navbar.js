import React from "react";
import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

import { IconContext } from "react-icons";
import { FaTelegram, FaTwitter, FaDiscord, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="m-0 bg-slate-600 bg-opacity-90 w-full">
      <div className="flex flex-wrap-reverse items-center justify-between lg:container px-3 py-1 mx-auto md:flex-no-wrap md:px-3">
        {/* social media logo */}
        <div className="flex items-center">
          <IconContext.Provider
            value={{
              className:
                "mr-5 flex  px-1 rounded-md border-solid border-2 border-navDark",
              size: "3em",
              color: "#3cbdb9",
            }}
          >
            <div className="flex ">
              <FaTelegram className=" " />
              <FaTwitter />
              <FaDiscord />
              <FaFacebook />
            </div>
          </IconContext.Provider>

          {/* <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white bg-white-900">
              Game Ranger
            </a>
          </Link> */}
        </div>

        {/* menu button */}

        {/* menu */}
        <ul
          className={cn(
            "text-sm flex flex-col text-center w-full md:flex md:flex-row md:items-center md:justify-center md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Home", route: "/" },
            { title: "Collections", route: "/collections" },
            { title: "Launchpad", route: "/launchpad" },
            { title: "Activity", route: "/activity" },
            { title: "Community", route: "/community" },
            { title: "White Paper", route: "/whitePaper" },
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a className="text-base py-4 px-2 text-white hover:text-[#33a7d032] hover:bg-[#9c4f4f] md:hover:bg-bermuda md:hover:text-black">
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div id="theme">
          <label className="swap swap-rotate">
            <input type="checkbox" />

            <svg
              className="swap-on fill-current w-8 h-8 text-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-8 h-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        <div className="flex ">
          <a
            href="/login"
            className=" px-6 p-2 mx-2 text-black bg-orange-400 rounded-full baseline hover:bg-sky-400 md:block"
          >
            Login
          </a>
          <a
            href="/wallet"
            className=" px-6 p-2 text-black bg-orange-400 rounded-full baseline hover:bg-sky-400 md:block"
          >
            Wallet
          </a>
        </div>
        <button
          className="flex align-end ml-auto px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
