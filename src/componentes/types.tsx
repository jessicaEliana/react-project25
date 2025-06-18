// src/types.ts
export type MostRequested = {
  id: number;
  title: string;
  description: string;
  price?: number;
  src: string;
};

export type Category = {
  categoryId: number;
  cateoryTitle: string;
  categoryDescription: string;
  items: MostRequested[];
};


// export type FilterableListProps = {
//   data: Category[];
//   searchTerm: string;
//   selectedCategory: string;
//   setSelectedCategory: (value: string) => void;
// };