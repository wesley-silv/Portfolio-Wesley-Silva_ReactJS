import React from "react";
import { FaCopyright, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white">
      <div className="container mx-auto flex flex-col items-center lg:flex-row justify-between gap-4">
        {/* Copyright Section */}
        <div className="flex items-center text-center lg:text-left">
          <FaCopyright className="mr-2 text-2xl" />
          <p className="text-lg">
            Todos os direitos reservados © {currentYear}
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Contatos</h3>
          <div className="flex flex-col items-center lg:items-start space-y-2 mt-2">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2 text-xl" />
              <span>(34) 99254-0828</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-xl" />
              <span>wesleysilvaconceicao@outlook.com</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-[1.8rem]">
          <a href="https://linkedin.com/in/wesleysilv" title='LinkedIn' target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <FaLinkedin />
          </a>
          <a href="https://github.com/wesleysilv" title='GitHub' target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
