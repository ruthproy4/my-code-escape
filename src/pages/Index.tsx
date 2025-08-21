import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-foreground">TalentUp</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Conectamos talento con oportunidades
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/login">Iniciar Sesión</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/register">Registrarse</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
