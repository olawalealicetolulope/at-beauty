import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/service" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/contact" }
  ];

  return (
    <main className="border-t border-gray-300 px-8 py-5 bg-zinc-900">
      <div className="flex items-center justify-between max-md:flex-col max-lg:px-5">
        <div className="flex lg:items-center gap-2 max-md:flex-col">
          <Image
            src={"/logo1.jpg"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-15 h-15 rounded-full "
          />
          <p className="font-bold text-lg text-orange-300 max-md:text-center ">
            AT Beauty
          </p>
        </div>
        <div className="py-10 grid grid-cols-3 max-md:flex max-md:flex-col lg:gap-20 md:gap-10 lg:mr-50">
          <div className="flex flex-col items-center lg:gap-3 max-lg:gap-2 text-sm">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-lg hover:text-orange-400 transition-all text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className=" flex flex-col  items-center lg:gap-5 max-lg:gap-2 text-sm max-md:text-xs text-gray-400">
            <p>081-3234-9262</p>
            <p>Adenike Area,Ogbomoso</p>
            <p>olawaletolulope81@gmail.com</p>
            <p>AT Beauty.com</p>
          </div>

          <div className="flex  items-center   ">
            <button className="border  border-white hover:border-orange-400 hover:rounded-md px-5 py-2 text-white text-base lg:text-lg max-md:w-full hover:bg-orange-400 hover:text-black transition-all">
              Contact Us
            </button>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-center gap-5 text-2xl text-gray-400">
        <Link href={"#"} className="hover:text-white">
          <FaInstagram />
        </Link>
        <Link href={"#"} className="hover:text-white">
          <RiTwitterXFill />
        </Link>
        <Link href={"#"} className="hover:text-white">
          <FaGithub />
        </Link>
      </div>
    </main>
  );
};

export default Footer;

