import { useState, useMemo } from "react";

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  src?: string;
}

interface Category {
  categoryId: number;
  cateoryTitle: string;
  categoryDescription: string;
  items: Item[];
}

export const useFilter = (data: Category[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Filtrar los datos según el término de búsqueda y la categoría seleccionada
  const filteredData = useMemo(() => {
    const items = data.flatMap((cat) => cat.items);

    // Aplicar filtros independientes
    return items.filter((item) => {
      const matchesSearch =
        !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory ||
        data.some(
          (cat) =>
            cat.cateoryTitle === selectedCategory &&
            cat.items.some((catItem) => catItem.id === item.id)
        );

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, data]);

  return {
    filteredData,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  };
};
