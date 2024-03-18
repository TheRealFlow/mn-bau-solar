"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="fixed top-0 w-full bg-transparent p-4 backdrop-blur z-50">
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
          <div className="hidden xl:flex font-semibold text-lg">
            <ul className="flex lg:space-x-8 md:space-x-4">
              <NavItem href="/aktuelles">Aktuelles</NavItem>
              <NavItem href="/about">Über uns</NavItem>
              <NavItem href="/service">Service</NavItem>
              <NavItem href="/projekte">Projekte</NavItem>
              <NavItem href="/finanzierung">Finanzierung</NavItem>
              <NavItem href="/kontakt">Kontakt</NavItem>
            </ul>
          </div>

          {/* "Angebot einholen" Button */}
          <div>
            <button
              href="/formular"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold md:font-bold mx-4 py-2 px-1.5 md:px-5 rounded-md inline-block md:mt-0"
              onClick={() => navigate.push("/formular")}
            >
              Angebot einholen
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            {/* Hamburger Menu Icon */}
            <HiMenu
              onClick={toggleNavbar}
              className="hover:cursor-pointer text-4xl text-orange-500"
            />
          </div>
          {/* Links */}
          <div
            ref={menuRef}
            className={` text-lg ${
              isOpen ? "flex" : "hidden"
            } absolute top-full right-0 w-1/2 md:w-1/4  bg-white xl:bg-transparent `}
          >
            <ul className="xl:hidden flex flex-col m-5 gap-2">
              <NavItem href="/aktuelles" onClick={closeNavbar}>
                Aktuelles
              </NavItem>
              <NavItem href="/about" onClick={closeNavbar}>
                Über uns
              </NavItem>
              <NavItem href="/service" onClick={closeNavbar}>
                Service
              </NavItem>
              <NavItem href="/projekte" onClick={closeNavbar}>
                Projekte
              </NavItem>
              <NavItem href="/finanzierung" onClick={closeNavbar}>
                Finanzierung
              </NavItem>
              <NavItem href="/kontakt" onClick={closeNavbar}>
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
const NavItem = ({ href, children, onClick }) => {
  return (
    <li>
      <Link
        className="text-black hover:text-orange-600"
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
