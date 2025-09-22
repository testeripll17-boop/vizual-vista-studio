import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, Loja Bella",
      content: "A landing page criada pela equipe aumentou nossas vendas em 150% no primeiro mês. O design é impecável e a conversão surpreendente!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Marketing, Tech Solutions", 
      content: "O conteúdo para redes sociais transformou nossa presença digital. Nosso engajamento triplicou e conseguimos muito mais leads qualificados.",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Fundadora, Beauty Care",
      content: "Profissionais excepcionais! Entregaram tudo no prazo e com qualidade superior. Recomendo para qualquer empresa que queira resultados reais.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor, Consultoria Pro",
      content: "A estratégia digital desenvolvida foi certeira. Aumentamos 200% o tráfego orgânico e convertemos muito mais visitantes em clientes.",
      rating: 5,
      avatar: "CO"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-blush/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 500 empresas confiam em nós para seus projetos digitais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative p-6 shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-coral/20" />
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-coral text-coral" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-6 py-3 rounded-full">
            <Star className="w-5 h-5" />
            <span className="font-semibold">4.9/5 estrelas</span>
            <span className="text-muted-foreground">• 500+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;