import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Wheat } from "lucide-react";
import heroImage from "@/assets/hero-agro.jpg";
import riceImage from "@/assets/productos/tradicional.png";
import chickenFeedImage from "@/assets/productos/mezcla.png";
import fideosImage from "@/assets/productos/cocktail.png";
import ricePremium from "@/assets/productos/premium.png";


const Index = () => {
  const featuredProducts = [
    {
      id:"arroz-premium",
      name: "Arroz Premium x 15 kg",
      brand: "Gran Campeón",
      image: ricePremium,
      description: "Arroz de máxima calidad para consumo familiar"
    },
    {
      id:"arroz-tradicional",
      name: "Arroz Tradicional x 15 kg", 
      brand: "Gran Campeón",
      image: riceImage,
      description: "La opción confiable de siempre para tu mesa"
    },
    {
      id:"fideos-cocktail",
      name: "Fideos Cocktail x 10 kg",
      brand: "Gran Campeón",
      image: fideosImage,
      description: "Fideos premium para distribuidores y comercios"
    },
    {
      id:"arroz-partido",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 ">
            STM
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Productos Agroalimenticios de Calidad
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Proveemos alimentos balanceados y productos agroalimenticios <br/> a distribuidores de todo el pais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 font-bold duration-1000">
              <Link to="/productos">
                Ver Productos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-primary font-bold hover:bg-white/80 hover:text-primary duration-1000">
              <a href="https://wa.me/5491141746937?text=Hola,%20queria%20solicitar%20iformacion!">
                Contactanos
              </a>
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
    
    {/* 🔧 grid más compacto y estirando items */}
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
      {featuredProducts.map((product, index) => (
        <Link
          key={index}
          to={`/productos/${product.id}`}
          onClick={() => window.scrollTo({ top: 0 })}
          className="h-full"  /* el enlace ocupa todo el alto de la celda */
        >
          <Card className="h-full flex flex-col hover:shadow-card transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className="flex flex-col h-full p-3 sm:p-4 md:p-6">
              
              {/* 🖼️ imagen con alto consistente */}
              <div className="mb-2 rounded-lg overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-contain"
                />
              </div>

              {/* Badges */}
              <div className="flex items-center mb-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-[10px] sm:text-xs text-muted-foreground ml-1">
                  Más Vendido
                </span>
              </div>

              {/* 📝 texto con alturas mínimas para igualar */}
              <h3 className="font-semibold text-sm sm:text-base leading-tight line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h3>
              {product.brand && (
                <p className="text-xs sm:text-sm text-primary font-medium mt-1">
                  {product.brand}
                </p>
              )}
              <p className="hidden sm:block text-sm text-muted-foreground mt-1 line-clamp-2 min-h-[2.5rem]">
                {product.description}
              </p>

              {/* ⚓ botón siempre al fondo */}
              <div className="mt-auto pt-3">
                <Button className="w-full h-9 text-sm">
                  Ver detalle
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
    
    <div className="text-center mt-10 sm:mt-12">
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
          <p className="text-xl mb-8">
            Contactanos para conocer nuestros productos y precios especiales para mayoristas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <Button asChild size="lg" variant="outline" className="text-primary font-bold">
              <Link to="/contacto" onClick={() => window.scrollTo({ top: 0})}>
                Solicitar Presupuesto
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary font-bold hover:font-primary">
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
