"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
    const proyectos = [
        {
            titulo: "Sistema de Reservas Académicas",
            descripcion:
                "Desarrollo de una plataforma web para la reserva de aulas y recursos educativos, utilizando React para el frontend y MySQL para la gestión de datos.",
            imagen: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/2928f1c206794db596a5c078613184f0coworking laptops.jpg",
        },
        {
            titulo: "E-Commerce con WebSockets",
            descripcion:
                "Creación de una tienda en línea con React y Node.js, integrando WebSocket en Java para permitir actualizaciones en tiempo real en el carrito de compras.",
            imagen: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/5_8931e87bab",
        },
        {
            titulo: "Dashboard para Gestión Empresarial",
            descripcion:
                "Desarrollo de un panel de control interactivo con React y Redux, permitiendo a los usuarios visualizar estadísticas y gestionar datos de forma eficiente.",
            imagen: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/2_18df4f09d6",
        },
        {
            titulo: "Plataforma de Aprendizaje Online",
            descripcion:
                "Diseño e implementación de una plataforma educativa en línea con Next.js y Node.js, enfocada en cursos interactivos y seguimiento del progreso del usuario.",
            imagen: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/2928f1c206794db596a5c078613184f0coworking laptops.jpg",
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
                        <div className="bg-dark rounded-lg shadow-lg overflow-hidden transition hover:scale-105">
                            <img
                                src={proyecto.imagen}
                                alt={proyecto.titulo}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{proyecto.titulo}</h3>
                                <p className="text-secondary mt-2">{proyecto.descripcion}</p>
                                <a
                                    href="#"
                                    className="inline-block mt-4 text-highlight font-semibold"
                                >
                                    Leer más →
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
