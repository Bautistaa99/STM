import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Navigation, Clock, Car, Truck } from "lucide-react";
import ubicacionHero from "@/assets/ubicacion-hero.webp";

const Ubicacion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="relative py-12 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute inset-0 w-full h-full opacity-20 bg-cover bg-center" 
             style={{ backgroundImage: `url(${ubicacionHero})` }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nuestra Ubicación
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Encontranos en Álvarez, Santa Fe, estratégicamente ubicados cerca de Rosario
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Location Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                STM - Álvarez, Santa Fe
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estamos ubicados en Álvarez, una localidad estratégicamente posicionada 
                muy cerca de Rosario, lo que nos permite brindar un servicio eficiente 
                en todo el pais
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Dirección</h3>
                    <a href="https://maps.app.goo.gl/V3XSnej3KfpXXrmH6">
                    <p className="text-muted-foreground">
                      Álvarez, Santa Fe<br />
                      República Argentina
                    </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proximidad a Rosario</h3>
                    <p className="text-muted-foreground">
                      A pocos minutos de Rosario por Ruta Nacional 11<br />
                      Fácil acceso desde toda la región
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Horarios de Atención</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 8:00 - 18:00<br />
                      Sábados: 8:00 - 13:00<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-accent/20 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mapa de Ubicación</h3>
                <p className="text-muted-foreground mb-6">
                  Álvarez se encuentra ubicado estratégicamente cerca de Rosario,<br />
                  con fácil acceso desde las principales rutas de la región.
                </p>
                <Button asChild>
                  <a 
                    href="https://maps.google.com/?q=Álvarez,Santa Fe,Argentina" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Ver en Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Área de Servicio
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Desde nuestra ubicación en Álvarez, atendemos eficientemente toda la zona metropolitana 
              de Rosario y localidades cercanas, ofreciendo entrega confiable y puntual.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Rosario y Gran Rosario</h3>
                  <p className="text-muted-foreground">
                    Cobertura completa en Rosario y toda el área metropolitana, 
                    incluyendo localidades vecinas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Entrega Local</h3>
                  <p className="text-muted-foreground">
                    Servicio de entrega rápido y confiable para consumidores 
                    particulares en la zona de influencia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Distribución Mayorista</h3>
                  <p className="text-muted-foreground">
                    Servicio especializado de entrega para distribuidores 
                    y comercios de la región.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Nearby Cities */}
          <div className="bg-accent/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              Principales Ciudades que Atendemos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                "Gran Buenos Aires", "Rosario", "Ciudad de Santa Fe", "La Plata", 
                "Jujuy", "San Rafael (Mendoza)"
              ].map((city, index) => (
                <div key={index} className="bg-card rounded-lg p-3">
                  <p className="text-sm font-medium text-foreground">{city}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Y muchas otras localidades de la región. ¡Consultanos por tu zona!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ubicacion;