export default function Resume() {
    const education = [
      {
        year: "2014 - 2016",
        title: "Oxford University",
        description:
          "I use animation as a third dimension by which to simplify experiences and guiding.",
      },
      {
        year: "2010 - 2014",
        title: "Higher School Graduation",
        description:
          "I use animation as a third dimension by which to simplify experiences and guiding.",
      },
    ];
  
    const experience = [
      {
        year: "2023 - Now",
        title: "Web Designer - Envato",
        description:
          "I use animation as a third dimension by which to simplify experiences and guiding.",
      },
      {
        year: "2015 - 2023",
        title: "Developer - Zhinc Studio",
        description:
          "I use animation as a third dimension by which to simplify experiences and guiding.",
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
            My <span className="text-highlight">CV Resume</span>
          </h2>
          <p className="text-secondary mt-4 lg:text-lg">
            My career journey from education to professional experience.
          </p>
        </div>
  
        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Educación */}
          <div>
            <h3 className="text-xl font-bold mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l border-secondary"
                >
                  <div className="absolute -left-4 top-0 bg-highlight w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-background">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-secondary mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Experiencia */}
          <div>
            <h3 className="text-xl font-bold mb-6">Experience</h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l border-secondary"
                >
                  <div className="absolute -left-4 top-0 bg-highlight w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-background">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-secondary mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  