import styles from "./itemsContainerStyles.module.css";
import { type ReactNode} from "react";

type ContainerProps = {
    titulo: string;
    descripcion: string;
    children: ReactNode;
}

function ItemsContainer(props: ContainerProps) {
    const { titulo, descripcion, children: Children } = props;
    return (
    <section className={styles.contenedor}>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <div className={styles.item}>{Children}</div>
    </section>
    );
}

export default ItemsContainer