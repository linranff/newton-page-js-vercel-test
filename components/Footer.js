import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#485470] text-white  h-[50vh] z-10 flex flex-row justify-center px-[10vw]">
        <div className=" w-[30%] flex flex-col justify-start pt-[12vh] items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20%]  items fill-[#c94a4a] ml-5 block"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-[#d6f8e8] pt-10 px-5">
            The world&apos;s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>
        <div className="  w-1/5 flex flex-col justify-start pt-[50px] items-center ">
          <ul>
            <li className="text-[#4cf157] text-xl mb-5">Marketplace</li>
            {[
              { title: "All NFTs", route: "/" },
              { title: "Art", route: "/" },
              { title: "Domain Names", route: "/" },
              { title: "Music", route: "/" },
              { title: "Photography", route: "/" },
              { title: "Trading Cards", route: "/" },
              { title: "Utility", route: "/" },
              { title: "Virtual Worlds", route: "/" },
            ].map(({ route, title }) => (
              <li className="mb-1.5" key={title}>
                <Link href={route}>
                  <a className="">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="  w-1/5 flex flex-col justify-start pt-[50px]   items-center ">
          <ul>
            <li className="text-[#4cf157] text-xl mb-5">My Account</li>
            {[
              { title: "Profile", route: "/" },
              { title: "Favorites", route: "/" },
              { title: "Favorites", route: "/" },
              { title: "My Collections", route: "/" },
              { title: "Settings", route: "/" },
            ].map(({ route, title }) => (
              <li className="mb-1.5" key={title}>
                <Link href={route}>
                  <a className="">{title}</a>
                </Link>
              </li>
            ))}
            <li className="text-[#4cf157] text-xl mb-5 mt-5">Stats</li>
            {[
              { title: "Rankings", route: "/" },
              { title: "Activity", route: "/" },
            ].map(({ route, title }) => (
              <li className="mb-1.5" key={title}>
                <Link href={route}>
                  <a className="">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="  w-1/5 flex flex-col justify-start pt-[50px]  items-center ">
          <ul>
            <li className="text-[#4cf157] text-xl mb-5">Marketplace</li>
            {[
              { title: "All NFTs", route: "/" },
              { title: "Art", route: "/" },
              { title: "Domain Names", route: "/" },
              { title: "Music", route: "/" },
              { title: "Photography", route: "/" },
              { title: "Trading Cards", route: "/" },
              { title: "Utility", route: "/" },
              { title: "Virtual Worlds", route: "/" },
            ].map(({ route, title }) => (
              <li className="mb-1.5" key={title}>
                <Link href={route}>
                  <a className="">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="  w-1/5 flex flex-col justify-start pt-[50px] items-center ">
          <ul>
            <li className="text-[#4cf157] text-xl mb-5">Policy</li>
            {[
              { title: "Privacy Policy", route: "/" },
              { title: "Terms of Service", route: "/" },
            ].map(({ route, title }) => (
              <li className="mb-1.5" key={title}>
                <Link href={route}>
                  <a className="">{title}</a>
                </Link>
              </li>
            ))}
            <li className="text-[#4cf157] text-xl mb-5 mt-5">Company</li>
            {[
              { title: "About", route: "/" },
              { title: "Careers", route: "/" },
              { title: "Ventures", route: "/" },
              { title: "Grants", route: "/" },
            ].map(({ route, title }) => (
              <li className="mb-1.5" key={title}>
                <Link href={route}>
                  <a className="">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="bg-[#4dcaff] text-[#121063] text-center text-2xl h-[30px]">
        {" "}
        NTCG 2022 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
