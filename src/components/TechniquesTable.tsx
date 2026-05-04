import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, RefreshCw, Search, ListChecks } from 'lucide-react';

interface DBTechniqueRow {
  id: string;
  technique_id: string;
  name: string;
  category: string;
  complexity: number;
  language: string;
  is_active: boolean;
  time_horizon: string | null;
  participants_min: number | null;
  participants_max: number | null;
  updated_at: string;
}

export const TechniquesTable: React.FC = () => {
  const [rows, setRows] = useState<DBTechniqueRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState<'all' | 'es' | 'en'>('all');

  const fetchRows = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('techniques')
      .select('id, technique_id, name, category, complexity, language, is_active, time_horizon, participants_min, participants_max, updated_at')
      .order('name');
    if (!error && data) setRows(data as DBTechniqueRow[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const filtered = rows.filter(r => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase()) ||
      r.technique_id.toLowerCase().includes(search.toLowerCase());
    const matchesLang = language === 'all' || r.language === language;
    return matchesSearch && matchesLang;
  });

  const formatParticipants = (min: number | null, max: number | null) => {
    if (min && max) return `${min}-${max}`;
    if (min) return `${min}+`;
    return '—';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListChecks className="h-5 w-5" />
          Técnicas en Base de Datos
        </CardTitle>
        <CardDescription>
          Listado completo de técnicas almacenadas en la base de datos
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre, categoría o ID..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={language} onValueChange={(v: 'all' | 'es' | 'en') => setLanguage(v)}>
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los idiomas</SelectItem>
              <SelectItem value="es">🇪🇸 Español</SelectItem>
              <SelectItem value="en">🇬🇧 Inglés</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={fetchRows} disabled={loading}>
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
          <Badge variant="outline">{filtered.length} resultados</Badge>
        </div>

        <ScrollArea className="h-[500px] border rounded-md">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No hay técnicas en la base de datos. Ejecuta la migración primero.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-center">Complejidad</TableHead>
                  <TableHead className="text-center">Idioma</TableHead>
                  <TableHead>Horizonte</TableHead>
                  <TableHead className="text-center">Participantes</TableHead>
                  <TableHead className="text-center">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(row => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{row.category}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">Nivel {row.complexity}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {row.language === 'es' ? '🇪🇸' : '🇬🇧'} {row.language.toUpperCase()}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {row.time_horizon || '—'}
                    </TableCell>
                    <TableCell className="text-center text-sm">
                      {formatParticipants(row.participants_min, row.participants_max)}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.is_active ? (
                        <Badge className="bg-green-600">Activa</Badge>
                      ) : (
                        <Badge variant="destructive">Inactiva</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
