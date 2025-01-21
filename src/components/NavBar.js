"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1B1F22] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Henry <span >Alvarez</span>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-icons text-white">{isOpen ? "close" : "menu"}</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <a href="#home" className="hover:text-highlight transition">
            Inicio
          </a>
          <a href="#about" className="hover:text-highlight transition">
            Sobre mí
          </a>
          <a href="#portfolio" className="hover:text-highlight transition">
            Portafolio
          </a>
          <a href="#contact" className="hover:text-highlight transition">
            Contacto
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-[#1B1F22] flex flex-col items-center justify-center space-y-8">
          <a
            href="#home"
            className="text-2xl hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-2xl hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Sobre mí
          </a>
          <a
            href="#portfolio"
            className="text-2xl hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Portafolio
          </a>
          <a
            href="#contact"
            className="text-2xl hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}