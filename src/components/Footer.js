export default function Footer() {
    return (
      <footer className="bg-highlight text-text py-12">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Contenedor de columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Me */}
            <div>
              <h3 className="text-lg font-bold mb-4">About Me</h3>
              <p className="text-secondary mb-4">
                Lorem ipsum dolor sit amet consectetur. Neque aliquam nulla fusce
                hendrerit nec lorem viverra.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-text hover:text-secondary transition"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-text hover:text-secondary transition"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-text hover:text-secondary transition"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="#"
                  className="text-text hover:text-secondary transition"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
  
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>App Development</li>
                <li>UI/UX Design</li>
                <li>Consulting</li>
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>About Me</li>
                <li>Terms & Conditions</li>
                <li>Forums</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
  
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  520 Queenberry Street, Embilipitiya 75200, Sri Lanka
                </li>
                <li>
                  <i className="fas fa-phone mr-2"></i>
                  +94 712 345 678
                </li>
                <li>
                  <i className="fas fa-envelope mr-2"></i>
                  support@james.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  