import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DeveloperProfile from "./pages/DeveloperProfile";
import CompanyProfile from "./pages/CompanyProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Cargando...</div>
      </div>
    );
  }

  // Si el usuario está logueado, redirigir según su rol
  if (user && profile) {
    return (
      <Routes>
        <Route 
          path="/" 
          element={
            <Navigate 
              to={profile.role === 'developer' ? '/profile/developer' : '/profile/company'} 
              replace 
            />
          } 
        />
        <Route 
          path="/profile/developer" 
          element={
            <ProtectedRoute requireRole="developer">
              <DeveloperProfile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile/company" 
          element={
            <ProtectedRoute requireRole="company">
              <CompanyProfile />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/register" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  // Si el usuario no está logueado
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
