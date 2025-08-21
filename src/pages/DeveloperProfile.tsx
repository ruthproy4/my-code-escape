import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const DeveloperProfile = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Perfil de Desarrollador</h1>
          <Button onClick={handleSignOut} variant="outline">
            Cerrar Sesión
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>¡Bienvenido, Desarrollador!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Aquí podrás completar tu perfil profesional próximamente.</p>
            <p className="mt-4 text-muted-foreground">
              Esta página estará disponible para configurar tu información personal,
              subir tu CV, agregar enlaces de GitHub y LinkedIn, y seleccionar tus habilidades.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeveloperProfile;