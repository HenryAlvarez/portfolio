import Image from "next/image";
import profileImage from "../assets/profile2.jpg.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-background flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20"
    >

      {/* Figuras decorativas */}
      <div className="absolute top-8 left-10 w-10 h-10 bg-control rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 bg-highlight rotate-45"></div>
      {/* <div className="absolute bottom-50 left-50 w-8 h-8 bg-highlight rotate-45"></div> */}

      {/* Texto */}
      <div className="flex-1 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
          Hola, <span className="text-highlight texto-gradiente">soy Henry</span>, Desarrollador de Software
        </h1>
        <p className="text-secondary mt-4 text-lg lg:text-xl">
        Soy un Desarrollador Web con más de seis años de experiencia creando interfaces dinámicas y funcionales. Me especializo en transformar ideas en soluciones eficientes, optimizando la experiencia del usuario con tecnología moderna.
        </p>
        <a
          href="#portafolio"
          className="inline-block mt-6 px-6 py-3 bg-highlight text-text font-semibold rounded-lg hover:bg-control transition"
        >
          Ver Portafolio →
        </a>
      </div>

      {/* Imagen */}
      <div className="flex-1 flex justify-center lg:justify-center items-center h-full">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={profileImage}
            alt="Perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
