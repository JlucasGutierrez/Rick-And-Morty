import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../../redux/actions/actions";
import { FcLike,FcDislike } from "react-icons/fc";
import { CgClose } from "react-icons/cg";


export default function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  id,
}) {


  const dispatch = useDispatch(); // CREO UN DISPATCH
  const favorites = useSelector((state) => state.favorites);

  const [isFav, setIsFav] = useState(false);

  function handleClick() {
 
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(
        addFavorite({
          name,
          species,
          onClose,
          gender,
          status,
          origin,
          image,
          id,
        })
      );
    }
  }

  useEffect(() => {

    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  return (
    <div className={style.card}>
      {onClose ? (
         <button className={style.closeButton} onClick={() => onClose(id)}><CgClose className={style.close}/></button>
       ) : null}
      <div>
        <Link to={`/detail/${id}`}>
        <img className={style.cardImage} src={image} alt={name} />
        </Link>
      </div>
      <div><h4>{name}</h4></div>
      <div><h5>{species}</h5></div>
      {isFav ? (
      <button className={style.fav} onClick={handleClick}><FcDislike /></button>
      ) : (
      <button className={style.fav} onClick={handleClick}><FcLike /></button>
      )}
    </div>
    // <div className={style.cardContainer}>
    //   {onClose ? (
    //     <button className={style.closeButton} onClick={() => onClose(id)}>
    //       X
    //     </button>
    //   ) : null}
    //   <h2 className={style.cardInfo}>{name}</h2>
    //   <h2 className={style.cardInfo}>{species}</h2>
    //   <h2 className={style.cardInfo}>{gender}</h2>
    //   <h2 className={style.cardInfo}>{status}</h2>
    //   <h2 className={style.cardInfo}>{origin}</h2>
    //   <Link to={`/detail/${id}`}>
    //     <img className={style.cardImage} src={image} alt={name} />
    //   </Link>
    //   {isFav ? (
    //     <button onClick={handleClick}>❤️</button>
    //   ) : (
    //     <button onClick={handleClick}>🤍</button>
    //   )}
    // </div>
  );
}

