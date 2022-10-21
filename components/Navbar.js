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
                "mr-5 flex bg-[#bbb] px-1 rounded-md border-solid border-2 border-navDark",
              size: "3em",
              color: "orange",
            }}
          >
            <div className="flex">
              <FaTelegram />
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
