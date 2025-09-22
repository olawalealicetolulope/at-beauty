"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/service" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <nav className="px-4 sm:px-6 py-3 shadow-md flex items-center justify-between sticky top-0 w-full bg-zinc-900 z-50">
      {/* ===== Logo & Brand ===== */}
      <div className="flex items-center gap-2 z-50">
        <Image
          src={"/logo1.jpg"}
          alt="logo"
          width={1000}
          height={1000}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
        {/* ✅ always visible now */}
        <p className="font-bold text-lg sm:text-xl text-orange-300">
          AT Beauty
        </p>
      </div>

      {/* ===== Desktop Links ===== */}
      <div className="flex items-center gap-6 max-lg:hidden ml-auto">
        {navItems.map((item, index) => {
          const isActive = pathname === item.url;
          return (
            <Link
              key={index}
              href={item.url}
              className={`text-base sm:text-lg transition-all ${
                isActive
                  ? "text-orange-400 font-semibold"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* ===== Right Section (Hamburger + User Icon) ===== */}
      <div className="flex items-center gap-3 sm:gap-4 ml-auto lg:ml-6">
        {/* Hamburger Button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <MdClose className="text-2xl text-white" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl text-white" />
          )}
        </button>

        {/* User Icon */}
        {session ? (
          <div>
            <button
              id="user-button"
              aria-controls={menuOpen ? "user-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : undefined}
              onClick={handleClick}
              className="flex items-center justify-center rounded-full p-1 hover:bg-zinc-800 transition-colors"
            >
              <img
                src={session?.user?.image}
                alt={session?.user?.name?.slice(0, 2).toUpperCase()}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-gray-300"
              />
            </button>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleClose}
              slotProps={{ list: { "aria-labelledby": "user-button" } }}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/profile">Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/booking-appointment">Book a Session</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <button onClick={() => signOut()}>Log Out</button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link
            href="/auth/signin"
            className="flex items-center justify-center rounded-full p-1 hover:bg-zinc-800 transition-colors"
          >
            <FaUserCircle className="text-white w-8 h-8 sm:w-9 sm:h-9" />
          </Link>
        )}
      </div>

      {/* ===== Mobile Nav Drawer ===== */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-dvh w-full bg-white z-40 flex flex-col items-center justify-center gap-12 sm:gap-16 transition-transform duration-300 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside drawer */}
        <button
          onClick={() => setNavOpen(false)}
          className="absolute top-5 right-5 text-gray-800 hover:text-orange-500"
        >
          <MdClose className="w-7 h-7" />
        </button>

        {navItems.map((item, index) => {
          const isActive = pathname === item.url;
          return (
            <Link
              onClick={() => setNavOpen(false)}
              key={index}
              href={item.url}
              className={`text-lg sm:text-xl transition-all ${
                isActive
                  ? "text-orange-500 font-semibold"
                  : "text-black hover:text-orange-400"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
