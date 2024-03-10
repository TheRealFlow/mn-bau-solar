import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-sm flex">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Unternehmensinformationen linksbündig */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>MN-Bau & Solar GbR</p>
          <p>Hinner de Hääch 1</p>
          <p>18059 Rostock OT Papendorf</p>
          <p>info@mnbausolar.de</p>
          <p>+4938140343777</p>
        </div>

        {/* Social Media Icons und Copyright zentriert */}
        <div className="flex flex-col justify-center space-x-4 md:justify-end md:space-x-0 md:space-y-2">
          <div className="flex space-x-4">
            <SocialIcon url="https://www.facebook.com/dein-facebook" />
            <SocialIcon url="https://www.instagram.com/dein-instagram" />
            <SocialIcon url="https://www.linkedin.com/dein-linkedin" />
          </div>
          <p>
            &copy; {new Date().getFullYear()} MN-Bau & Solar. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>

      {/* Untere Links rechtsbündig */}
      <div className="container mx-auto flex justify-end mt-4">
        <ul className="flex space-x-4">
          <FooterLink href="/agb">AGB's</FooterLink>
          <FooterLink href="/impressum">Impressum</FooterLink>
          <FooterLink href="/datenschutz">Datenschutz</FooterLink>
        </ul>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <Link className="hover:text-gray-300" href={href}>
        {children}
      </Link>
    </li>
  );
};

export default Footer;
