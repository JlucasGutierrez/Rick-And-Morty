import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import logo from "../utils/logo.jpg"

export default function Nav(props) {
  
  return (
    <div className={style.container}>
      <Link to="/home"> <img className={style.imagen} src={logo} alt="search" /> </Link>
      <Link to="/favorites">FAVS ❤️</Link>
      
      <SearchBar onSearch={props.onSearch} />
      <Link to="/about">ABOUT</Link>
      <button className={style.btn} onClick={props.out}>LOGOUT</button>
    </div>
  );
}
