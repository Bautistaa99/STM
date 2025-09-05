
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package, ArrowLeft, ShoppingCart, Scale } from "lucide-react";


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

const ProductDetail = () => {
  const { productSlug } = useParams();

  const navigate = useNavigate();

  const handleBackToProducts = () => {
    navigate('/productos');
  };
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
    //Otros
    {presentation:"Bolsa", id:"fideos-cocktail", category: "otros", name: "FIDEOS COCKTAIL", description: "Fideos cocktail para distribución",weight: "10 kg", featured: true, image: fideos },
    
    // Arroz
    {presentation:"Bolsa", id:"arroz-premium", category: "arroz", name: "ARROZ PREMIUM", description: "Arroz premium marca Gran Campeón",weight: "15 kg", featured: true, image: premium },
    {presentation:"Bolsa", id:"arroz-tradicional", category: "arroz", name: "ARROZ TRADICIONAL", description: "Arroz tradicional marca Gran Campeón",weight: "15 kg", featured: true, image: tradicional },
        
    // Arroz
    {presentation:"Bolsa", id:"arroz-partido", category: "arroz", name: "ARROZ PARTIDO", description: "Arroz partido para uso industrial", weight: "30 kg", image: partido30kg},
    
    // Gallinas
    // {presentation:"Bolsa", id:"mezcla-gallina", category: "gallinas", name: "GALL. ESP", description: "Alimento especializado para gallinas ponedoras",weight: "24 kg | 40 kg", image: gallina30kg  },
    // {presentation:"Bolsa", id:"mezcla-gallina-ponedora", category: "gallinas", name: "GALL. C/PO", description: "Alimento para gallinas con postura",weight:"24 kg | 40 kg" },
        {presentation:"Bolsa", id:"mezcla-gallina-ponedora", category: "gallinas", name: "Mezcla Gallina", description: "Alimento para gallinas con postura",weight:"24 kg | 40 kg" },
    
    // Mezcla
    // {presentation:"bolsa", category: "mezcla", name: "MEZCLA p/CHANCHO", description: "Mezcla nutritiva especial para cerdos",weight: "30kg"  },
    
    // Granza
    {presentation:"Bolsa", id:"granza" ,category: "granza", name: "GRANZA", description: "Granza premium para alimentación animal",weight:"24 kg | 40 kg", image: quebradoFino30kg  },
    {presentation:"Bolsa", id:"granzin" ,category: "granza", name: "GRANZIN", description: "Granza fina para aves pequeñas",weight:"24 kg | 40 kg", image: quebradoGrueso30kg },
    
    // Aves pequeñas
    {presentation:"Bolsa", id:"mezcla-canario" ,category: "aves", name: "CANARIO c/Vit.", description: "Alimento vitaminado para canarios",weight:"10kg | 30kg", image: canario30kg },
    {presentation:"Bolsa", id:"mezcla-cardenal" ,category: "aves", name: "CARDENAL x", description: "Alimento especializado para cardenales",weight:"10kg | 30kg", image: cardenal30kg },
    {presentation:"Bolsa", id:"mezcla-pajaro" ,category: "aves", name: "PAJARO c/Vit", description: "Alimento vitaminado para pájaros",weight:"10kg | 30kg", image: alpiste30kg },
    
    // Semillas
    {presentation:"Bolsa", id:"alpiste" ,category: "semillas", name: "ALPISTE", description: "Alpiste premium para aves",weight:"10kg | 30kg", image: alpiste30kg },
    {presentation:"Bolsa", id:"mijo" ,category: "semillas", name: "MIJO", description: "Mijo de alta calidad",weight:"10kg | 30kg" },
    

    // Otros
    {presentation:"Bolsa", id:"mezcla-hamster" ,category: "otros", name: "MEZCLA p/HAMSTER", description: "Mezcla nutritiva para hamsters",weight:"10kg", image: hamster },
    {presentation:"Bolsa", id:"maiz-pisingallo" ,category: "otros", name: "MAIZ PISINGALLO", description: "Maíz pisingallo de primera calidad",weight:"25kg", image: maiz },
    {presentation:"Bolsa", id:"colza" ,category: "otros", name: "COLZA", description: "Semilla de colza premium",weight:"10kg", image: colza },
    {presentation:"Bolsa", id:"lino" ,category: "otros", name: "LINO", description: "Semilla de lino de alta calidad",weight:"10kg", image: lino  },
    {presentation:"Bolsa", id:"avena-pelada" ,category: "otros", name: "AVENA PELADA", description: "Avena pelada para alimentación",weight:"10kg", image: avena  },
    {presentation:"Bolsa", id:"girasol-confitero" ,category: "otros", name: "GIRASOL CONFITERO", description: "Semillas de girasol confitero",weight:"10kg", image: girasol  },
  ];

  const product = products.find(p => p.id === productSlug);

  if (!product) {
    return <Navigate to="/productos" replace />;
  }

  const categoryInfo = categories.find(cat => cat.id === product.category);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="relative py-8 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBackToProducts}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors cursor-pointer"
          >
  <ArrowLeft className="h-4 w-4 mr-2" />
  Volver a productos
          </button>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="text-sm">
              <span className="mr-2">{categoryInfo?.icon}</span>
              {categoryInfo?.name}
            </Badge>
            {product.featured && (
              <Badge variant="secondary" className="text-sm">
                Más Vendido
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {product.name}
          </h1>
        </div>
      </section>

      {/* Product Detail Content */}
      <section className=" py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            {/* Product Image */}
            <div>
              <Card>
                <CardContent className="p-8">
                  {/* Imagen del producto */}
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg flex justify-center">
                    <img
                      src={product.image ?? imagesByCategory[product.category] ?? "/images/products/fallback.jpg"}
                      alt={product.name}
                      className="h-full w-auto"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex flex-col space-y-6">
                <div  className="order-2 lg:order-1 mt-5">
                  <h2 className="text-xl font-semibold text-foreground mb-3">Descripción</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 order-3 lg:order-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Scale className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">Peso</span>
                      </div>
                      <p className="font-semibold text-foreground">{product.weight}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">Presentación</span>
                      </div>
                      <p className="font-semibold text-foreground">{product.presentation}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="border-t pt-6 order-1 lg:order-3">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    ¿Interesado en este producto?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Contactanos para consultar precio, disponibilidad y condiciones especiales
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <a href="https://wa.me/5491141746937?text=Hola,%20queria%20solicitar%20una%20cotizacion!">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Solicitar Cotización
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-accent/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Productos Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                
                <Link to={`/productos/${relatedProduct.id}`} onClick={() => window.scrollTo({ top: 0})}>
                <Card key={relatedProduct.id} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    {/* Imagen del producto */}
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg flex justify-center">
                    <img
                      src={relatedProduct.image ?? imagesByCategory[product.category] ?? "/images/products/fallback.jpg"}
                      alt={relatedProduct.name}
                      className="h-full w-auto"
                      loading="lazy"
                    />
                  </div>
                    
                    <Badge variant="outline" className="text-xs mb-3">
                      {categories.find(cat => cat.id === relatedProduct.category)?.name}
                    </Badge>
                    
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedProduct.description}
                    </p>
                    
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={`/productos/${relatedProduct.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                        Ver Detalle
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                </Link>

              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;