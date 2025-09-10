import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import contactoHero from "@/assets/contacto-hero.webp";

// EmailJS Configuration - Replace VITE_EMAILJS_PUBLIC_KEY with your actual public key
const EMAILJS_SERVICE_ID = "service_cvii9k7";
const EMAILJS_TEMPLATE_ID = "template_t3nzz5t";
const EMAILJS_PUBLIC_KEY = "sR8BuHVKrNYNZ99F4";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
mensaje: "",
    website: "" // Honeypot field
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot - if filled, it's likely spam
    if (formData.website) {
      return;
    }
    
    setIsSending(true);
    
    try {
      const templateParams = {
        name: formData.nombre,
        email: formData.email,
        phone: formData.telefono,
        company: formData.empresa,
        message: formData.mensaje,
        title: "Nuevo contacto desde stm.com.ar",
        from_name: formData.nombre,
        email_id: formData.email,
        to_email: "bautistavarela@carogran.com.ar"
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensaje enviado exitosamente",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });

      // Limpiar formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
        website: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error al enviar mensaje",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappNumber = "5491141746937"; // Número de ejemplo
  const whatsappMessage = "Hola! Me interesa conocer más sobre los productos de STM.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="relative py-12 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute inset-0 w-full h-full opacity-20 bg-cover bg-center" 
             style={{ backgroundImage: `url(${contactoHero})` }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contacto
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contactanos para consultas, presupuestos o más información
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            



                        <div className="space-y-6">
              
              {/* WhatsApp Contact */}
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row md:flex-row  items-start lg:space-x-4 md:space-x-4 ">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mb-2 ">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                      <p className="text-muted-foreground mb-4">
                        ¿Necesitás una respuesta rápida? Escríbenos por WhatsApp
                      </p>
                      <Button asChild className="bg-green-600 hover:bg-green-700">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Escribir por WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <a href="https://maps.app.goo.gl/V3XSnej3KfpXXrmH6" target="_blank">

                      <h3 className="font-semibold mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Álvarez, Santa Fe<br />
                        (Al lado de Rosario)
                      </p>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <a href="tel:5491141746937" target="_blank">
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">
                        +54 9 11 4174-6937
                      </p>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <a href="mailto:plantaalvarez@grupogem.com.ar" target="_blank">
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        plantaalvarez@grupogem.com.ar
                      </p>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horarios de Atención</h3>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 8:00 - 16:00<br />
                        Sábados: 8:00 - 12:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Información Adicional</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Consultas sin compromiso</li>
                    <li>• Precios especiales para mayoristas</li>
                    <li>• Entrega en la zona de Rosario</li>
                    <li>• Asesoramiento personalizado</li>
                    <li>• Disponibilidad de productos en stock</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5 text-primary" />
                    <span>Envíanos un mensaje</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com (opcional)"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+54 9 11 1234-5678"
                        />
                      </div>
                      <div>
                        <Label htmlFor="empresa">Empresa/Comercio</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          type="text"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa (opcional)"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Contanos qué productos te interesan o qué información necesitás..."
                        rows={5}
                      />
                    </div>

                   {/* Honeypot field - hidden from users */}
                    <div style={{ display: 'none' }}>
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        name="website"
                        type="text"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSending}>
                      {isSending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;