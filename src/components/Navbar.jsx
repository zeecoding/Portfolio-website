import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
import logo from '../assets/kevinRushLogo.png';
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex items-center">
        <img className="mx-2 w-10" src={logo} alt="Logo" />
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
