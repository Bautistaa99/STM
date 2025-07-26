import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package, Filter } from "lucide-react";

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos los Productos", icon: "🌾" },
    { id: "gallinas", name: "Gallinas", icon: "🐔" },
    { id: "granza", name: "Granza", icon: "🌾" },
    { id: "mezcla", name: "Mezcla", icon: "🐖" },
    { id: "aves", name: "Aves Pequeñas", icon: "🐦" },
    { id: "semillas", name: "Semillas", icon: "🌱" },
    { id: "arroz", name: "Arroz", icon: "🍚" },
    { id: "otros", name: "Otros", icon: "🐹" },
  ];

  const products = [
    // Gallinas
    { category: "gallinas", name: "GALL. ESP x 24 kg", description: "Alimento especializado para gallinas ponedoras" },
    { category: "gallinas", name: "GALL. ESP x 40 kg", description: "Alimento especializado para gallinas ponedoras" },
    { category: "gallinas", name: "GALL. C/PO x 24 kg", description: "Alimento para gallinas con postura" },
    { category: "gallinas", name: "GALL. C/PO x 40 kg", description: "Alimento para gallinas con postura" },
    
    // Granza
    { category: "granza", name: "GRANZA x 24 kg", description: "Granza premium para alimentación animal" },
    { category: "granza", name: "GRANZA x 40 kg", description: "Granza premium para alimentación animal" },
    { category: "granza", name: "GRANZIN x 24 kg", description: "Granza fina para aves pequeñas" },
    { category: "granza", name: "GRANZIN x 40 kg", description: "Granza fina para aves pequeñas" },
    
    // Mezcla
    { category: "mezcla", name: "MEZCLA p/CHANCHO 30 kg", description: "Mezcla nutritiva especial para cerdos" },
    
    // Aves pequeñas
    { category: "aves", name: "CANARIO c/Vit. 10 kg", description: "Alimento vitaminado para canarios" },
    { category: "aves", name: "CANARIO c/Vit. 30 kg", description: "Alimento vitaminado para canarios" },
    { category: "aves", name: "CARDENAL x 10 kg", description: "Alimento especializado para cardenales" },
    { category: "aves", name: "CARDENAL x 30 kg", description: "Alimento especializado para cardenales" },
    { category: "aves", name: "PAJARO c/Vit 10 kg", description: "Alimento vitaminado para pájaros" },
    { category: "aves", name: "PAJARO c/Vit 30 kg", description: "Alimento vitaminado para pájaros" },
    
    // Semillas
    { category: "semillas", name: "ALPISTE x 10 kg", description: "Alpiste premium para aves" },
    { category: "semillas", name: "ALPISTE x 30 kg", description: "Alpiste premium para aves" },
    { category: "semillas", name: "MIJO X 10 kg", description: "Mijo de alta calidad" },
    { category: "semillas", name: "MIJO X 30 kg", description: "Mijo de alta calidad" },
    
    // Arroz
    { category: "arroz", name: "ARROZ PARTIDO 30 kg", description: "Arroz partido para uso industrial" },
    { category: "arroz", name: "ARROZ PREMIUM x 15 kg", description: "Arroz premium marca Gran Campeón", featured: true },
    { category: "arroz", name: "ARROZ TRADICIONAL x 15 kg", description: "Arroz tradicional marca Gran Campeón", featured: true },
    
    // Otros
    { category: "otros", name: "MEZCLA p/HAMSTER 10 kg", description: "Mezcla nutritiva para hamsters" },
    { category: "otros", name: "PISINGALLO 25 kg", description: "Maíz pisingallo de primera calidad" },
    { category: "otros", name: "COLZA 10 kg", description: "Semilla de colza premium" },
    { category: "otros", name: "LINO 10 kg", description: "Semilla de lino de alta calidad" },
    { category: "otros", name: "AVENA PELADA 10 kg", description: "Avena pelada para alimentación" },
    { category: "otros", name: "GIRASOL CONFITERO 10 kg", description: "Semillas de girasol confitero" },
    { category: "otros", name: "FIDEOS COCKTAIL 10 kg", description: "Fideos cocktail para distribución", featured: true },
  ];

  const filteredProducts = selectedCategory === "todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.icon || "📦";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Amplio catálogo de productos agroalimenticios de alta calidad para diferentes necesidades
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Filter className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm font-medium text-muted-foreground">Filtrar por categoría:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {selectedCategory === "todos" 
                ? `Todos los Productos (${filteredProducts.length})` 
                : `${categories.find(cat => cat.id === selectedCategory)?.name} (${filteredProducts.length})`
              }
            </h2>
            <p className="text-muted-foreground">
              Productos de calidad para consumidores y distribuidores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">
                        {getCategoryIcon(product.category)}
                      </span>
                    </div>
                    {product.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Más Vendido
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </Badge>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                No se encontraron productos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            ¿Interesado en algún producto?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactanos para consultar precios, disponibilidad y condiciones especiales para mayoristas
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="/contacto">
              Solicitar Información
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Productos;