import React from "react";
import "./cardView.css"

export const CardView = (props: { onRemove: () => void }) => 
    <div className="cardView" onClick={() => props.onRemove()}></div>
