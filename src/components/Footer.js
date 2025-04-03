export default function Footer() {
  return (
    <footer className="bg-highlight text-text py-10 text-center">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Información de Contacto (Alineado en Vertical en Móvil) */}
        <div className="mb-6 flex flex-col items-center space-y-2">
          <p className="text-lg font-semibold">Chimaltenango, Guatemala</p>
          <p className="text-lg flex items-center">
            <i className="fas fa-phone mr-2"></i> +502 30775696
          </p>
          <p className="text-lg flex items-center">
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:henry.gabriel.alvarez@gmail.com" className="hover:text-secondary">
              henry.gabriel.alvarez@gmail.com
            </a>
          </p>
        </div>

        {/* Redes Sociales (Vertical en Móvil, Horizontal en Desktop) */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0">
          <a
            href="https://www.linkedin.com/in/henrry-alvarez/"
            className="flex items-center space-x-2 hover:text-secondary transition"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-xl"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/HenryAlvarez/"
            className="flex items-center space-x-2 hover:text-secondary transition"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-github text-xl"></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/henry_alv_/"
            className="flex items-center space-x-2 hover:text-secondary transition"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl"></i>
            <span>Instagram</span>
          </a>
          {/* <a
            href="https://www.facebook.com/henry.sunuc"
            className="flex items-center space-x-2 hover:text-secondary transition"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-facebook text-xl"></i>
            <span>Facebook</span>
          </a> */}
          {/* <a
            href="https://www.tiktok.com/@alvarezgt_"
            className="flex items-center space-x-2 hover:text-secondary transition"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok text-xl"></i>
            <span>TikTok</span>
          </a> */}
        </div>
      </div>
    </footer>
  );
}
