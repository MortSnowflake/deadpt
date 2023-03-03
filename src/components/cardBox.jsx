import React, { useState } from "react";
import "./cardBox.css"
import "./addButton.css"
import Card from "./card";

function CardBox() {
    const [cards, setCards] = useState ([])

    function addCard() {
        const newCard = {
            id: Date.now
        }
        setCards([...cards, newCard])
    }

    function removeCard(card) {
        setCards(cards.filter(c => cards.indexOf(c) !== cards.indexOf(card)))
    }

   return (
        <div className="cardBox">
            {cards.map(card =>
              <Card
              card={card}
              remove={removeCard}
              ></Card>)}
            <button className="addButton" onClick={addCard}>+</button>
        </div>
   )
} 

export default CardBox;