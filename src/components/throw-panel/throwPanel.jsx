import { Box, Button, Flex } from "@chakra-ui/react"
import { useState } from "react"
import "./throwPanel.css"

export function ThrowPanel () {

    const [result, setResult] = useState([])
    
    function handleDiceThrow (a, b) {
        let newThrow 
            if (a === 1) {
                newThrow = Math.floor(Math.random() * (b - 1 + 1) + 1)
            } else if (a === 2) {
                newThrow = Math.max(Math.floor(Math.random() * (b - 1 + 1) + 1), Math.floor(Math.random() * (b - 1 + 1) + 1)) 
            } else if (a === -2) {
                newThrow = Math.min(Math.floor(Math.random() * (b - 1 + 1) + 1), Math.floor(Math.random() * (b - 1 + 1) + 1))
            }
        setResult([...result, newThrow])
    }

    return (
        <Box className="throwPanel">
            <Box className="throwLog">{result}</Box>
            <Flex className="throwButtons">
               <Button onClick={() => handleDiceThrow(2,4)}>+2d4</Button>
               <Button marginLeft='10px' onClick={() => handleDiceThrow(1,4)}>d4</Button>
               <Button marginLeft='10px' onClick={() => handleDiceThrow(-2,4)}>-2d4</Button>
            </Flex>            
        </Box>
    )
}