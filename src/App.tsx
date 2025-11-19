import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SupabaseAuthProvider } from "@/context/SupabaseAuthContext";
import { AuthProvider } from "@/context/AuthContext";
import { useAccessLogger } from "@/hooks/useAccessLogger";
import { DatabaseTechniquesManager } from "@/components/DatabaseTechniquesManager";
import { AdminGuard } from "@/components/AdminGuard";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import { HelpPage } from "./pages/HelpPage";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient();

const AppContent = () => {
  useAccessLogger();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/admin/users" element={<AdminGuard><AdminPanel /></AdminGuard>} />
        <Route path="/admin/techniques" element={<AdminGuard><DatabaseTechniquesManager /></AdminGuard>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SupabaseAuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </SupabaseAuthProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
