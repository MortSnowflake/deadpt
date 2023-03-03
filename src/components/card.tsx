import React from "react";
import "./card.css";

function Card(props: any) {
   
    return (
        <div className="card" onClick={() => props.remove(props.card)}></div>
    )
}

export default Card;