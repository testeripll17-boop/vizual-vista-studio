import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-hero rounded-lg"></div>
            <span className="text-xl font-bold text-navy">CreativeHub</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-navy hover:text-primary transition-colors">Serviços</a>
            <a href="#portfolio" className="text-navy hover:text-primary transition-colors">Portfolio</a>
            <a href="#depoimentos" className="text-navy hover:text-primary transition-colors">Depoimentos</a>
            <a href="#precos" className="text-navy hover:text-primary transition-colors">Preços</a>
            <a href="#contato" className="text-navy hover:text-primary transition-colors">Contato</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button variant="hero">Começar Agora</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#servicos" className="text-navy hover:text-primary transition-colors">Serviços</a>
              <a href="#portfolio" className="text-navy hover:text-primary transition-colors">Portfolio</a>
              <a href="#depoimentos" className="text-navy hover:text-primary transition-colors">Depoimentos</a>
              <a href="#precos" className="text-navy hover:text-primary transition-colors">Preços</a>
              <a href="#contato" className="text-navy hover:text-primary transition-colors">Contato</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Login</Button>
                <Button variant="hero">Começar Agora</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;