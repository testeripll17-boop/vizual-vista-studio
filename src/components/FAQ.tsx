import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para criar uma landing page?",
      answer: "O prazo varia conforme o plano escolhido: Essencial (7 dias), Profissional (5 dias), Premium (3 dias). Projetos mais complexos podem levar um pouco mais, mas sempre cumprimos os prazos acordados."
    },
    {
      question: "Vocês criam conteúdo para todas as redes sociais?",
      answer: "Sim! Criamos conteúdo para Instagram, Facebook, LinkedIn, Twitter, TikTok e outras plataformas. Cada post é adaptado às especificações e público de cada rede social."
    },
    {
      question: "A landing page será responsiva?",
      answer: "Absolutamente! Todas as nossas landing pages são responsivas e otimizadas para desktop, tablet e mobile. Testamos em diferentes dispositivos para garantir a melhor experiência."
    },
    {
      question: "Vocês fazem alterações após a entrega?",
      answer: "Sim! Cada plano inclui um número específico de revisões. Também oferecemos suporte pós-entrega e podemos fazer ajustes adicionais mediante acordo."
    },
    {
      question: "Como funciona o processo de criação?",
      answer: "1) Briefing detalhado, 2) Proposta e cronograma, 3) Criação do design, 4) Revisões, 5) Entrega final. Mantemos comunicação constante durante todo o processo."
    },
    {
      question: "Vocês oferecem garantia?",
      answer: "Sim! Oferecemos garantia de satisfação. Se não ficar 100% satisfeito com o resultado, refazemos o trabalho ou devolvemos seu investimento."
    },
    {
      question: "Posso solicitar um orçamento personalizado?",
      answer: "Claro! Além dos planos padrão, criamos propostas personalizadas para projetos específicos. Entre em contato para conversarmos sobre suas necessidades."
    },
    {
      question: "Vocês trabalham com que tipo de empresas?",
      answer: "Atendemos desde pequenos empreendedores até grandes corporações, em diversos segmentos: e-commerce, serviços, consultoria, saúde, educação, tecnologia e muito mais."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blush/50 text-peach px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-4xl font-bold text-navy mb-4">
            Perguntas e Respostas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:text-coral transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 text-coral hover:text-coral/80 font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;