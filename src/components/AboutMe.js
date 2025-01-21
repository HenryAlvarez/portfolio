import Image from "next/image";
import profileImage from "../assets/profile2.jpg.png";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#252728] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 gap-10"
    >
      {/* Imagen */}
      <div className="relative flex-1">
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

      {/* Texto */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">
          About Me <span className="text-highlight">Henry Alvarez</span>
        </h2>
        <p className="text-secondary text-lg lg:text-xl mb-6">
          Hello! I'm Henry Alvarez, a Web Developer with over 6 years of experience. 
          Experienced in all stages of the development cycle for dynamic web 
          projects. I have in-depth knowledge of modern technologies, 
          including HTML, CSS, JavaScript, React, and more.
        </p>

        {/* Skills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {["HTML", "CSS", "JavaScript", "React", "Git", "Github", "SASS", "Python"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-background text-text px-4 py-2 rounded-lg text-center"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* Botón */}
        <a
          href="#"
          className="inline-block px-6 py-3 bg-highlight text-text font-semibold rounded-lg hover:bg-secondary transition"
        >
          Learn More →
        </a>
      </div>
    </section>
  );
}
