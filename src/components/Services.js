export default function Services() {
    const services = [
      {
        title: "Web Development",
        subtitle: "Web Design & Logo",
        description:
          "I use animation as a third dimension by which to simplify experiences and guide through each and every interaction.",
        buttonText: "See Pricing",
      },
      {
        title: "Apps Development",
        subtitle: "iOS & Android",
        description:
          "I use animation as a third dimension by which to simplify experiences and guide through each and every interaction.",
        buttonText: "See Pricing",
      },
      {
        title: "Game Development",
        subtitle: "Unity & Unreal Engine",
        description:
          "I use animation as a third dimension by which to simplify experiences and guide through each and every interaction.",
        buttonText: "See Pricing",
        highlight: true, // Para personalizar esta tarjeta
      },
    ];
  
    return (
      <section
        id="services"
        className="min-h-screen bg-secondaryBackground text-text flex flex-col items-center justify-center px-6 lg:px-20 py-16"
      >
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            My Best <span className="text-highlight">Service</span>
          </h2>
          <p className="text-secondary mt-4 lg:text-lg">
            Services I offer to my clients to build amazing projects.
          </p>
        </div>
  
        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                service.highlight ? "bg-highlight text-background" : "bg-dark"
              }`}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <h4 className="text-lg mt-2">{service.subtitle}</h4>
              <p className="text-secondary mt-4">{service.description}</p>
              <a
                href="#"
                className={`inline-block mt-6 px-4 py-2 font-semibold rounded-lg ${
                  service.highlight
                    ? "bg-background text-highlight"
                    : "bg-highlight text-text"
                } hover:bg-secondary transition`}
              >
                {service.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  