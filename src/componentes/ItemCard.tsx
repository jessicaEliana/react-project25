import styles from "./itemCardStyles.module.css";
import { useState } from "react";

type Props = {
  titulo: string;
  descripcion: string;
  precio?: number;
  src: string;
  currentLikes: number;
  setLikesCount: (count: number) => void;
};

function ItemCard({ titulo, descripcion, precio, src, currentLikes, setLikesCount }: Props) {
  const [added, setAdded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleAgregar = () => {
    setAdded(true);
    setLikesCount(currentLikes + 1);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); 
  };

  const handleQuitar = () => {
    setAdded(false);
    setLikesCount(currentLikes - 1);
  };

  return (
    <div className={styles.fondo}>
      <img src={src} alt={titulo} className={styles.imagen} />
      <h3 className={styles.cardTitle}>{titulo}</h3>
      <p className={styles.cardDescription}>{descripcion}</p>
      {precio !== undefined && <span className={styles.cardPrice}>${precio}</span>}

      <div className={styles.botones}>
        {added ? (
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
