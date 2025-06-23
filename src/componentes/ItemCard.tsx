import styles from "./itemCardStyles.module.css";
import { useState } from "react";

type Props = {
  itemId: number;
  titulo: string;
  descripcion: string;
  precio?: number;
  src: string;
  currentLikes: number;
  setLikesCount: (count: number) => void;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
};


function ItemCard({ itemId, titulo, descripcion, precio, src, currentLikes, setLikesCount, setTotalPrice, selectedItems, setSelectedItems }: Props) {
  const isAdded = selectedItems.includes(itemId);
  const [showMessage, setShowMessage] = useState(false);

  const handleAgregar = () => {
  if (precio !== undefined) {
    setTotalPrice((prev) => prev + precio);
  }
  setSelectedItems((prev) => [...prev, itemId]);
  setLikesCount(currentLikes + 1);
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 2000);
};

const handleQuitar = () => {
  if (precio !== undefined) {
    setTotalPrice((prev) => Math.max(prev - precio, 0));
  }
  setSelectedItems((prev) => prev.filter((id) => id !== itemId));
  setLikesCount(currentLikes - 1);
};


  return (
    <div className={styles.fondo}>
      <img src={src} alt={titulo} className={styles.imagen} />
      <h3 className={styles.cardTitle}>{titulo}</h3>
      <p className={styles.cardDescription}>{descripcion}</p>
      {precio !== undefined && <span className={styles.cardPrice}>${precio}</span>}

      <div className={styles.botones}>
        {isAdded ? (
          <button onClick={handleQuitar} className={styles.quitar}>Quitar</button>
        ) : (
          <button onClick={handleAgregar} className={styles.agregar}>Agregar</button>
        )}
      </div>

      {showMessage && <div className={styles.cartel}>Agregado ✅</div>}
    </div>
  );
}

export default ItemCard;
