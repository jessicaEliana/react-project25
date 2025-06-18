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
};

function FilterableList({
  data,
  searchTerm,
  selectedCategory,
  setSelectedCategory,
  likesCount,
  setLikesCount,
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

      {filtered.length > 0 ? (
        filtered.map((category) => (
          <ItemsContainer
            key={category.categoryId}
            titulo={category.cateoryTitle}
            descripcion={category.categoryDescription}
          >
            {category.items.map((item) => (
              <ItemCard
                key={item.id}
                titulo={item.title}
                descripcion={item.description}
                precio={item.price}
                src={item.src}
                currentLikes={likesCount}
                setLikesCount={setLikesCount}
              />
            ))}
          </ItemsContainer>
        ))
      ) : (
        <p className={styles.noResults}>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default FilterableList;
