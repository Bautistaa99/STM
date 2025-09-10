import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Users, Award, Clock } from "lucide-react";
import nosotrosHero from "@/assets/nosotros-hero.webp";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="relative py-12 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute inset-0 w-full h-full opacity-20 bg-cover bg-center"
             style={{ backgroundImage: `url(${nosotrosHero})` }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Quiénes Somos
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Conocé más sobre STM, nuestra historia y nuestro compromiso con la calidad
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              <span className="text-primary">STM</span> - Productos Agroalimenticios
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              STM es una empresa familiar dedicada a la comercialización de productos agroalimenticios 
              y alimentos balanceados, ubicada estratégicamente en Álvarez, Santa Fe, cerca de Rosario. 
              Nos especializamos en brindar productos de alta calidad tanto para consumidores particulares 
              como para distribuidores y comercios de la región.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso es ofrecer productos confiables, nutritivos y accesibles que satisfagan 
              las necesidades de nuestros clientes, manteniendo siempre los más altos estándares de calidad 
              y servicio al cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calidad</h3>
                <p className="text-muted-foreground">
                  Seleccionamos cuidadosamente cada producto para garantizar 
                  la máxima calidad y frescura.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Confianza</h3>
                <p className="text-muted-foreground">
                  Construimos relaciones duraderas basadas en la transparencia 
                  y el compromiso con nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Puntualidad</h3>
                <p className="text-muted-foreground">
                  Cumplimos con los tiempos de entrega acordados para mantener 
                  la continuidad de tus actividades.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cercanía</h3>
                <p className="text-muted-foreground">
                  Estamos cerca de nuestros clientes, tanto geográficamente 
                  como en el trato personalizado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nuestra Ubicación
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Álvarez, Santa Fe</h3>
                    <p className="text-muted-foreground">
                      Ubicados estratégicamente en Álvarez, muy cerca de Rosario, 
                      lo que nos permite atender eficientemente toda la zona metropolitana 
                      y localidades cercanas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Área de Servicio</h3>
                    <p className="text-muted-foreground">
                      Atendemos a consumidores particulares, distribuidores y comercios 
                      en tod el pais, ofreciendo un servicio 
                      personalizado y adaptado a cada tipo de cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                ¿Por qué elegir STM?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Amplia experiencia en el sector agroalimenticio
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Productos de marcas reconocidas y calidad garantizada
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Precios competitivos y condiciones especiales para mayoristas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Atención personalizada y asesoramiento profesional
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Entrega confiable en todo el pais.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;