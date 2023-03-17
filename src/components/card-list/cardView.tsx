import { Box } from "@chakra-ui/react";
import React from "react";
import "./cardView.css"

export const CardView = (props: { onRemove: () => void }) => 
    <Box className="cardView" onClick={() => props.onRemove()}></Box>
