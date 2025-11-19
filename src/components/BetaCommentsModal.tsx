import { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSupabaseAuth } from "@/context/SupabaseAuthContext";
import { useUserRole } from "@/hooks/useUserRole";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: string;
  text: string;
  timestamp: Date;
  userName: string;
  category: 'bug' | 'suggestion' | 'feature' | 'general';
}

export const BetaCommentsModal = () => {
  const { user } = useSupabaseAuth();
  const { hasRole } = useUserRole();
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Comment['category']>('general');
  const [isOpen, setIsOpen] = useState(false);

  if (!user || !hasRole('admin' as any)) return null;

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment.trim(),
      timestamp: new Date(),
      userName: user.user_metadata?.display_name || user.email || 'Usuario Beta',
      category: selectedCategory
    };

    setComments(prev => [comment, ...prev]);
    setNewComment("");
    
    toast({
      title: "Comentario enviado",
      description: "¡Gracias por tu feedback beta!",
    });
  };

  const getCategoryColor = (category: Comment['category']) => {
    switch (category) {
      case 'bug': return 'destructive';
      case 'suggestion': return 'secondary';
      case 'feature': return 'default';
      default: return 'outline';
    }
  };

  const getCategoryLabel = (category: Comment['category']) => {
    switch (category) {
      case 'bug': return 'Bug';
      case 'suggestion': return 'Sugerencia';
      case 'feature': return 'Nueva Función';
      default: return 'General';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-500/40 text-orange-700 dark:text-orange-300"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Comentarios Beta
          <Badge variant="secondary" className="ml-2 text-xs">
            {comments.length}
          </Badge>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-orange-500" />
            Panel de Comentarios Beta
            <Badge variant="outline" className="text-orange-600 border-orange-200">
              Beta Tester
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* New Comment Form */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Nuevo Comentario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                {['general', 'bug', 'suggestion', 'feature'].map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category as Comment['category'])}
                  >
                    {getCategoryLabel(category as Comment['category'])}
                  </Button>
                ))}
              </div>
              
              <Textarea
                placeholder="Describe tu experiencia, reporta bugs o sugiere mejoras..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px]"
              />
              
              <Button onClick={handleSubmitComment} className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Enviar Comentario
              </Button>
            </CardContent>
          </Card>
          
          {/* Comments List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {comments.length === 0 ? (
              <Card>
                <CardContent className="text-center py-8 text-muted-foreground">
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Aún no hay comentarios. ¡Sé el primero en compartir tu experiencia!</p>
                </CardContent>
              </Card>
            ) : (
              comments.map((comment) => (
                <Card key={comment.id} className="border-l-4 border-l-orange-500/30">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{comment.userName}</span>
                        <Badge variant={getCategoryColor(comment.category)} className="text-xs">
                          {getCategoryLabel(comment.category)}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {comment.timestamp.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed">{comment.text}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};