import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    console.log("[HealthCheck] Index mounted");
    document.title = "TalentUp | Inicio";
    toast({
      title: "Proyecto cargado",
      description: "La app se está renderizando correctamente.",
    });
  }, [toast]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background">
      <section className="text-center p-8 max-w-4xl mx-auto border border-primary/30 rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Bienvenido a TalentUp</h1>
        <p className="text-xl text-muted-foreground">Tu proyecto está activo.</p>
      </section>
    </main>
  );
};

export default Index;
