import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { getTechniques } from '@/data/techniques';
import { mapTechniqueToDatabase } from '@/hooks/useTechniquesFromDB';
import { Database, Upload, Check, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MigrationLog {
  timestamp: Date;
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

export const DatabaseMigrationPanel: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<MigrationLog[]>([]);
  const [dbStats, setDbStats] = useState<{ es: number; en: number } | null>(null);
  const { toast } = useToast();

  const addLog = (level: MigrationLog['level'], message: string) => {
    setLogs(prev => [...prev, { timestamp: new Date(), level, message }]);
  };

  const checkDatabaseStatus = async () => {
    try {
      const { data: esData, error: esError } = await supabase
        .from('techniques')
        .select('id', { count: 'exact' })
        .eq('language', 'es');

      const { data: enData, error: enError } = await supabase
        .from('techniques')
        .select('id', { count: 'exact' })
        .eq('language', 'en');

      if (esError || enError) throw esError || enError;

      setDbStats({
        es: esData?.length || 0,
        en: enData?.length || 0,
      });
    } catch (error) {
      console.error('Error checking database status:', error);
    }
  };

  React.useEffect(() => {
    checkDatabaseStatus();
  }, []);

  const runMigration = async () => {
    setIsRunning(true);
    setProgress(0);
    setLogs([]);

    try {
      addLog('info', 'Iniciando migración de técnicas...');
      
      // Get techniques for both languages
      const techniquesES = getTechniques('es');
      const techniquesEN = getTechniques('en');
      const totalTechniques = techniquesES.length + techniquesEN.length;
      
      addLog('info', `Técnicas en español: ${techniquesES.length}`);
      addLog('info', `Técnicas en inglés: ${techniquesEN.length}`);
      
      let processed = 0;

      // Migrate Spanish techniques
      addLog('info', 'Migrando técnicas en español...');
      for (const technique of techniquesES) {
        const dbData = mapTechniqueToDatabase(technique, 'es');
        
        const { error } = await supabase
          .from('techniques')
          .upsert(dbData, { onConflict: 'technique_id,language' });

        if (error) {
          addLog('error', `Error migrando ${technique.name}: ${error.message}`);
        } else {
          addLog('success', `✓ ${technique.name} (ES)`);
        }
        
        processed++;
        setProgress((processed / totalTechniques) * 100);
      }

      // Migrate English techniques
      addLog('info', 'Migrando técnicas en inglés...');
      for (const technique of techniquesEN) {
        const dbData = mapTechniqueToDatabase(technique, 'en');
        
        const { error } = await supabase
          .from('techniques')
          .upsert(dbData, { onConflict: 'technique_id,language' });

        if (error) {
          addLog('error', `Error migrando ${technique.name}: ${error.message}`);
        } else {
          addLog('success', `✓ ${technique.name} (EN)`);
        }
        
        processed++;
        setProgress((processed / totalTechniques) * 100);
      }

      addLog('success', `Migración completada: ${processed} técnicas procesadas`);
      
      toast({
        title: "Migración completada",
        description: `Se migraron ${processed} técnicas a la base de datos.`,
      });

      // Refresh stats
      await checkDatabaseStatus();

    } catch (error) {
      addLog('error', `Error crítico: ${error instanceof Error ? error.message : 'Unknown error'}`);
      toast({
        title: "Error en migración",
        description: "Hubo un problema durante la migración.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const clearDatabase = async () => {
    if (!confirm('¿Está seguro de que desea eliminar todas las técnicas de la base de datos?')) {
      return;
    }

    setIsRunning(true);
    addLog('warning', 'Eliminando técnicas de la base de datos...');

    try {
      const { error } = await supabase
        .from('techniques')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

      if (error) throw error;

      addLog('success', 'Base de datos limpiada');
      toast({
        title: "Base de datos limpiada",
        description: "Todas las técnicas fueron eliminadas.",
      });

      await checkDatabaseStatus();
    } catch (error) {
      addLog('error', `Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const getLogIcon = (level: MigrationLog['level']) => {
    switch (level) {
      case 'success': return <Check className="h-3 w-3 text-green-500" />;
      case 'error': return <AlertCircle className="h-3 w-3 text-red-500" />;
      case 'warning': return <AlertCircle className="h-3 w-3 text-yellow-500" />;
      default: return <Database className="h-3 w-3 text-blue-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Migración de Base de Datos
        </CardTitle>
        <CardDescription>
          Sincroniza las técnicas desde los archivos estáticos hacia la base de datos
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Database Status */}
        <div className="flex gap-4">
          <Badge variant="outline" className="flex items-center gap-1">
            🇪🇸 ES: {dbStats?.es ?? '...'} técnicas
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            🇬🇧 EN: {dbStats?.en ?? '...'} técnicas
          </Badge>
          <Button variant="ghost" size="sm" onClick={checkDatabaseStatus}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        {/* Progress */}
        {isRunning && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm text-muted-foreground">
                Procesando... {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} />
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            onClick={runMigration} 
            disabled={isRunning}
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Migrar Técnicas
          </Button>
          <Button 
            variant="destructive" 
            onClick={clearDatabase} 
            disabled={isRunning}
          >
            Limpiar BD
          </Button>
        </div>

        {/* Logs */}
        {logs.length > 0 && (
          <ScrollArea className="h-48 border rounded-md p-2">
            <div className="space-y-1">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start gap-2 text-xs">
                  {getLogIcon(log.level)}
                  <span className="text-muted-foreground">
                    {log.timestamp.toLocaleTimeString()}
                  </span>
                  <span className={
                    log.level === 'error' ? 'text-red-600' :
                    log.level === 'warning' ? 'text-yellow-600' :
                    log.level === 'success' ? 'text-green-600' :
                    'text-foreground'
                  }>
                    {log.message}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};
