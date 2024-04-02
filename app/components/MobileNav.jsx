import Link from "next/link";
import { set } from "react-hook-form";
import { HiX } from "react-icons/hi";

export default function MobileNav({ nav, closeNav }) {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-white bg-opacity-90`}
    >
      <div className="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center">
        <Link className="nav-link-mobile" href="/aktuelles" onClick={closeNav}>
          Aktuelles
        </Link>
        <Link className="nav-link-mobile" href="/about" onClick={closeNav}>
          Über uns
        </Link>
        <Link className="nav-link-mobile" href="/service" onClick={closeNav}>
          Service
        </Link>
        <Link className="nav-link-mobile" href="/projekte" onClick={closeNav}>
          Projekte
        </Link>
        <Link
          className="nav-link-mobile"
          href="/finanzierung"
          onClick={closeNav}
        >
          Finanzierung
        </Link>
        <Link className="nav-link-mobile" href="/kontakt" onClick={closeNav}>
          Kontakt
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-green-500"
      >
        <HiX className="w-full h-full" />
      </div>
    </div>
  );
}
