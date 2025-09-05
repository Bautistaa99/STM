import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package, Filter, Search } from "lucide-react";
import productosHero from "@/assets/productos-hero.jpg";

// arriba del archivo
import alpiste30kg from "@/assets/productos/alpiste30kg.jpg";
import canario30kg from "@/assets/productos/canario30kg.jpg";
import cardenal30kg from "@/assets/productos/cardenal30kg.jpg";
import gallina30kg from "@/assets/productos/gallina30kg.jpg";
import hamster from "@/assets/productos/hamster30kg.jpg";
import mijo30kg from "@/assets/productos/mijo30kg.jpg";
import partido30kg from "@/assets/productos/partido30kg.jpg";
import quebradoFino30kg from "@/assets/productos/quebradoFino30kg.jpg";
import quebradoGrueso30kg from "@/assets/productos/quebradoGrueso30kg.jpg";
import fideos from "@/assets/productos/cocktail.png";
import tradicional from "@/assets/productos/tradicional.png";
import premium from "@/assets/productos/premium.png";
import avena from "@/assets/productos/granel/avena.png";
import colza from "@/assets/productos/granel/colza.png";
import girasol from "@/assets/productos/granel/girasol.png";
import maiz from "@/assets/productos/granel/maiz.png";
import lino from "@/assets/productos/granel/lino.png";

// Fallback de imágenes por categoría
const imagesByCategory: Record<string, string> = {
  gallinas: gallina30kg ,
  granza: alpiste30kg ,
  aves: alpiste30kg ,
  semillas: mijo30kg ,
  arroz: premium ,
  otros: tradicional ,
};

const Productos = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");


  // Restore scroll position when coming back from product detail
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('productListScrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      sessionStorage.removeItem('productListScrollPosition');
    }
  }, []);

  // Save scroll position when navigating to product detail
  const handleProductClick = () => {
    sessionStorage.setItem('productListScrollPosition', window.scrollY.toString());
  };

  const categories = [
    { id: "todos", name: "Todos los Productos", icon: "🌾" },
    { id: "gran-campeon", name: "Gran Campeón", icon: "🏆" },
    { id: "balanceado", name: "Alimentos balanceados", icon: "🐖" },
    { id: "aves", name: "Aves Pequeñas", icon: "🐦" },
    { id: "semillas-cereales", name: "Semillas y cereales", icon: "🌱" },
    { id: "arroz", name: "Arroz", icon: "🍚" },
    { id: "otros", name: "Otros", icon: "" },
  ];

  const products = [
    
    // Arroz

    { id: "arroz-premium", categories: ["arroz", "gran-campeon"], name: "ARROZ PREMIUM", description: "Arroz premium marca Gran Campeón", weight: "15 kg",featured: true, image: premium },
    { id: "arroz-tradicional", categories: ["arroz", "gran-campeon"], name: "ARROZ TRADICIONAL", description: "Arroz tradicional marca Gran Campeón",weight: "15 kg", featured: true ,image: tradicional},
        
    { id: "fideos-cocktail", categories: ["otros", "gran-campeon"], name: "FIDEOS COCKTAIL 10 kg", description: "Fideos cocktail para distribución",weight: "10 kg", featured: true, image: fideos },

    // Arroz
    { id:"arroz-partido", category: "arroz", name: "ARROZ PARTIDO", description: "Arroz partido para uso industrial", weight: "30 kg", image: partido30kg},
    
    // Gallinas
    { id:"mezcla-gallina", category: "balanceado", name: "GALL. ESP", description: "Alimento especializado para gallinas ponedoras",weight: "24 kg | 40 kg", image: gallina30kg  },
    { id:"mezcla-gallina-ponedora", category: "balanceado", name: "GALL. C/PO", description: "Alimento para gallinas con postura",weight:"24 kg | 40 kg", image: gallina30kg },
    
    // Mezcla
    // { category: "mezcla", name: "MEZCLA p/CHANCHO", description: "Mezcla nutritiva especial para cerdos",weight: "30kg"  },
    
    // mezcla
    { id:"granza" ,category: "balanceado", name: "GRANZA", description: "Granza premium para alimentación animal",weight:"24 kg | 40 kg", image: quebradoGrueso30kg  },
    { id:"granzin" ,category: "balanceado", name: "GRANZIN", description: "Granza fina para aves pequeñas",weight:"24 kg | 40 kg", image: quebradoFino30kg },
    { id:"mezcla-hamster" ,category: "balanceado", name: "MEZCLA p/HAMSTER", description: "Mezcla nutritiva para hamsters",weight:"10kg", image: hamster },
    
    // Aves pequeñas
    { id:"mezcla-canario" ,category: "aves", name: "CANARIO c/Vit.", description: "Alimento vitaminado para canarios",weight:"10kg | 30kg", image: canario30kg },
    { id:"mezcla-cardenal" ,category: "aves", name: "CARDENAL x", description: "Alimento especializado para cardenales",weight:"10kg | 30kg", image: cardenal30kg },
    { id:"mezcla-pajaro" ,category: "aves", name: "PAJARO c/Vit", description: "Alimento vitaminado para pájaros",weight:"10kg | 30kg", image: alpiste30kg },
    
    // Semillas
    { id:"alpiste" ,category: "semillas-cereales", name: "ALPISTE", description: "Alpiste premium para aves",weight:"10kg | 30kg", image: alpiste30kg },
    { id:"mijo" ,category: "semillas-cereales", name: "MIJO", description: "Mijo de alta calidad",weight:"10kg | 30kg", image: mijo30kg },
    

    // Semillas y cereales
    { id:"maiz-pisingallo" ,category: "semillas-cereales", name: "MAIZ PISINGALLO", description: "Maíz pisingallo de primera calidad",weight:"25kg", image: maiz },
    { id:"colza" ,category: "semillas-cereales", name: "COLZA", description: "Semilla de colza premium",weight:"10kg", image: colza },
    { id:"lino" ,category: "semillas-cereales", name: "LINO", description: "Semilla de lino de alta calidad",weight:"10kg", image: lino  },
    { id:"avena-pelada" ,category: "semillas-cereales", name: "AVENA PELADA", description: "Avena pelada para alimentación",weight:"10kg", image: avena  },
    { id:"girasol-confitero" ,category: "semillas-cereales", name: "GIRASOL CONFITERO", description: "Semillas de girasol confitero",weight:"10kg", image: girasol  },
  ];

  const filteredProducts = products.filter(product => {
    const productCategories = product.categories || [product.category];
    const matchesCategory = selectedCategory === "todos" || productCategories.includes(selectedCategory);
    const matchesSearch = searchTerm === "" || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.icon || "📦";
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="relative py-12 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute inset-0 w-full h-full opacity-20 bg-cover bg-center"  
             style={{ backgroundImage: `url(${productosHero})` }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Amplio catálogo de productos agroalimenticios de alta calidad para diferentes necesidades
          </p>
        </div>
      </section>

      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          
          {/* Category Filter */}
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

          {/* Search Bar */}
          <div className="flex items-center mb-6 mt-10">
            <Search className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm font-medium text-muted-foreground mr-4">Buscar productos:</span>
            <div className="relative flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Buscar por nombre o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4"
              />
            </div>
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
              <Link
                key={index}
                to={`/productos/${product.id}`}
                onClick={() => {
                  handleProductClick(); // sin parámetros
                  window.scrollTo({ top: 0});
                }}
              >
              <Card id={product.id} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Imagen del producto */}
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg flex justify-center">
                    <img
                      src={product.image ?? imagesByCategory[product.category] ?? "/images/products/fallback.jpg"}
                      alt={product.name}
                      className="h-full w-auto"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.id === (product.categories ? product.categories[0] : product.category))?.name}
                    </Badge>
                    {product.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Más Vendido
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 min-h-[36px]">
                    {product.description}
                  </p>
                  
                  <div>
                    <p className="text-sm">Presentaciones: {product.weight}</p>
                  </div>

                  <div className="mt-5 flex align-bottom">
                  
                  <Button className="w-full">
                    Ver detalle
                  </Button>

                  </div>
                </CardContent>
              </Card>
              </Link>
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
