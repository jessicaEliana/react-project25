import styles from "./itemCardStyles.module.css";

type ItemProps = {
    titulo: string,
    descripcion: string,
    precio?: number,
    src: string
}

function ItemCard(props: ItemProps) {
    const { titulo, descripcion, precio = 0, src } = props;
    return (
    <section className={styles.fondo}>
        <img className={styles.imagen} width="150" height="150" src={src} />
        <div>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            {precio>0 && (<p>${precio}</p>)}
        </div>
    </section>
    );
}

export default ItemCard