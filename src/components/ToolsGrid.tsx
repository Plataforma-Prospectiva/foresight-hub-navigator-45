
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";

interface ToolsGridProps {
  searchTerm: string;
  selectedCategory: string;
}

export const ToolsGrid = ({ searchTerm, selectedCategory }: ToolsGridProps) => {
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
