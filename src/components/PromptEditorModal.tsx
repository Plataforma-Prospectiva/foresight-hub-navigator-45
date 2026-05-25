import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileText, RotateCcw } from "lucide-react";

export const DEFAULT_SYSTEM_PROMPT = `Eres un experto en prospectiva estratégica y diseño metodológico.
Analizas un perfil de estudio prospectivo y recomiendas, del catálogo provisto,
las 4 a 6 técnicas más adecuadas, justificando cada elección y ordenándolas
en una secuencia metodológica coherente (1 = primera fase). Solo puedes usar
ids que existan en el catálogo.`;

export const buildDefaultUserPrompt = (profile: unknown, techniquesCatalog: unknown) =>
  `Perfil del estudio:\n${JSON.stringify(profile, null, 2)}\n\nCatálogo de técnicas disponibles:\n${JSON.stringify(techniquesCatalog, null, 2)}\n\nRecomienda las técnicas más adecuadas usando la función recommend_techniques.`;

export interface PromptOverrides {
  systemPrompt?: string;
  userPrompt?: string;
}

interface PromptEditorModalProps {
  profile: unknown;
  techniquesCatalog: unknown;
  overrides: PromptOverrides;
  onChange: (next: PromptOverrides) => void;
}

export const PromptEditorModal = ({ profile, techniquesCatalog, overrides, onChange }: PromptEditorModalProps) => {
  const [open, setOpen] = useState(false);
  const defaultUser = buildDefaultUserPrompt(profile, techniquesCatalog);
  const [system, setSystem] = useState(overrides.systemPrompt ?? DEFAULT_SYSTEM_PROMPT);
  const [user, setUser] = useState(overrides.userPrompt ?? defaultUser);

  useEffect(() => {
    if (open) {
      setSystem(overrides.systemPrompt ?? DEFAULT_SYSTEM_PROMPT);
      setUser(overrides.userPrompt ?? buildDefaultUserPrompt(profile, techniquesCatalog));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const isCustom = !!(overrides.systemPrompt || overrides.userPrompt);

  const handleSave = () => {
    const next: PromptOverrides = {};
    if (system.trim() && system !== DEFAULT_SYSTEM_PROMPT) next.systemPrompt = system;
    if (user.trim() && user !== buildDefaultUserPrompt(profile, techniquesCatalog)) next.userPrompt = user;
    onChange(next);
    setOpen(false);
  };

  const handleReset = () => {
    setSystem(DEFAULT_SYSTEM_PROMPT);
    setUser(buildDefaultUserPrompt(profile, techniquesCatalog));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <FileText className="w-4 h-4 mr-2" />
          Editar Prompt
          {isCustom && <Badge variant="secondary" className="ml-2">personalizado</Badge>}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Editar Prompt enviado al LLM
          </DialogTitle>
          <DialogDescription>
            Personaliza el system y user prompt antes de invocar el análisis. Los cambios se aplicarán en la próxima ejecución.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="system-prompt">System Prompt</Label>
            <Textarea
              id="system-prompt"
              value={system}
              onChange={(e) => setSystem(e.target.value)}
              rows={6}
              className="font-mono text-xs"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="user-prompt">User Prompt</Label>
              <span className="text-xs text-muted-foreground">{user.length} caracteres</span>
            </div>
            <Textarea
              id="user-prompt"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              rows={16}
              className="font-mono text-xs"
            />
            <p className="text-xs text-muted-foreground">
              Incluye el perfil del estudio y el catálogo serializados. Puedes reescribirlo libremente, pero el modelo seguirá obligado a devolver técnicas vía la función <code>recommend_techniques</code>.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <Button variant="ghost" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Restablecer
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button onClick={handleSave}>Guardar prompt</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
