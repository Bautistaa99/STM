import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Wheat } from "lucide-react";
import heroImage from "@/assets/hero-agro.jpg";
import riceImage from "@/assets/rice-premium.jpg";
import chickenFeedImage from "@/assets/chicken-feed.jpg";
import fideosImage from "@/assets/fideos.jpg";

const Index = () => {
  const featuredProducts = [
    {
      name: "Arroz Premium x 15 kg",
      brand: "Gran Campeón",
      image: riceImage,
      description: "Arroz de máxima calidad para consumo familiar"
    },
    {
      name: "Arroz Tradicional x 15 kg", 
      brand: "Gran Campeón",
      image: riceImage,
      description: "La opción confiable de siempre para tu mesa"
    },
    {
      name: "Fideos Cocktail x 10 kg",
      brand: "STM",
      image: fideosImage,
      description: "Fideos premium para distribuidores y comercios"
    },
    {
      name: "Alimento para Gallinas",
      brand: "STM",
      image: chickenFeedImage,
      description: "Nutrición completa para gallinas ponedoras"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            STM
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Productos Agroalimenticios de Calidad
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Proveemos alimentos balanceados y productos agroalimenticios a consumidores,
            distribuidores y comercios de Álvarez, Santa Fe y la zona de Rosario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/productos">
                Ver Productos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contacto">
                Contactanos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Productos Más Vendidos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los productos que nuestros clientes eligen por su calidad y precio competitivo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-accent">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground ml-1">Más Vendido</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{product.brand}</p>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/productos">
                Ver Todos los Productos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wheat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Calidad Premium</h3>
              <p className="text-muted-foreground">
                Productos seleccionados con los más altos estándares de calidad
                para garantizar la satisfacción de nuestros clientes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Distribución Regional</h3>
              <p className="text-muted-foreground">
                Servicio de entrega confiable en Álvarez, Rosario y toda la zona.
                Atendemos a mayoristas, distribuidores y consumidores finales.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Confianza y Trayectoria</h3>
              <p className="text-muted-foreground">
                Años de experiencia en el sector agroalimenticio nos respaldan
                como empresa confiable y comprometida con la calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitás productos agroalimenticios de calidad?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactanos para conocer nuestros productos y precios especiales para mayoristas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contacto">
                Solicitar Presupuesto
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/productos">
                Ver Catálogo Completo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
