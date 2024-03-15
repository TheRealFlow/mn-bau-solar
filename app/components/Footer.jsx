import React from "react";
import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 text-sm md:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between space-y-4">
        {/* Linksbündig */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p className="font-bold text-lg">MN-Bau & Solar GbR</p>
          <Link
            href="https://www.google.com/maps?q=Hinner%20de%20H%C3%A4%C3%A4ch%201,%2018059%20Rostock%20OT%20Papendorf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600"
          >
            Hinner de Hääch 1, 18059 Rostock OT Papendorf
          </Link>
          <Link
            href="mailto:info@mnbausolar.de"
            className="flex items-center justify-center md:justify-start hover:text-orange-600"
          >
            <HiOutlineMail />
            <span className="ml-2">info@mnbausolar.de</span>
          </Link>
          <Link
            href="tel:+4938140343777"
            className="flex items-center justify-center md:justify-start hover:text-orange-600"
          >
            <HiOutlinePhone />
            <span className="ml-1">+49 (0) 381 40343777</span>
          </Link>
        </div>
        {/* Mittig */}
        <div className="w-full md:w-1/3 text-center">
          <div className="flex justify-center space-x-5">
            <Link
              href="https://www.facebook.com/people/MN-Bau-Solar-GbR/100082861136495/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-600 text-3xl"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/mnbausolar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-600 text-3xl"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jens-meiwald-768a79249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-600 text-3xl"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://web.whatsapp.com/send?phone=4915146395042"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-600 text-3xl"
            >
              <FaWhatsapp />
            </Link>
          </div>
          <p className="mt-4">
            © {new Date().getFullYear()} MN-Bau & Solar GbR. Alle Rechte
            vorbehalten.
          </p>
        </div>
        {/* Rechtsbündig */}
        <div className="w-full md:w-1/3 space-y-4">
          <div className="flex justify-center md:justify-end space-x-5">
            <a
              href="https://www.google.de/search?sca_esv=3c569254cd59810a&sxsrf=ACQVn0-wUXyrPaVGNCXvYuxQJc2_qUsIhA:1710205613004&uds=AMwkrPtyB8MsmozA4Lwzqy2G2HCu6ob01DzknnhsvKfzUl3NCFACw5rCcw0OijEm9dTM_Q-3kxHsn4sYtDImh1ORihlj1IdlMhfMFrGeKzpgPLYoF_6ZAXsvCwRsJs_uqSPTPwGrMnpu&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9SfPWRARqf7nZwpVBitvihJ7cJGoPC_OpegrlmuYmhWaD30smhQ%3D&q=MNBau+%26+Solar+GbR+Rezensionen&sa=X&ved=2ahUKEwi49LiwxO2EAxWlnf0HHd_TD90Q3PALegQIXBAF&cshid=1710205744166576&biw=1920&bih=968"
              className="text-lg font-semibold text-orange-600"
            >
              Bewerten Sie uns bei Google
            </a>
            <Link
              href="https://www.google.de/search?sca_esv=3c569254cd59810a&sxsrf=ACQVn0-wUXyrPaVGNCXvYuxQJc2_qUsIhA:1710205613004&uds=AMwkrPtyB8MsmozA4Lwzqy2G2HCu6ob01DzknnhsvKfzUl3NCFACw5rCcw0OijEm9dTM_Q-3kxHsn4sYtDImh1ORihlj1IdlMhfMFrGeKzpgPLYoF_6ZAXsvCwRsJs_uqSPTPwGrMnpu&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9SfPWRARqf7nZwpVBitvihJ7cJGoPC_OpegrlmuYmhWaD30smhQ%3D&q=MNBau+%26+Solar+GbR+Rezensionen&sa=X&ved=2ahUKEwi49LiwxO2EAxWlnf0HHd_TD90Q3PALegQIXBAF&cshid=1710205744166576&biw=1920&bih=968"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-orange-600"
            >
              <FaGoogle />
            </Link>
          </div>
          <ul className="flex space-x-6 md:justify-end justify-center">
            <li>
              <Link
                className="font-bold hover:text-orange-600"
                href="/agb.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                AGB
              </Link>
            </li>
            <li>
              <Link
                className="font-bold hover:text-orange-600"
                href="/impressum"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                className="font-bold hover:text-orange-600"
                href="/datenschutz"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
