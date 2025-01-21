"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
    const projects = [
        {
            title: "Mobile App Landing",
            description:
                "I use animation as a third dimension by which to simplify experiences and guiding.",
            image: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/2928f1c206794db596a5c078613184f0coworking laptops.jpg", // Cambia la ruta según tus imágenes
        },
        {
            title: "Mobile App Landing",
            description:
                "I use animation as a third dimension by which to simplify experiences and guiding.",
            image: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/5_8931e87bab", // Cambia la ruta según tus imágenes
        },
        {
            title: "Mobile App Landing",
            description:
                "I use animation as a third dimension by which to simplify experiences and guiding.",
            image: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/2_18df4f09d6", // Cambia la ruta según tus imágenes
        },
        {
            title: "Mobile App Landing",
            description:
                "I use animation as a third dimension by which to simplify experiences and guiding.",
            image: "https://s3.us-south.cloud-object-storage.appdomain.cloud/bucket-travelisimo/2928f1c206794db596a5c078613184f0coworking laptops.jpg", // Cambia la ruta según tus imágenes
        },
    ];

    return (
        <section
            id="portfolio"
            className="min-h-screen bg-background text-text flex flex-col items-center justify-center px-6 lg:px-20 py-16"
        >
            {/* Encabezado */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">
                    My <span className="text-highlight">Amazing Work</span>
                </h2>
                <p className="text-secondary mt-4 lg:text-lg">
                    Visit my portfolio and keep your feedback.
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
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-dark rounded-lg shadow-lg overflow-hidden transition hover:scale-105">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-secondary mt-2">{project.description}</p>
                                <a
                                    href="#"
                                    className="inline-block mt-4 text-highlight font-semibold"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
