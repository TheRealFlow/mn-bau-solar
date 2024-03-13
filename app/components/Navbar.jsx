"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="fixed top-0 w-full bg-transparent p-4 backdrop-blur-md border-b-2 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/logo_long_icon.webp"
                alt="MN-Bau & Solar"
                width={200}
                height={50}
                objectFit="contain"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden lg:flex font-semibold text-lg">
            <ul className="flex space-x-8">
              <NavItem href="/about">Über uns</NavItem>
              <NavItem href="/angebote">Angebote</NavItem>
              <NavItem href="/finanzierung">Finanzierung</NavItem>
              <NavItem href="/projekte">Projekte</NavItem>
              <NavItem href="/service">Service</NavItem>
              <NavItem href="/kontakt">Kontakt</NavItem>
            </ul>
          </div>

          {/* "Angebot einholen" Button */}
          <div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold md:font-bold mx-4 py-2 px-2 rounded-md inline-block md:mt-0">
              Angebot einholen
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            {/* Hamburger Menu Icon */}
            <HiMenu
              onClick={toggleNavbar}
              className="hover:cursor-pointer text-2xl text-orange-500"
            />
          </div>

          {/* Links */}
          <div
            className={` text-lg ${
              isOpen ? "flex" : "hidden"
            } absolute top-full right-0 w-1/5 bg-white lg:bg-transparent `}
          >
            <ul className="lg:hidden flex flex-col m-5 gap-2">
              <NavItem href="/about" onClick={toggleNavbar}>
                Über uns
              </NavItem>
              <NavItem href="/angebote" onClick={toggleNavbar}>
                Angebote
              </NavItem>
              <NavItem href="/finanzierung" onClick={toggleNavbar}>
                Finanzierung
              </NavItem>
              <NavItem href="/projekte" onClick={toggleNavbar}>
                Projekte
              </NavItem>
              <NavItem href="/service" onClick={toggleNavbar}>
                Service
              </NavItem>
              <NavItem href="/kontakt" onClick={toggleNavbar}>
                Kontakt
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Component for individual nav items
const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link className="text-black hover:text-orange-600" href={href}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
