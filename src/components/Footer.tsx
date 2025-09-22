import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-hero rounded-lg"></div>
              <span className="text-xl font-bold">CreativeHub</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformamos ideias em resultados digitais. Landing pages e conteúdo para redes sociais que realmente convertem.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#servicos" className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Redes Sociais</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Identidade Visual</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Estratégia Digital</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreira</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Receba dicas exclusivas de marketing digital e novidades do mercado.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Seu melhor email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="hero" className="w-full">
                Inscrever-se
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-coral" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="font-medium">contato@creativehub.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-sage" />
              <div>
                <p className="text-sm text-gray-300">Telefone</p>
                <p className="font-medium">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-peach" />
              <div>
                <p className="text-sm text-gray-300">Localização</p>
                <p className="font-medium">São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © 2024 CreativeHub. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;