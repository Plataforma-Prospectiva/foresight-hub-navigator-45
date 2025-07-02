
import { Button } from "@/components/ui/button";

interface ToolCategoryProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "Todas las Herramientas", count: 6 },
  { id: "mapping", name: "Mapeo y Análisis", count: 2 },
  { id: "scenarios", name: "Desarrollo de Escenarios", count: 2 },
  { id: "consensus", name: "Consenso y Validación", count: 2 },
];

export const ToolCategory = ({ selectedCategory, onCategoryChange }: ToolCategoryProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full transition-all duration-200 ${
            selectedCategory === category.id
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          {category.name}
          <span className="ml-2 text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
            {category.count}
          </span>
        </Button>
      ))}
    </div>
  );
};
