
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, Brain, Languages } from "lucide-react";
import { DocumentationModal } from "@/components/DocumentationModal";
import { SettingsModal } from "@/components/SettingsModal";
import { AuthModal } from "@/components/AuthModal";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  onIconChange: (toolId: string, newIcon: string) => void;
  onAddTool: (newTool: any) => void;
}

export const Header = ({ onIconChange, onAddTool }: HeaderProps) => {
  const [showDocumentation, setShowDocumentation] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">{t('header.title')}</h1>
              <p className="text-sm text-slate-600">{t('header.subtitle')}</p>
            </div>
          </div>

           <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              title={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            >
              <Languages className="w-4 h-4" />
              <span className="ml-2 text-sm">{language === 'en' ? 'ES' : 'EN'}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDocumentation(true)}
            >
              <HelpCircle className="w-4 h-4" />
            </Button>

            <AuthModal />

            <div data-settings-button>
              <SettingsModal onIconChange={onIconChange} onAddTool={onAddTool} />
            </div>
          </div>
        </div>
      </div>

      {showDocumentation && (
        <DocumentationModal />
      )}
    </header>
  );
};
