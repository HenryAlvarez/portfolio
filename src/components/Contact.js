"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID, // Service ID
                process.env.NEXT_PUBLIC_TEMPLATE_ID, // Template ID
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_PUBLIC_KEY // Public Key
            )
            .then(
                () => {
                    setIsSent(true);
                    setForm({ name: "", email: "", message: "" });
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
            <div className="absolute bottom-8 left-16 w-8 h-8 bg-secondary rotate-45"></div>
            <div className="absolute bottom-4 right-8 w-16 h-16 bg-highlight rounded-full"></div>
            <div className="absolute -top-16 right-20">
                <img
                    src="/rocket.svg" // Reemplaza con la ruta de tu imagen del cohete
                    alt="Rocket"
                    className="w-32 h-32"
                />
            </div>

            {/* Encabezado */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">
                    Contact <span className="text-highlight">Me</span>
                </h2>
                <p className="text-secondary mt-4 lg:text-lg">Get in touch with me.</p>
            </div>

            {/* Formulario */}
            <form
                onSubmit={handleSubmit}
                className="bg-dark p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-3 rounded bg-secondaryBackground text-text outline-none"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full p-3 rounded bg-secondaryBackground text-text outline-none"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Type your message"
                        className="w-full p-3 rounded bg-secondaryBackground text-text outline-none"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-highlight text-text py-3 rounded font-semibold hover:bg-secondary transition"
                >
                    Submit →
                </button>
                {isSent && (
                    <p className="text-center text-green-500 mt-4">
                        Thank you! Your message has been sent.
                    </p>
                )}
            </form>
        </section>
    );
}
