import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        
        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Mahfuj Mazid. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/Mahfujmazid47"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mahfujmazid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/mahfuj.mazid.2024"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/+8801303725897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
