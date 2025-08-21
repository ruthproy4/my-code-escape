import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">T</span>
          </div>
          <span className="text-xl font-bold text-foreground">TalentUp</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Desarrolladores
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Empresas
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre nosotros
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Iniciar Sesión
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Registrarse
          </Button>
        </div>
      </div>
    </header>
  );
};