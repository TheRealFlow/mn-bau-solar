"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ nav, openNav }) => {
  const navigate = useRouter();

  return (
    <div className="fixed top-0 w-full bg-transparent p-4 backdrop-blur z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo_long_icon.webp"
              alt="MN-Bau & Solar"
              width={180}
              height={50}
            />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden xl:flex font-semibold text-lg lg:space-x-10">
          <Link className="nav-link" href="/aktuelles">
            Aktuelles
          </Link>
          <Link className="nav-link" href="/about">
            Über uns
          </Link>
          <Link className="nav-link" href="/service">
            Service
          </Link>
          <Link className="nav-link" href="/projekte">
            Projekte
          </Link>
          <Link className="nav-link" href="/finanzierung">
            Finanzierung
          </Link>
          <Link className="nav-link" href="/kontakt">
            Kontakt
          </Link>
        </div>

        {/* "Angebot einholen" Button */}
        <div>
          <button
            href="/angebot"
            className="bg-green-600 hover:bg-green-700 text-white text-xs md:text-base font-semibold md:font-bold mx-2 py-2 px-3 md:px-5 rounded-md inline-block md:mt-0"
            onClick={() => navigate.push("/angebot")}
          >
            Angebot einholen
          </button>
        </div>

        <div onClick={openNav}>
          <HiMenu className="w-[2rem] xl:hidden h-[2rem] cursor-pointer text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
