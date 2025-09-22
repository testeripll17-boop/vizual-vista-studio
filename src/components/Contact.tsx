import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@creativehub.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      description: "Seg-Sex, 8h às 18h"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(11) 99999-9999",
      description: "Atendimento imediato"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Atendimento online"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-blush/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua presença digital? Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium border-0">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-navy">Envie sua mensagem</CardTitle>
              <CardDescription>Conte-nos sobre seu projeto e retornaremos em breve</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço de interesse</Label>
                    <select className="w-full p-3 border border-input rounded-lg bg-background">
                      <option>Landing Page</option>
                      <option>Redes Sociais</option>
                      <option>Ambos</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Conte-nos sobre seu projeto, objetivos e prazo desejado..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Entre em contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-coral/10">
                        <Icon className="w-6 h-6 text-coral" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy">{info.title}</h4>
                        <p className="text-navy font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="p-6 gradient-secondary text-white border-0">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="font-semibold text-lg">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Segunda - Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> 9h às 14h</p>
                <p><strong>Domingo:</strong> Plantão WhatsApp</p>
              </div>
            </Card>

            <div className="bg-blush/50 p-6 rounded-lg">
              <h4 className="font-semibold text-navy mb-2">Resposta Rápida</h4>
              <p className="text-sm text-muted-foreground">
                Nos comprometemos a responder todos os contatos em até 2 horas durante o horário comercial. 
                Para urgências, use o WhatsApp!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;