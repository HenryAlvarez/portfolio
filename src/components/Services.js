export default function Services() {
  const servicios = [
    {
      titulo: "Desarrollo Web",
      subtitulo: "Sitios y Aplicaciones Web",
      descripcion:
        "Diseño y desarrollo de aplicaciones web dinámicas, responsivas y optimizadas con tecnologías modernas como React, Next.js y Node.js.",
      textoBoton: "Más información",
    },
    {
      titulo: "Desarrollo de Aplicaciones",
      subtitulo: "Aplicaciones Móviles",
      descripcion:
        "Creación de aplicaciones móviles híbridas y nativas con tecnologías como React Native y Flutter, garantizando rendimiento y escalabilidad.",
      textoBoton: "Más información",
    },
    {
      titulo: "Optimización y SEO",
      subtitulo: "Mejora de rendimiento",
      descripcion:
        "Optimización del rendimiento, accesibilidad y SEO para asegurar que tu sitio web cargue rápidamente y tenga una mejor visibilidad en motores de búsqueda.",
      textoBoton: "Más información",
      destacado: true, // Para personalizar esta tarjeta
    },
  ];

  return (
    <section
      id="servicios"
      className="min-h-screen bg-secondaryBackground text-text flex flex-col items-center justify-center px-6 lg:px-20 py-16"
    >
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Mis <span className="text-highlight">Servicios</span>
        </h2>
        <p className="text-secondary mt-4 lg:text-lg">
          Soluciones personalizadas para cada tipo de negocio y necesidad digital.
        </p>
      </div>

      {/* Tarjetas de Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              servicio.destacado ? "bg-highlight text-background" : "bg-dark"
            }`}
          >
            <h3 className="text-xl font-bold">{servicio.titulo}</h3>
            <h4 className="text-lg mt-2">{servicio.subtitulo}</h4>
            <p className="text-secondary mt-4">{servicio.descripcion}</p>
            <a
              href="#"
              className={`inline-block mt-6 px-4 py-2 font-semibold rounded-lg ${
                servicio.destacado
                  ? "bg-background text-highlight"
                  : "bg-highlight text-text"
              } hover:bg-secondary transition`}
            >
              {servicio.textoBoton}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
