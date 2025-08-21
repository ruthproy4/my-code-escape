import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const CompanyProfile = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Perfil de Empresa</h1>
          <Button onClick={handleSignOut} variant="outline">
            Cerrar Sesión
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>¡Bienvenida, Empresa!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Aquí podrás completar el perfil de tu empresa próximamente.</p>
            <p className="mt-4 text-muted-foreground">
              Esta página estará disponible para configurar la información de tu empresa,
              subir el logo, agregar descripción y seleccionar el sector.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyProfile;