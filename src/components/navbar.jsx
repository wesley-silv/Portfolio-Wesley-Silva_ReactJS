import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoWS from './logows'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/budgets", label: "Orçamentos" },
    // { to: "/projects", label: "Projetos" },
    // { to: "/contact", label: "Contato" },
  ];

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 flex items-center justify-between 
      backdrop-blur-md bg-white/30 dark:bg-gray-900/30
      w-full h-16 px-6 shadow-lg z-30">
      
      {/* Logo as link */}
      <Link to="/" className="flex items-center space-x-2">
        <LogoWS />
        <span className="sr-only">Home</span>
      </Link>

      {/* Desktop Links */}
      <nav className="hidden lg:flex space-x-8 items-center">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`text-lg font-medium transition-colors duration-200 
              ${location.pathname === to 
                ? "text-yellow-400 border-b-2 border-yellow-400" 
                : "text-gray-800 dark:text-gray-200 hover:text-yellow-400"}`}
          >
            {label}
          </Link>
        ))}
        <button
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={handleMenuToggle}
        aria-controls="nav-menu"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
        className="lg:hidden text-3xl text-gray-800 dark:text-gray-200"
      >
        {isMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
      </button>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center space-y-6 z-20">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className="text-2xl text-white hover:text-yellow-400 transition-colors"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => {
              handleThemeToggle();
              closeMenu();
            }}
            aria-label="Toggle theme"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
