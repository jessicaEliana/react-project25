import ItemsContainer from "./ItemsContainer";
import ItemCard from "./ItemCard";
import styles from "./filtrosStyles.module.css";
import type { Category } from "./types";

type Props = {
  data: Category[];
  searchTerm: string;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  likesCount: number;
  setLikesCount: (count: number) => void;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
};


function FilterableList({
  data,
  searchTerm,
  selectedCategory,
  setSelectedCategory,
  likesCount,
  setLikesCount,
  totalPrice,
  setTotalPrice,
  selectedItems,
  setSelectedItems,
}: Props) {
  const filtered = data
    .filter(
      (cat) =>
        !selectedCategory || cat.cateoryTitle === selectedCategory
    )
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className={styles.container}>
      <div className={styles.selectBar}>
        <select
          className={styles.select}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {data.map((cat) => (
            <option key={cat.categoryId} value={cat.cateoryTitle}>
              {cat.cateoryTitle}
            </option>
          ))}
        </select>
      </div>

      {searchTerm.trim() === "" ? (
  // Modo por categorías (sin búsqueda)
  filtered.map((category) => (
    <ItemsContainer
      key={category.categoryId}
      titulo={category.cateoryTitle}
      descripcion={category.categoryDescription}
    >
      {category.items.map((item) => (
        <ItemCard
          key={item.id}
          itemId={item.id}
          titulo={item.title}
          descripcion={item.description}
          precio={item.price}
          src={item.src}
          currentLikes={likesCount}
          setLikesCount={setLikesCount}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ))}
    </ItemsContainer>
  ))
) : (
  // Modo búsqueda: todos juntos
  <ItemsContainer titulo="Resultados" descripcion="">
    {filtered.flatMap((category) => category.items).map((item) => (
      <ItemCard
        key={item.id}
        itemId={item.id}
        titulo={item.title}
        descripcion={item.description}
        precio={item.price}
        src={item.src}
        currentLikes={likesCount}
        setLikesCount={setLikesCount}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    ))}
  </ItemsContainer>
)}

    </div>
  );
}

export default FilterableList;
