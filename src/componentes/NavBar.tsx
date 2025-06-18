import Styles from "./navbarStyles.module.css";
import logoMusic from "../assets/logoImg.png";
import usRandom from "../assets/userImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  cartCount: number;
};


function NavBar({ searchTerm, setSearchTerm, cartCount }: Props) {
  return (
    <header className={Styles.navbar}>
      <div className={Styles.left}>
        <img src={logoMusic} className={Styles.logo} alt="Logo Music" />
      </div>

      <div className={Styles.center}>
        <input
          type="text"
          className={Styles.searchBar}
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={Styles.searchBtn} type="submit">Buscar</button>
      </div>

      <div className={Styles.right}>
        <div className={Styles.cartIcon}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartCount > 0 && <span className={Styles.badge}>{cartCount}</span>}
        </div>
        <img className={Styles.userFoto} src={usRandom} alt="Usuario" />
      </div>

    </header>
  );
}

export default NavBar;
