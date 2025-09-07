import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">STM</h3>
            <p className="text-primary-foreground/80 mb-4">
              Productos agroalimenticios de calidad para consumidores particulares,
              distribuidores y comercios de la zona de Rosario y alrededores.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <a href="https://maps.app.goo.gl/V3XSnej3KfpXXrmH6">
                <span className="text-sm text-primary-foreground/80">
                  Álvarez, Santa Fe
                </span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:5491141746937">

                <span className="text-sm text-primary-foreground/80">
                  +54 9 11 4174-6937
                </span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm text-primary-foreground/80">
                  contacto@stm.com.ar
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link to="/productos">
              <p className="text-sm text-primary-foreground/80">
                • Productos
              </p>
              </Link>
              <a href="/nosotros">
              <p className="text-sm text-primary-foreground/80">
                • Quiénes Somos
              </p>
              </a>
              <a href="/contacto">
              <p className="text-sm text-primary-foreground/80">
                • Contacto
              </p>
              </a>
              <a href="ubicacion">
              <p className="text-sm text-primary-foreground/80">
                • Ubicación
              </p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 STM - Productos Agroalimenticios. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;