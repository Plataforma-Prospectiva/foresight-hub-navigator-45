
import { ToolCard } from "@/components/ToolCard";

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

interface ToolsGridProps {
  searchTerm: string;
  selectedCategory: string;
  tools: Tool[];
}

export const ToolsGrid = ({ searchTerm, selectedCategory, tools }: ToolsGridProps) => {
  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};
