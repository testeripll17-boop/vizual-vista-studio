import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-background to-blush/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                Mais de 500 projetos entregues
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                Landing Pages que
                <span className="gradient-hero bg-clip-text text-transparent"> Convertem</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Criamos landing pages de alta conversão e conteúdo para redes sociais que engajam e vendem. 
                Transforme visitantes em clientes com design profissional.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Começar Meu Projeto
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver Portfolio
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-coral" />
                <span className="text-sm text-muted-foreground">
                  <strong className="text-navy">500+</strong> clientes satisfeitos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-peach" />
                <span className="text-sm text-muted-foreground">
                  <strong className="text-navy">48h</strong> entrega média
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Design profissional de landing pages e mídias sociais"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full gradient-secondary rounded-2xl opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-full h-full gradient-accent rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;