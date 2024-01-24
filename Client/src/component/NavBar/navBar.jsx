import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/Nav.module.css"

function NavBar() {
    return(
        <div className={style.container}>
            <Link to="/home">Home</Link>
            <SearchBar />
            <Link to="/favorites">Favorites</Link>
        </div>
    );
};

export default NavBar;