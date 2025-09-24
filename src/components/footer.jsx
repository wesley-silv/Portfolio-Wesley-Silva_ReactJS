import React from "react";
import { FaCopyright, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactItems = [
    { icon: <FaPhoneAlt />, label: "Telefone", value: "(34) 99254-0828" },
    { icon: <FaEnvelope />, label: "Email", value: "wesleysilvaconceicao@outlook.com" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/wesleysilv", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/wesleysilv", label: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">

        {/* Copyright */}
        <div className="flex items-center space-x-3 text-center lg:text-left">
          <FaCopyright className="text-2xl lg:text-3xl" />
          <p className="text-lg lg:text-xl font-semibold">
            Todos os direitos reservados © {currentYear} Wesley Silva
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
          {contactItems.map((item, index) => (
            <div key={index} className="p-4 rounded-xl flex items-center space-x-3">
              <span className="text-xl lg:text-2xl">{item.icon}</span>
              <span className="text-base lg:text-lg">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-2xl lg:text-3xl">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 hover:text-yellow-400 hover:drop-shadow-xl transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Optional bottom line */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm lg:text-base text-white/70">
        Designed & Developed by Developer Wesley Silva
      </div>
    </footer>
  );
};

export default Footer;
