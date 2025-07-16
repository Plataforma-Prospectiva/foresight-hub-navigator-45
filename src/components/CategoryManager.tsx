import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Folder, Plus, Edit, Trash2, Move, Save, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTechniques } from "@/context/TechniqueContext";
import { useToast } from "@/hooks/use-toast";

export const CategoryManager = () => {
  const { language, t } = useLanguage();
  const { techniques, updateTechnique } = useTechniques();
  const { toast } = useToast();
  
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [selectedTechnique, setSelectedTechnique] = useState<string>("");
  const [targetCategory, setTargetCategory] = useState<string>("");

  // Get unique categories
  const categories = Array.from(new Set(techniques.map(t => t.category)));
  
  // Get category counts
  const categoryCounts = techniques.reduce((acc, technique) => {
    acc[technique.category] = (acc[technique.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    
    // For demo purposes, we'll just show a toast
    // In a real app, this would create a new category
    toast({
      title: t('categoryCreated'),
      description: t('categoryCreatedDescription', undefined, { name: newCategoryName }),
    });
    setNewCategoryName("");
  };

  const handleEditCategory = (oldName: string) => {
    if (!editCategoryName.trim()) return;
    
    // Update all techniques in this category
    const techniquesToUpdate = techniques.filter(t => t.category === oldName);
    techniquesToUpdate.forEach(technique => {
      updateTechnique(technique.id, { ...technique, category: editCategoryName });
    });
    
    toast({
      title: t('categoryUpdated'),
      description: t('categoryUpdatedDescription', undefined, { oldName, newName: editCategoryName }),
    });
    
    setEditingCategory(null);
    setEditCategoryName("");
  };

  const handleMoveTechnique = () => {
    if (!selectedTechnique || !targetCategory) return;
    
    const technique = techniques.find(t => t.id === selectedTechnique);
    if (!technique) return;
    
    updateTechnique(selectedTechnique, { ...technique, category: targetCategory });
    
    toast({
      title: t('techniqueMoved'),
      description: t('techniqueMovedDescription', undefined, { 
        technique: technique.name, 
        category: targetCategory 
      }),
    });
    
    setSelectedTechnique("");
    setTargetCategory("");
  };

  const handleDeleteCategory = (categoryName: string) => {
    const techniquesInCategory = techniques.filter(t => t.category === categoryName);
    
    if (techniquesInCategory.length > 0) {
      toast({
        title: t('cannotDeleteCategory'),
        description: t('cannotDeleteCategoryDescription'),
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: t('categoryDeleted'),
      description: t('categoryDeletedDescription', undefined, { name: categoryName }),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Folder className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-slate-800">{t('categoryManager')}</h3>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">{t('overview')}</TabsTrigger>
          <TabsTrigger value="manage">{t('manageCategories')}</TabsTrigger>
          <TabsTrigger value="move">{t('moveTechniques')}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card key={category} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="capitalize">{category}</span>
                    <Badge variant="secondary">
                      {categoryCounts[category] || 0}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm text-slate-600">
                      {t('techniquesInCategory', undefined, { count: categoryCounts[category] || 0 })}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingCategory(category);
                          setEditCategoryName(category);
                        }}
                      >
                        <Edit className="w-3 h-3 mr-1" />
                        {t('edit')}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteCategory(category)}
                        disabled={categoryCounts[category] > 0}
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        {t('delete')}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="manage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('addNewCategory')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder={t('categoryNamePlaceholder')}
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <Button onClick={handleAddCategory}>
                  <Plus className="w-4 h-4 mr-2" />
                  {t('add')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {editingCategory && (
            <Card>
              <CardHeader>
                <CardTitle>{t('editCategory')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>{t('categoryName')}</Label>
                  <div className="flex gap-2">
                    <Input
                      value={editCategoryName}
                      onChange={(e) => setEditCategoryName(e.target.value)}
                    />
                    <Button onClick={() => handleEditCategory(editingCategory)}>
                      <Save className="w-4 h-4 mr-2" />
                      {t('save')}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditingCategory(null);
                        setEditCategoryName("");
                      }}
                    >
                      <X className="w-4 h-4 mr-2" />
                      {t('cancel')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="move" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('moveTechniqueBetweenCategories')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('selectTechnique')}</Label>
                  <Select value={selectedTechnique} onValueChange={setSelectedTechnique}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('chooseTechnique')} />
                    </SelectTrigger>
                    <SelectContent>
                      {techniques.map((technique) => (
                        <SelectItem key={technique.id} value={technique.id}>
                          {technique.name} ({technique.category})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>{t('targetCategory')}</Label>
                  <Select value={targetCategory} onValueChange={setTargetCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('chooseCategory')} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category} ({categoryCounts[category]} {t('techniques')})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleMoveTechnique}
                disabled={!selectedTechnique || !targetCategory}
                className="w-full"
              >
                <Move className="w-4 h-4 mr-2" />
                {t('moveTechnique')}
              </Button>
            </CardContent>
          </Card>

          {/* Preview of current technique distribution */}
          <Card>
            <CardHeader>
              <CardTitle>{t('currentDistribution')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="font-medium capitalize">{category}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">
                        {categoryCounts[category]} {t('techniques')}
                      </Badge>
                      <div 
                        className="h-2 bg-primary rounded"
                        style={{ 
                          width: `${(categoryCounts[category] / techniques.length) * 100}px`,
                          minWidth: '10px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};