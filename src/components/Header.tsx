
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, Brain, Languages, Activity, Database } from "lucide-react";
import { DocumentationModal } from "@/components/DocumentationModal";
import { SettingsModal } from "@/components/SettingsModal";
import { BetaCommentsModal } from "@/components/BetaCommentsModal";
import { AccessLogsViewer } from "@/components/AccessLogsViewer";
import { SupabaseAuthModal } from "@/components/SupabaseAuthModal";
import { useLanguage } from "@/context/LanguageContext";
import { useSupabaseAuth } from "@/context/SupabaseAuthContext";
import { seedTechniquesToDatabase } from "@/utils/techniqueSeeder";
import { toast } from "sonner";

interface HeaderProps {
  onIconChange: (toolId: string, newIcon: string) => void;
  onAddTool: (newTool: any) => void;
}

export const Header = ({ onIconChange, onAddTool }: HeaderProps) => {
  const [showDocumentation, setShowDocumentation] = useState(false);
  const [isMigrating, setIsMigrating] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { user } = useSupabaseAuth();

  const handleMigrateTechniques = async () => {
    if (!user) {
      toast.error("Debes estar autenticado para realizar esta acción");
      return;
    }

    setIsMigrating(true);
    try {
      const result = await seedTechniquesToDatabase();
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Error inesperado al migrar técnicas");
    } finally {
      setIsMigrating(false);
    }
  };

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

              <BetaCommentsModal />

              <AccessLogsViewer />

              {user && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleMigrateTechniques}
                  disabled={isMigrating}
                  title="Migrar técnicas a la base de datos"
                >
                  <Database className="w-4 h-4" />
                  {isMigrating && <span className="ml-2 text-sm">...</span>}
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDocumentation(true)}
              >
                <HelpCircle className="w-4 h-4" />
              </Button>

              <SupabaseAuthModal />

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
