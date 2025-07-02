
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SettingsModal } from "@/components/SettingsModal";
import { AuthModal } from "@/components/AuthModal";
import { DocumentationModal } from "@/components/DocumentationModal";
import { UserManagement } from "@/components/UserManagement";

interface HeaderProps {
  onIconChange: (toolId: string, newIcon: string) => void;
  onAddTool: (newTool: any) => void;
}

export const Header = ({ onIconChange, onAddTool }: HeaderProps) => {
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
            <DocumentationModal />
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
              Soporte
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <UserManagement />
            <SettingsModal onIconChange={onIconChange} onAddTool={onAddTool} />
            <AuthModal />
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
