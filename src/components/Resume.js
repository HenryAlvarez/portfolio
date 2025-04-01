export default function Resume() {
  const educacion = [
    {
      titulo: "Ingeniería en Sistemas (Pensum Cerrado)",
      institucion: "Universidad Mariano Gálvez",
      fecha: "2018 - 2024",
    },
    {
      titulo: "Bachiller Industrial y Perito en Informática",
      institucion: "Colegio Simeón Cañas",
      fecha: "2014 - 2016",
    },
    {
      titulo: "Search Expert & Data Science",
      institucion: "Programa Valentina de FUNSEPA",
      fecha: "2018",
    },
    {
      titulo: "Cursos en Línea",
      institucion: "Plataformas educativas como Udemy, Platzi, etc.",
      fecha: "Aprendizaje Constante",
    },
  ];


  const experiencia = [
    {
      titulo: "Desarrollador Web",
      empresa: "Travelisimo",
      fecha: "2022 - 2025",
      descripcion: [
        "Liderazgo en el desarrollo de aplicaciones web utilizando React, Redux y consumo de APIs.",
        "Creación de dashboards interactivos para la gestión de datos.",
        "Implementación de asistentes basados en IA con OpenAI para mejorar la experiencia del usuario.",
      ],
    },
    {
      titulo: "Diseñador UI/UX y Prototipado",
      empresa: "ViaGuate",
      fecha: "2021 - 2022",
      descripcion: [
        "Creación de prototipos interactivos en Figma y Adobe XD.",
        "Definición de flujos de usuario y diseño de experiencia digital.",
        "Realización de pruebas de usabilidad para optimizar la interacción del usuario.",
      ],
    },
    {
      titulo: "Desarrollador Frontend",
      empresa: "Antigua Rentals",
      fecha: "Mar 2020 - Jul 2022",
      descripcion: [
        "Desarrollo de interfaces de usuario responsivas con React, Bootstrap y Sass.",
        "Optimización del rendimiento y SEO de aplicaciones web.",
        "Consumo e integración de APIs RESTful.",
      ],
    },
    {
      titulo: "Maquetador Web (HTML & CSS)",
      empresa: "Colab",
      fecha: "2019 - 2020",
      descripcion: [
        "Desarrollo de interfaces web con HTML, CSS.",
        "Implementación de layouts responsivos con Flexbox y Grid.",
        "Optimización de código para mejorar rendimiento y accesibilidad.",
      ],
    },
  ];


  return (
    <section
      id="resume"
      className="min-h-screen bg-secondaryBackground text-text flex flex-col items-center justify-center px-6 lg:px-20 py-16"
    >
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Mi <span className="text-highlight texto-gradiente">Currículum</span>
        </h2>
        <p className="text-secondary mt-4 lg:text-lg">
          Un resumen de mi formación académica y experiencia profesional.
        </p>
      </div>

      {/* Contenido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Educación */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-highlight">Educación</h3>
          <div className="space-y-8">
            {educacion.map((item, index) => (
              <div key={index} className="relative pb-6 border-l border-secondary pl-6">
                <h4 className="text-lg font-bold ">{item.titulo}</h4>
                <p className="text-sm text-secondary">{item.fecha}</p>
                <p className="text-secondary">{item.institucion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-highlight">Experiencia</h3>
          <div className="space-y-8">
            {experiencia.map((item, index) => (
              <div key={index} className="relative pb-6 border-l border-secondary pl-6">
                <h4 className="text-lg font-bold">{item.titulo}</h4>
                <p className="text-sm text-secondary">{item.fecha}</p>
                <p className="text-secondary">{item.empresa}</p>
                <ul className="list-disc pl-5 mt-2">
                  {item.descripcion.map((desc, i) => (
                    <li key={i} className="text-secondary">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
