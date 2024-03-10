import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 w-full bg-transparent p-4 backdrop-blur-md border-b-2">
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
          <div className="hidden lg:flex font-bold">
            <ul className="flex space-x-10 ">
              <NavItem href="/about">About</NavItem>
              <NavItem href="/angebote">Angebote</NavItem>
              <NavItem href="/finanzierung">Finanzierung</NavItem>
              <NavItem href="/projekte">Projekte</NavItem>
              <NavItem href="/service">Service</NavItem>
              <NavItem href="/kontakt">Kontakt</NavItem>
            </ul>
          </div>

          {/* "Angebot einholen" Button */}
          <div>
            <Link
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
              href="/angebot"
            >
              Angebot einholen
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            {/* Hamburger Menu Icon */}
            {/* Replace with your preferred icon */}
            <svg
              className="h-6 w-6  cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
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
