import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./detail.module.css"



export default function Detail() {
  const { id } = useParams(); 

  const [pjDetail, setPjDetail] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
         
          setPjDetail(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => window.alert("Error"));

   
    return () => {
    
      console.log("Me desmonto, adios!");
    };

  }, []);

  return (
    
<div className={style.card}>
    <div className={style.card-1}>
    <img className={style.img} src={pjDetail.image} alt={pjDetail.name} />
    <div className={style.card-2}>
            <h3>{pjDetail.name && pjDetail.name}</h3>
            </div></div>
    <div className={style.right}>
            
            <div className={style.card-3}>
            <h5>Status: {pjDetail.status ? pjDetail.status : ":( no hay status"}</h5>
            </div>
            <div className={style.card-3}>
            Specie: {pjDetail.species}
            </div>
            <div className={style.card-3}>
            {pjDetail.gender}
            </div>
            <div className={style.card-3}>
            {pjDetail.origin?.name}
        </div>
        <div className={style.bottom}>
        <div className={style.card-4}>
          {pjDetail.location?.name}
            </div>
            <div className={style.card-4}>
            </div>
            <div className={style.card-4}>
            </div>
        </div>
    </div>
</div>

    // <div>
    //   <h3>{pjDetail.name && pjDetail.name}</h3>
    //   <h5>{pjDetail.status ? pjDetail.status : ":( no hay status"}</h5>
    //   <img src={pjDetail.image} alt={pjDetail.name} />
    //   <section>
    //     <span>🐞{pjDetail.species}</span>
    //     <span> ♀ {pjDetail.gender}</span>
    //     <span>🌍 {pjDetail.origin?.name}</span>
    //   </section>
    // </div>
  );
}

