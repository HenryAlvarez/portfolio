"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    const [enviado, setEnviado] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID, // Service ID
                process.env.NEXT_PUBLIC_TEMPLATE_ID, // Template ID
                {
                    from_name: formulario.nombre,
                    from_email: formulario.correo,
                    message: formulario.mensaje,
                },
                process.env.NEXT_PUBLIC_PUBLIC_KEY // Public Key
            )
            .then(
                () => {
                    setEnviado(true);
                    setFormulario({ nombre: "", correo: "", mensaje: "" });
                },
                (error) => {
                    console.error("Error al enviar el formulario: ", error);
                }
            );
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen bg-background text-text flex flex-col items-center justify-center px-6 lg:px-20 py-16 overflow-hidden"
        >
            {/* Figuras decorativas */}
            <div className="absolute top-4 left-8 w-10 h-10 bg-highlight rounded-full"></div>
            <div className="absolute bottom-8 left-16 w-8 h-8 bg-control rotate-45"></div>
            <div className="absolute bottom-4 right-8 w-16 h-16 bg-control rounded-full"></div>

            {/* Encabezado */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">
                    Contáctame <span className="text-highlight texto-gradiente">Aquí</span>
                </h2>
                <p className="text-secondary mt-4 lg:text-lg">
                    Envíame un mensaje y te responderé lo antes posible.
                </p>
            </div>

            {/* Formulario */}
            <form
                onSubmit={manejarEnvio}
                className="bg-dark p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
            >
                <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold mb-2">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formulario.nombre}
                        onChange={manejarCambio}
                        placeholder="Escribe tu nombre"
                        className="w-full p-3 rounded bg-secondaryBackground text-black placeholder-gray-400 outline-none"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="correo" className="block text-sm font-semibold mb-2">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formulario.correo}
                        onChange={manejarCambio}
                        placeholder="Escribe tu correo"
                        className="w-full p-3 rounded bg-secondaryBackground text-black placeholder-gray-400 outline-none"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold mb-2">
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formulario.mensaje}
                        onChange={manejarCambio}
                        placeholder="Escribe tu mensaje"
                        className="w-full p-3 rounded bg-secondaryBackground text-black placeholder-gray-400 outline-none"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-highlight text-text py-3 rounded font-semibold hover:bg-control transition"
                >
                    Enviar →
                </button>
                {enviado && (
                    <p className="text-center text-green-500 mt-4">
                        ¡Gracias! Tu mensaje ha sido enviado con éxito.
                    </p>
                )}
            </form>
        </section>
    );
}
