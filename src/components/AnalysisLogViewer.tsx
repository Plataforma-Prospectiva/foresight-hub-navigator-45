import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal, CheckCircle2, AlertCircle, Loader2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LogEntry {
  id: string;
  timestamp: Date;
  level: "info" | "success" | "error" | "processing";
  message: string;
  details?: string;
}

interface AnalysisLogViewerProps {
  logs: LogEntry[];
  isActive?: boolean;
}

export const AnalysisLogViewer = ({ logs, isActive = false }: AnalysisLogViewerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getIcon = (level: LogEntry["level"]) => {
    switch (level) {
      case "success":
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case "error":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      case "processing":
        return <Loader2 className="w-4 h-4 animate-spin text-primary" />;
      default:
        return <Info className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getBadgeVariant = (level: LogEntry["level"]) => {
    switch (level) {
      case "success":
        return "default";
      case "error":
        return "destructive";
      case "processing":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <Card className={cn(
      "transition-all duration-200",
      isActive && "border-primary shadow-md"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <Terminal className="w-4 h-4" />
            Registro del Proceso de Análisis
            {isActive && (
              <Badge variant="secondary" className="ml-2">
                <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                En proceso
              </Badge>
            )}
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            {logs.length} eventos
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ScrollArea className="h-[300px] w-full pr-4" ref={scrollRef}>
          {logs.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[200px] text-muted-foreground">
              <Terminal className="w-12 h-12 mb-3 opacity-20" />
              <p className="text-sm">No hay registros aún</p>
              <p className="text-xs">Los logs aparecerán cuando inicies el análisis</p>
            </div>
          ) : (
            <div className="space-y-2">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className={cn(
                    "p-3 rounded-lg border transition-all duration-200",
                    "hover:bg-muted/50",
                    log.level === "error" && "bg-destructive/5 border-destructive/20",
                    log.level === "success" && "bg-success/5 border-success/20",
                    log.level === "processing" && "bg-primary/5 border-primary/20"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{getIcon(log.level)}</div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium leading-none">{log.message}</p>
                        <Badge variant={getBadgeVariant(log.level)} className="text-xs shrink-0">
                          {log.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {log.timestamp.toLocaleTimeString('es-ES', { 
                          hour: '2-digit', 
                          minute: '2-digit',
                          second: '2-digit'
                        })}
                      </p>
                      {log.details && (
                        <p className="text-xs text-muted-foreground mt-2 pl-2 border-l-2 border-muted">
                          {log.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
