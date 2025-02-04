"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1B1F22] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Henry <span className="texto-gradiente">Alvarez</span>
        </a>

        {/* Botón de menú para móviles */}
        <button
          className="lg:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-icons text-text">{isOpen ? "close" : "menu"}</span>
        </button>

        {/* Enlaces en escritorio */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <a href="#home" className="hover:text-highlight transition">
            Inicio
          </a>
          <a href="#about" className="hover:text-highlight transition">
            Sobre Mí
          </a>
          <a href="#portfolio" className="hover:text-highlight transition">
            Portafolio
          </a>
          <a href="#contact" className="hover:text-highlight transition">
            Contacto
          </a>
        </div>

        {/* Language Switch desktop */}
        {/* 
        <div className="hidden lg:flex items-center space-x-2">
          <span className="text-sm">EN</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer" // Ocultamos el input
            />
            <div className="w-12 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer peer-checked:bg-purple-500 transition-all"></div>
            <div className="absolute top-0.5 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-6"></div>
          </label>
          <span className="text-sm">ES</span>
        </div> 
        */}
      </div>

      {/* Menú para móviles */}
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
            Sobre Mí
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
