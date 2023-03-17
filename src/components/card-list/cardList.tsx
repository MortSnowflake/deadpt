import React, { useState } from "react";
import "./cardList.css"
import "./addButton.css"
import { CardView } from "./cardView";
import { Card } from "../../types/card";
import { Box } from "@chakra-ui/react";


export function CardList() {
    const [cards, setCards] = useState<Card[]>([]);

    function handleAddCard() {
        const newCard = {
            id: Date.now()
        }
        setCards([...cards, newCard])
    }

    function handleRemoveCard(card: Card) {
        setCards(cards.filter(c => c.id !== card.id))
    }

   return (
        <Box className="cardList">
            {cards.map(card =>
              <CardView
              onRemove={() => handleRemoveCard(card)}
              ></CardView>)}
            <button className="addButton" onClick={handleAddCard}>+</button>
        </Box>
   )
} 
