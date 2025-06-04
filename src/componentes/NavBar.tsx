import Styles from "./navbarStyles.module.css"
import logoMusic from "../assets/logoImg.png"
import usRandom from "../assets/userImg.png"

function NavBar() {
    return (
        <>
            <div className={Styles.contenedor1}>
                <div className={Styles.contenedor2}>
                    <img src={logoMusic} className="logoMusic" alt="Logo Music" />
                    <input 
                    type="text" 
                    className={Styles.searchBar}
                    placeholder="🔍 Buscar..."
                    />
                    <button type="submit">Buscar</button>
                </div>

                <img className={Styles.userFoto} src={usRandom} alt="foto de usuario" />
            </div>
        </>
    )
}

export default NavBar