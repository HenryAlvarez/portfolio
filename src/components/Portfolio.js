"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
    const proyectos = [
        {
            titulo: "Plataforma Tecnológica de Turismo",
            link: "https://travelisimo.com/",
            descripcion:
                "Travelisimo es una plataforma innovadora diseñada para ofrecer a los viajeros una forma rápida y eficiente de encontrar y reservar hospedajes, transporte y experiencias turísticas.",
            imagen: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/Macbook_Air_travelisimo_com_2_0313888922",
        },
        {
            titulo: "Plataforma para Afiliados y Proveedores",
            link: "https://partners.travelisimo.com/",
            descripcion:
                "Partners Travelisimo diseñada para gestionar proveedores y afiliados dentro del ecosistema turístico. Esta plataforma innovadora permite a negocios y emprendedores promocionar sus servicios.",
            imagen: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/Macbook_Air_partners_travelisimo_com_1_245e84770d",
        },
        {
            titulo: "Dashboard para Gestión Empresarial",
            descripcion:
                "Desarrollo de un panel de control interactivo con React y Redux, permitiendo a los administradores visualizar la disponibilidad y gestionar prodcutos y servicios de forma eficiente.",
            imagen: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/Macbook_Air_office_travelisimo_com_8b6ec1ca25",
        },
        {
            titulo: "Plataforma de Alquileres Vacacionales",
            link: "https://antigua-rentals.com/",
            descripcion:
                "Antigua Rentals es la plataforma ideal para encontrar y reservar alojamientos únicos en Guatemala. Desarrollado con React.js, integrando APIs y optimizando rendimiento y UX",
            imagen: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/Macbook_Air_antigua_rentals_com_145ea4b252",
        },
    ];

    return (
        <section
            id="portafolio"
            className="min-h-screen bg-background text-text flex flex-col items-center justify-center px-6 lg:px-20 py-16"
        >
            {/* Encabezado */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">
                    Mi <span className="text-highlight texto-gradiente">Portafolio</span>
                </h2>
                <p className="text-secondary mt-4 lg:text-lg">
                    Algunos de los proyectos en los que he trabajado recientemente.
                </p>
            </div>

            {/* Carrusel */}
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="w-full"
            >
                {proyectos.map((proyecto, index) => (
                    <SwiperSlide key={index}>
                        <a
                            href={proyecto.link || "#portafolio"}
                            target={proyecto.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="bg-dark rounded-lg shadow-lg overflow-hidden transition hover:scale-105 cursor-pointer">
                                <img
                                    src={proyecto.imagen}
                                    alt={proyecto.titulo}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">{proyecto.titulo}</h3>
                                    <p className="text-secondary mt-2">{proyecto.descripcion}</p>

                                    <span className="inline-block mt-3 text-highlight font-semibold">
                                        Ver →
                                    </span>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    );
}
