"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/service" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/contact" }
  ];

  return (
    <nav className="px-8 py-3 shadow-md flex items-center justify-between sticky top-0 w-full bg-zinc-900 z-50">
      {/* Logo */}
      <div className="flex items-center gap-1 z-50">
        <Image
          src={"/logo1.jpg"}
          alt="logo"
          width={1000}
          height={1000}
          className="w-15 h-15 rounded-full"
        />
        <p className="font-bold text-lg text-orange-300 max-md:hidden">AT Beauty</p>
      </div>

      {/* Desktop Links */}
      <div className="flex items-center gap-7 max-lg:hidden ml-auto">
        {navItems.map((item, index) => {
          const isActive = pathname === item.url;
          return (
            <Link
              key={index}
              href={item.url}
              className={`text-lg transition-all ${
                isActive ? "text-orange-400 font-semibold" : "text-white hover:text-orange-400"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Auth Dropdown */}
      {session ? (
        <div>
          <button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <img
              src={session?.user?.image}
              alt={session?.user?.name?.slice(0, 2).toUpperCase()}
              className="w-10 h-10 ml-7 rounded-full"
            />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{ list: { 'aria-labelledby': 'basic-button' } }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/booking-appointment">Book a Session</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <button onClick={() => signOut()}>LogOut</button>
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <Link
          href={"/auth/signin"}
          className="text-lg hover:text-orange-400 transition-all pl-7 text-white"
        >
          Login
        </Link>
      )}

      {/* Mobile Nav Drawer */}
      <div
        className={`lg:hidden transition-transform duration-300 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center items-center gap-16 bg-white h-dvh w-full fixed top-0 left-0 z-40`}
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.url;
          return (
            <Link
              onClick={() => setNavOpen(false)}
              key={index}
              href={item.url}
              className={`text-lg transition-all ${
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

      {/* Hamburger Button */}
      <button
        className="lg:hidden z-50"
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? (
          <MdClose className="text-2xl text-black" />
        ) : (
          <HiOutlineMenuAlt3 className="text-2xl text-white" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
