import Image from "next/image";
import profileImage from "../assets/profile2.jpg.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-background flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20"
    >
      {/* Texto */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-text leading-tight">
          Hi, I'm <span className="text-highlight">Front End</span> Expert Developer.
        </h1>
        <p className="text-secondary mt-4 text-lg lg:text-xl">
          I am Web developer. I can provide clean code and pixel-perfect design.
        </p>
        <a
          href="#portfolio"
          className="inline-block mt-6 px-6 py-3 bg-highlight text-text font-semibold rounded-lg hover:bg-secondary transition"
        >
          My Projects →
        </a>
      </div>

      {/* Imagen */}
      <div className="flex-1 mt-10 lg:mt-0 relative">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mx-auto lg:mx-0">
          <Image
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Elementos decorativos */}
        <div className="absolute -top-4 -right-6 w-10 h-10 bg-highlight rounded-full hidden lg:block"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary rotate-45 hidden lg:block"></div>
      </div>
    </section>
  );
}
