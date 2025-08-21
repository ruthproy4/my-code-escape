import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="w-full px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-8">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Plataforma de conexión profesional</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
          Conecta{" "}
          <span className="text-primary">talento</span>{" "}
          con{" "}
          <span className="text-primary">oportunidades</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          TalentUp es la plataforma donde desarrolladores excepcionales se 
          encuentran con empresas innovadoras. Construye tu futuro profesional 
          aquí.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            Comenzar Gratis
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Explorar Talento
          </Button>
        </div>
      </div>
    </section>
  );
};