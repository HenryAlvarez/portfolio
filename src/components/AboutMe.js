"use client";

import { useState } from "react";
import Image from "next/image";
import profileImage from "../assets/profile2.jpg.png";

export default function AboutMe() {
  const [mostrarMasHabilidades, setMostrarMasHabilidades] = useState(false);

  const habilidades = [
    // Desarrollo Frontend
    "HTML", "CSS", "JavaScript", "React", "Redux", "Next.js", "Bootstrap", "SASS", "Ant Design", "Tailwind", "UX", "UI",

    // Backend y Bases de Datos
    "Node.js", "Express.js", "APIs RESTful", "SQL", "MySQL", "Mongo db",

    // Inteligencia Artificial e Integraciones
    "OpenAI API", "Dialoflow", "NLP",

    // Herramientas y Diseño
    "Adobe XD", "Figma", "Git", "GitHub", "Npm", "Nvm"
];


  return (
    <section
      id="sobre-mi"
      className="min-h-screen bg-[#252728] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 gap-10 py-16"
    >
      {/* Imagen */}
      <div className="relative flex-1 flex justify-center items-center">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
          <Image
            src={profileImage}
            alt="Perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
          Sobre Mí <span className="text-highlight texto-gradiente">Henry Alvarez</span>
        </h2>
        <p className="text-secondary text-lg lg:text-xl mb-6">
          Desarrollador Web con experiencia en todas las etapas del ciclo de desarrollo. 
          Especialista en React, Next.js, Node.js y bases de datos. 
          Comprometido con la creación de experiencias digitales innovadoras y eficientes.
        </p>

        {/* Habilidades */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {habilidades.slice(0, mostrarMasHabilidades ? habilidades.length : 12).map((habilidad) => (
            <span
              key={habilidad}
              className="bg-background text-text px-4 py-2 rounded-lg text-center"
            >
              {habilidad}
            </span>
          ))}
        </div>

        {/* Botón para mostrar más habilidades */}
        <button
          onClick={() => setMostrarMasHabilidades(!mostrarMasHabilidades)}
          className="inline-block px-6 py-3 bg-highlight text-text font-semibold rounded-lg hover:bg-control transition"
        >
          {mostrarMasHabilidades ? "Mostrar Menos ⬆" : "Mostrar Más →"}
        </button>
      </div>
    </section>
  );
}
