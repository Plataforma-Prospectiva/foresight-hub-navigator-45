
import { ExternalLink, Clock, Users, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: any;
  url: string;
  category: string;
  status: "active" | "beta" | "coming-soon";
  estimatedTime: string;
  complexity: "básico" | "intermedio" | "avanzado";
}

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "beta": return "bg-orange-100 text-orange-800";
      case "coming-soon": return "bg-slate-100 text-slate-600";
      default: return "bg-slate-100 text-slate-600";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "básico": return "bg-blue-100 text-blue-800";
      case "intermedio": return "bg-yellow-100 text-yellow-800";
      case "avanzado": return "bg-red-100 text-red-800";
      default: return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300 bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <tool.icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              <div className="flex gap-2 mt-2">
                <Badge className={getStatusColor(tool.status)} variant="secondary">
                  {tool.status === "active" ? "Activo" : 
                   tool.status === "beta" ? "Beta" : "Próximamente"}
                </Badge>
                <Badge className={getComplexityColor(tool.complexity)} variant="secondary">
                  {tool.complexity}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-slate-600 mb-4 leading-relaxed">
          {tool.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{tool.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart3 className="w-4 h-4" />
            <span>Análisis</span>
          </div>
        </div>

        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => window.open(tool.url, '_blank')}
          disabled={tool.status === "coming-soon"}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          {tool.status === "coming-soon" ? "Próximamente" : "Acceder a la Herramienta"}
        </Button>
      </CardContent>
    </Card>
  );
};
