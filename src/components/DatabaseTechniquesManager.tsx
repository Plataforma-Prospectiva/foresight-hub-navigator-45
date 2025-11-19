import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Database, Plus, Edit, Trash2, Search, Filter, Eye, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useSupabaseAuth } from '@/context/SupabaseAuthContext';
import { getTechniquesFromDatabase, seedTechniquesToDatabase } from '@/utils/techniqueSeeder';
import type { Database as DatabaseType } from '@/integrations/supabase/types';

type TechniqueRow = DatabaseType['public']['Tables']['techniques']['Row'];

export const DatabaseTechniquesManager = () => {
  const [techniques, setTechniques] = useState<TechniqueRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [editingTechnique, setEditingTechnique] = useState<TechniqueRow | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const { user } = useSupabaseAuth();

  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    { value: 'exploratory', label: 'Exploratoria' },
    { value: 'normative', label: 'Normativa' },
    { value: 'participatory', label: 'Participativa' },
    { value: 'qualitative', label: 'Cualitativa' },
    { value: 'quantitative', label: 'Cuantitativa' }
  ];

  const complexities = [
    { value: 'all', label: 'Todas las complejidades' },
    { value: '1', label: 'Muy Baja (1)' },
    { value: '2', label: 'Baja (2)' },
    { value: '3', label: 'Media (3)' },
    { value: '4', label: 'Alta (4)' },
    { value: '5', label: 'Muy Alta (5)' }
  ];

  useEffect(() => {
    loadTechniques();
  }, []);

  const loadTechniques = async () => {
    setLoading(true);
    try {
      const data = await getTechniquesFromDatabase('es');
      if (data) {
        setTechniques(data);
      } else {
        toast.error('Error cargando técnicas de la base de datos');
      }
    } catch (error) {
      toast.error('Error inesperado cargando técnicas');
    } finally {
      setLoading(false);
    }
  };

  const handleSyncWithFiles = async () => {
    setIsSyncing(true);
    try {
      const result = await seedTechniquesToDatabase();
      if (result.success) {
        toast.success(result.message);
        await loadTechniques();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Error sincronizando técnicas');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleDeleteTechnique = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta técnica?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('techniques')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Error eliminando técnica');
        return;
      }

      toast.success('Técnica eliminada exitosamente');
      await loadTechniques();
    } catch (error) {
      toast.error('Error inesperado eliminando técnica');
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('techniques')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) {
        toast.error('Error actualizando estado de técnica');
        return;
      }

      toast.success(`Técnica ${!currentStatus ? 'activada' : 'desactivada'} exitosamente`);
      await loadTechniques();
    } catch (error) {
      toast.error('Error inesperado actualizando técnica');
    }
  };

  const filteredTechniques = techniques.filter(technique => {
    const matchesSearch = technique.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         technique.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || technique.category === selectedCategory;
    const matchesComplexity = selectedComplexity === 'all' || technique.complexity.toString() === selectedComplexity;
    
    return matchesSearch && matchesCategory && matchesComplexity;
  });

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-slate-600">Debes estar autenticado para acceder al gestor de técnicas.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Gestor de Técnicas - Base de Datos
          </h1>
          <p className="text-slate-600">Gestiona las técnicas prospectivas almacenadas en Supabase</p>
        </div>
        
        <div className="flex gap-2">
          <Button
            onClick={handleSyncWithFiles}
            disabled={isSyncing}
            variant="outline"
          >
            {isSyncing ? 'Sincronizando...' : 'Sincronizar con archivos'}
          </Button>
          
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Nueva Técnica
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros y Búsqueda</CardTitle>
          <CardDescription>
            Encuentra y filtra las técnicas almacenadas en la base de datos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar técnicas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {complexities.map(complexity => (
                  <SelectItem key={complexity.value} value={complexity.value}>
                    {complexity.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-sm text-slate-600">
            Mostrando {filteredTechniques.length} de {techniques.length} técnicas
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-center py-8">
          <p>Cargando técnicas...</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredTechniques.map(technique => (
            <Card key={technique.id} className={`${!technique.is_active ? 'opacity-60' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{technique.name}</h3>
                      <Badge variant="secondary">
                        Complejidad {technique.complexity}
                      </Badge>
                      <Badge variant="outline">
                        {categories.find(c => c.value === technique.category)?.label || technique.category}
                      </Badge>
                      {!technique.is_active && (
                        <Badge variant="destructive">Inactiva</Badge>
                      )}
                    </div>
                    
                    <p className="text-slate-600 mb-2">{technique.description}</p>
                    
                    <div className="text-sm text-slate-500">
                      ID: {technique.technique_id} | Creada: {new Date(technique.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-[600px] sm:w-[800px]">
                        <SheetHeader>
                          <SheetTitle>{technique.name}</SheetTitle>
                          <SheetDescription>
                            Detalles completos de la técnica prospectiva
                          </SheetDescription>
                        </SheetHeader>
                        
                        <ScrollArea className="h-full mt-6">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium mb-2">Descripción</h4>
                              <p className="text-sm text-slate-600">{technique.description}</p>
                            </div>
                            
                            <Separator />
                            
                            <div>
                              <h4 className="font-medium mb-2">Objetivos</h4>
                              <ul className="text-sm text-slate-600 space-y-1">
                                {(Array.isArray(technique.objectives) ? technique.objectives : 
                                  typeof technique.objectives === 'string' ? JSON.parse(technique.objectives || '[]') : []
                                ).map((objective: string, index: number) => (
                                  <li key={index}>• {objective}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <Separator />
                            
                            <div>
                              <h4 className="font-medium mb-2">Aplicaciones</h4>
                              <ul className="text-sm text-slate-600 space-y-1">
                                {(Array.isArray(technique.applications) ? technique.applications : 
                                  typeof technique.applications === 'string' ? JSON.parse(technique.applications || '[]') : []
                                ).map((application: string, index: number) => (
                                  <li key={index}>• {application}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <Separator />
                            
                            <div>
                              <h4 className="font-medium mb-2">Ventajas</h4>
                              <ul className="text-sm text-slate-600 space-y-1">
                                {(Array.isArray(technique.advantages) ? technique.advantages : 
                                  typeof technique.advantages === 'string' ? JSON.parse(technique.advantages || '[]') : []
                                ).map((advantage: string, index: number) => (
                                  <li key={index}>• {advantage}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <Separator />
                            
                            <div>
                              <h4 className="font-medium mb-2">Limitaciones</h4>
                              <ul className="text-sm text-slate-600 space-y-1">
                                {(Array.isArray(technique.limitations) ? technique.limitations : 
                                  typeof technique.limitations === 'string' ? JSON.parse(technique.limitations || '[]') : []
                                ).map((limitation: string, index: number) => (
                                  <li key={index}>• {limitation}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </ScrollArea>
                      </SheetContent>
                    </Sheet>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingTechnique(technique)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleActive(technique.id, technique.is_active)}
                    >
                      {technique.is_active ? 'Desactivar' : 'Activar'}
                    </Button>
                    
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteTechnique(technique.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {filteredTechniques.length === 0 && !loading && (
            <div className="text-center py-8">
              <p className="text-slate-600">No se encontraron técnicas que coincidan con los filtros aplicados.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};