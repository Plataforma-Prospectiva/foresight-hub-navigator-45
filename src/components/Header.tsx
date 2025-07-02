
import { Menu, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Plataforma Prospectiva
              </h2>
              <p className="text-sm text-slate-500">Herramientas Estratégicas</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
              Herramientas
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
              Documentación
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
              Soporte
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
