import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essencial",
      icon: Zap,
      price: "R$ 497",
      period: "por projeto",
      description: "Perfeito para pequenos negócios",
      features: [
        "1 Landing Page responsiva",
        "Design profissional",
        "Otimização SEO básica",
        "Formulário de contato",
        "2 revisões incluídas",
        "Entrega em 7 dias"
      ],
      popular: false,
      color: "sage"
    },
    {
      name: "Profissional",
      icon: Crown,
      price: "R$ 897",
      period: "por projeto", 
      description: "Ideal para empresas em crescimento",
      features: [
        "1 Landing Page + 10 posts",
        "Design premium customizado",
        "Otimização SEO avançada",
        "Integração com analytics",
        "A/B Testing setup",
        "5 revisões incluídas",
        "Entrega em 5 dias",
        "Suporte 30 dias"
      ],
      popular: true,
      color: "coral"
    },
    {
      name: "Premium",
      icon: Rocket,
      price: "R$ 1.497",
      period: "por projeto",
      description: "Solução completa para grandes empresas",
      features: [
        "Landing Page + 20 posts + Stories",
        "Design exclusivo e identidade visual",
        "SEO completo + Performance",
        "Integrações avançadas",
        "Estratégia digital completa",
        "Revisões ilimitadas",
        "Entrega em 3 dias",
        "Suporte 60 dias",
        "Consultoria estratégica"
      ],
      popular: false,
      color: "navy"
    }
  ];

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Planos e Preços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos incluem garantia de satisfação
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative p-6 ${plan.popular ? 'ring-2 ring-coral shadow-strong scale-105' : 'shadow-medium'} hover:shadow-strong transition-all duration-300 border-0`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-coral text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 mx-auto ${
                    plan.color === 'coral' ? 'bg-coral/10' : 
                    plan.color === 'sage' ? 'bg-sage/10' : 
                    'bg-navy/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      plan.color === 'coral' ? 'text-coral' : 
                      plan.color === 'sage' ? 'text-sage' : 
                      'text-navy'
                    }`} />
                  </div>
                  <CardTitle className="text-2xl text-navy">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-navy">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${
                          plan.color === 'coral' ? 'text-coral' : 
                          plan.color === 'sage' ? 'text-sage' : 
                          'text-navy'
                        }`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? 'hero' : plan.color === 'sage' ? 'sage' : 'navy'} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.popular ? 'Começar Agora' : 'Escolher Plano'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            Precisa de algo personalizado? 
            <a href="#contato" className="text-coral hover:text-coral/80 font-medium ml-1">
              Entre em contato
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-sage" />
              Garantia de satisfação
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-sage" />
              Suporte especializado
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-sage" />
              Resultados comprovados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;