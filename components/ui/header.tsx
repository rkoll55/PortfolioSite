import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    // Only handle the frosted glass effect
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-[99] left-0 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-lg " 
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4 px-24 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-black font-semibold text-lg">
          <Link href="/">Rohan's Portfolio</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-black hover:text-neutral-600 cursor-pointer transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-black hover:text-neutral-600 cursor-pointer transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-neutral-400 cursor-pointer transition-colors py-1 bg-black px-3 rounded-lg text-white hover:bg-neutral-800"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="text-black hover:text-neutral-600 cursor-pointer transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-black hover:text-neutral-600 cursor-pointer transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-neutral-600 cursor-pointer transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;