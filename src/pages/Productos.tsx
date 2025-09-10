import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package, Filter, Search } from "lucide-react";
import productosHero from "@/assets/productos-hero.webp";

// imágenes
import alpiste30kg from "@/assets/productos/alpiste30kg.webp";
import canario30kg from "@/assets/productos/canario30kg.webp";
import cardenal30kg from "@/assets/productos/cardenal30kg.webp";
import gallina30kg from "@/assets/productos/gallina30kg.webp";
import hamster from "@/assets/productos/hamster30kg.webp";
import mijo30kg from "@/assets/productos/mijo30kg.webp";
import chancho30kg from "@/assets/productos/chancho30kg.webp";
import partido30kg from "@/assets/productos/partido30kg.webp";
import quebradoFino30kg from "@/assets/productos/quebradoFino30kg.webp";
import quebradoGrueso30kg from "@/assets/productos/quebradoGrueso30kg.webp";
import fideos from "@/assets/productos/cocktail.webp";
import tradicional from "@/assets/productos/tradicional.webp";
import premium from "@/assets/productos/premium.webp";
import avena from "@/assets/productos/granel/avena.webp";
import colza from "@/assets/productos/granel/colza.webp";
import girasol from "@/assets/productos/granel/girasol.webp";
import maiz from "@/assets/productos/granel/maiz.webp";
import lino from "@/assets/productos/granel/lino.webp";

// Fallback por categoría
const imagesByCategory: Record<string, string> = {
  gallinas: gallina30kg,
  granza: alpiste30kg,
  aves: alpiste30kg,
  "semillas-cereales": mijo30kg,
  arroz: premium,
  otros: tradicional,
};

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(24); // 🔧 paginado incremental

  // Restore scroll al volver del detalle
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("productListScrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      sessionStorage.removeItem("productListScrollPosition");
    }
  }, []);

  const handleProductClick = () => {
    sessionStorage.setItem("productListScrollPosition", window.scrollY.toString());
  };

  const categories = [
    { id: "todos", name: "Todos los Productos", icon: "🌾" },
    { id: "gran-campeon", name: "Gran Campeón", icon: "🏆" },
    { id: "balanceado", name: "Alimento balanceado", icon: "🐖" },
    { id: "aves", name: "Aves Pequeñas", icon: "🐦" },
    { id: "semillas-cereales", name: "Semillas y cereales", icon: "🌱" },
    { id: "arroz", name: "Arroz", icon: "🍚" },
    { id: "otros", name: "Otros", icon: "" },
  ];

  const products = [
    // Arroz
    { id: "arroz-premium", categories: ["arroz", "gran-campeon"], name: "Arroz Saborizado Premium", description: "Arroz saborizado para perros calidad Premium Gran Campeón", weight: "15 kg", featured: true, image: premium },
    { id: "arroz-tradicional", categories: ["arroz", "gran-campeon"], name: "Arroz Saborizado Tradicional", description: "Arroz saborizado para perros calidad Tradicional Gran Campeón", weight: "15 kg", featured: true, image: tradicional },
    { id: "fideos-cocktail", categories: ["otros", "gran-campeon"], name: "Fideos Cocktail", description: "Fideos saborizados para perros marca Gran Campeón", weight: "10 kg", featured: true, image: fideos },
    { id: "mezcla-gallina", category: "balanceado", name: "Mezcla para Gallinas", description: "Alimento balanceado para gallinas", weight: "24 kg | 40 kg", image: gallina30kg, featured: true },
    { id: "mezcla-chancho", category: "balanceado", name: "Mezcla para Chanchos", description: "Farineta / harina de maíz balanceada para nutrición", weight: "30 kg", image: chancho30kg },

    // Arroz
    { id: "arroz-partido", category: "arroz", name: "Arroz Partido", description: "Arroz partido para uso industrial", weight: "30 kg", image: partido30kg },

    // Balanceado
    { id: "granza", category: "balanceado", name: "Granza", description: "Maíz pisado grueso", weight: "24 kg | 40 kg", image: quebradoGrueso30kg },
    { id: "granzin", category: "balanceado", name: "Granzín", description: "Maíz pisado fino", weight: "24 kg | 40 kg", image: quebradoFino30kg },
    { id: "mezcla-hamster", category: "balanceado", name: "Mezcla para Hámsters", description: "Mezcla nutritiva para hámsters", weight: "10 kg", image: hamster },

    // Aves pequeñas
    { id: "mezcla-canario", category: "aves", name: "Mezcla para Canarios", description: "Alimento vitaminado para canarios", weight: "10 kg | 30 kg", image: canario30kg },
    { id: "mezcla-cardenal", category: "aves", name: "Mezcla para Cardenales", description: "Alimento especializado para cardenales", weight: "10 kg | 30 kg", image: cardenal30kg },
    { id: "mezcla-pajaro", category: "aves", name: "Mezcla para Pájaros", description: "Alimento vitaminado para pájaros", weight: "10 kg | 30 kg", image: alpiste30kg },

    // Semillas y cereales
    { id: "alpiste", category: "semillas-cereales", name: "Alpiste", description: "Alpiste premium para aves", weight: "10 kg | 30 kg", image: alpiste30kg },
    { id: "mijo", category: "semillas-cereales", name: "Mijo", description: "Mijo de alta calidad", weight: "10 kg | 30 kg", image: mijo30kg },
    { id: "avena-pelada", category: "semillas-cereales", name: "Avena Pelada", description: "Avena pelada para alimentación", weight: "10 kg", image: avena },
    { id: "girasol-confitero", category: "semillas-cereales", name: "Girasol Confitero", description: "Semillas de girasol confitero", weight: "10 kg", image: girasol },
    { id: "maiz-pisingallo", category: "semillas-cereales", name: "Maíz Pisingallo", description: "Maíz pisingallo de primera calidad", weight: "25 kg", image: maiz },
    { id: "colza", category: "semillas-cereales", name: "Colza", description: "Semilla de colza premium", weight: "10 kg", image: colza },
    { id: "lino", category: "semillas-cereales", name: "Lino", description: "Semilla de lino de alta calidad", weight: "10 kg", image: lino },

  ];

const filteredProducts = products.filter(product => { const productCategories = product.categories || [product.category]; const matchesCategory = selectedCategory === "todos" || productCategories.includes(selectedCategory); const matchesSearch = searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()); return matchesCategory && matchesSearch; });

  // Reset “visible” al cambiar filtros
  useEffect(() => {
    setVisible(24);
  }, [selectedCategory, searchTerm]);

  const getCategoryIcon = (categoryId: string) =>
    categories.find((cat) => cat.id === categoryId)?.icon || "📦";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero más compacto en mobile */}
      <section className="relative py-8 md:py-12 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-background/60"></div>
        <div
          className="absolute inset-0 w-full h-full opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${productosHero})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-2 md:mb-4">Nuestros Productos</h1>
          <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto">
            Amplio catálogo de productos agroalimenticios de alta calidad para diferentes necesidades
          </p>
        </div>
      </section>

      {/* Filtros sticky */}
      <section className="sticky top-16 z-40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Categorías */}
          <div className="flex items-center mb-2 ">
            <Filter className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm font-medium text-muted-foreground">Filtrar por categoría:</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="shrink-0 rounded-full px-3 h-8 text-xs"
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Búsqueda */}
          <div className="flex items-center mt-3">
            <Search className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm font-medium text-muted-foreground mr-3">Buscar:</span>
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Nombre o descripción…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              {selectedCategory === "todos"
                ? `Todos los Productos (${filteredProducts.length})`
                : `${categories.find((cat) => cat.id === selectedCategory)?.name} (${filteredProducts.length})`}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">Productos de calidad para consumidores y distribuidores</p>
          </div>

          {/* 🔧 grid compacto en mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {filteredProducts.slice(0, visible).map((product) => {
              const firstCat = (product).categories ? (product).categories[0] : product.category;
              const badgeText = categories.find((c) => c.id === firstCat)?.name ?? "Producto";

              return (
                <Link
                  key={product.id}
                  to={`/productos/${product.id}`}
                  onClick={() => {
                    handleProductClick();
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <Card id={product.id} className="hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 h-full">
                    <CardContent className="p-3 sm:p-4">
                      <div className="mb-2 rounded-md overflow-hidden bg-muted/10 flex flex-col h-full border">
                        <img
                          src={product.image ?? imagesByCategory[product.category] ?? "/images/products/fallback.jpg"}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          width={600}
                          height={750}
                          className="w-full aspect-[4/5] object-contain"
                        />
                      </div>

                      <div className="flex items-center justify-between mb-1 h-12 gap-3 xs:gap-0">
                        <Badge variant="outline" className="text-[10px] sm:text-xs" >
                          {badgeText}
                        </Badge>
                        {product.featured && (
                          <Badge variant="secondary" className="text-[10px] sm:text-xs font-bold min-w-[40%]">Más Vendido</Badge>
                        )}
                      </div>

                      <h3 className="font-semibold text-sm sm:text-base leading-tight line-clamp-2 sm:min-h-12 xl:min-h-6">
                        {product.name}
                      </h3>

                      {/* Descripción oculta en XS para compactar */}
                      <p className="hidden sm:block text-sm text-muted-foreground mt-1 line-clamp-2 min-h-10 sm:min-h-16 xl:min-h-10">
                        {product.description}
                      </p>

                      <p className="text-xs sm:text-sm mt-2">Presentaciones: {product.weight}</p>

                      {/* Botón más chico en mobile */}
                      <div className="mt-3">
                        <Button className="w-full h-9 text-sm">Ver detalle</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Botón Cargar más */}
          {visible < filteredProducts.length && (
            <div className="flex justify-center mt-6">
              <Button variant="outline" onClick={() => setVisible((v) => v + 24)}>
                Cargar más
              </Button>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">No se encontraron productos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en algún producto?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactanos para consultar precios, disponibilidad y condiciones especiales para mayoristas
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="/contacto">Solicitar Información</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Productos;
