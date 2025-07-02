import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, Brain } from "lucide-react";
import { DocumentationModal } from "@/components/DocumentationModal";
import { SettingsModal } from "@/components/SettingsModal";

interface HeaderProps {
  onIconChange: (toolId: string, newIcon: string) => void;
  onAddTool: (newTool: any) => void;
}

export const Header = ({ onIconChange, onAddTool }: HeaderProps) => {
  const [showDocumentation, setShowDocumentation] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Plataforma Prospectiva</h1>
              <p className="text-sm text-slate-600">Suite de Herramientas Estratégicas</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDocumentation(true)}
            >
              <HelpCircle className="w-4 h-4" />
            </Button>

            <div data-settings-button>
              <SettingsModal onIconChange={onIconChange} onAddTool={onAddTool} />
            </div>
          </div>
        </div>
      </div>

      <DocumentationModal
        open={showDocumentation}
        onOpenChange={setShowDocumentation}
      />
    </header>
  );
};
