import { Box, Button, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { throwType } from "../../types/throw"
import "./throwPanel.css"

export function ThrowPanel () {

    const [result, setResult] = useState([])
    
    function handleDiceThrow (rollType, edges) {
        const firstThrow = Math.floor(Math.random() * edges + 1)
        const secondThrow = Math.floor(Math.random() * edges + 1)
        let newThrow
            switch(rollType) {
                case throwType.normal:
                    newThrow = firstThrow;
                    break;
                case throwType.advantage:
                    newThrow = Math.max(firstThrow, secondThrow);
                    break;
                case throwType.interference:
                    newThrow = Math.min(firstThrow, secondThrow);
                    break;
                default:
                    break;
            }
           
        setResult([...result, newThrow])
    }

    return (
        <Box className="throwPanel">
            <Box className="throwLog">{result}</Box>
            <Flex className="throwButtons">
               <Button onClick={() => handleDiceThrow(throwType.advantage,4)}>+2d4</Button>
               <Button marginLeft='10px' onClick={() => handleDiceThrow(throwType.normal,4)}>d4</Button>
               <Button marginLeft='10px' onClick={() => handleDiceThrow(throwType.interference,4)}>-2d4</Button>
            </Flex>            
        </Box>
    )
}