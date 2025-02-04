/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1B1F22", // Fondo principal
        primary: "#6446C1",   // Color principal
        secondary:"#C7C8CC", // Color secundario
        control: "#AF78B3", // Color secundario
        highlight: "#7C69EB", // Color para hover
        text: "#FCFEFF",      // Color del texto
        dark: "#252728",      // Oscuro adicional
      },
    },
  },
  plugins: [],
};
