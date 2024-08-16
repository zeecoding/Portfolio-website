import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:flex`}>
        <ul className="space-y-4 md:space-y-0 md:flex md:space-x-8 list-none text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work Experience</li>
          <li>Projects</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
      <div className="block md:hidden">
        <button onClick={() => setOpen(!isOpen)}>
          <RxHamburgerMenu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;