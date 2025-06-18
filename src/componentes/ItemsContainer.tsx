import styles from "./itemsContainerStyles.module.css";
import { type ReactNode } from "react";

type Props = {
  titulo: string;
  descripcion: string;
  children: ReactNode;
};

function ItemsContainer({ titulo, descripcion, children }: Props) {
  return (
    <section className={styles.contenedor}>
      <header className={styles.encabezado}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.descripcion}>{descripcion}</p>
      </header>

      <div className={styles.grid}>
        {children}
      </div>
    </section>
  );
}

export default ItemsContainer;
