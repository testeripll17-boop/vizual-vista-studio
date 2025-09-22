import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, TrendingUp, Palette, Code, BarChart3 } from "lucide-react";
import landingPageExample from "@/assets/landing-page-example.jpg";
import socialMediaExample from "@/assets/social-media-example.jpg";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Landing Pages Profissionais",
      description: "Pages otimizadas para conversão com design responsivo e carregamento rápido",
      features: ["Design responsivo", "Otimização SEO", "Integração com analytics", "A/B Testing"],
      color: "coral",
      image: landingPageExample
    },
    {
      icon: Smartphone,
      title: "Conteúdo para Redes Sociais",
      description: "Posts, stories e campanhas que engajam e convertem nas principais plataformas",
      features: ["Posts para Instagram", "Stories interativos", "Campanhas no Facebook", "LinkedIn profissional"],
      color: "sage",
      image: socialMediaExample
    }
  ];

  const additionalServices = [
    {
      icon: TrendingUp,
      title: "Estratégia Digital",
      description: "Planejamento completo da sua presença digital"
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      description: "Criação de logos e materiais de marca"
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Sites completos e sistemas personalizados"
    },
    {
      icon: BarChart3,
      title: "Analytics & Relatórios",
      description: "Acompanhamento detalhado de resultados"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em marketing digital para impulsionar seus resultados
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 border-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${service.color === 'coral' ? 'bg-coral/10' : 'bg-sage/10'}`}>
                      <Icon className={`w-6 h-6 ${service.color === 'coral' ? 'text-coral' : 'text-sage'}`} />
                    </div>
                    <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full ${service.color === 'coral' ? 'bg-coral' : 'bg-sage'}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={service.color === 'coral' ? 'default' : 'sage'} 
                    className="w-full"
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-2xl font-bold text-navy text-center mb-8">
            Outros Serviços
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blush/50 mb-4">
                    <Icon className="w-6 h-6 text-peach" />
                  </div>
                  <h4 className="font-semibold text-navy mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;