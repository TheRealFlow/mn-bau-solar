"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

export default function Header() {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <Navbar nav={nav} openNav={openNav} />
      <MobileNav nav={nav} closeNav={closeNav} />
    </div>
  );
}
