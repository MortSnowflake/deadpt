import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { ThrowType } from "../../types/throw"
import { rollWithParameter } from "../../utils/dice-roller"
import "./throwPanel.css"

export function ThrowPanel () {

    const [result, setResult] = useState<number[]>([]);
    
    function handleDiceThrow (rollType: ThrowType) {
        let newThrow = rollWithParameter(rollType);          
        setResult([...result, newThrow]);
    }

    return (
        <Box className="throwPanel">
            <Box className="throwLog">{result.map((item) => <Text>{item}</Text>)}</Box>
            <Flex className="throwButtons">
               <Button onClick={() => handleDiceThrow(ThrowType.advantage)}>+2d4</Button>
               <Button marginLeft='10px' onClick={() => handleDiceThrow(ThrowType.normal)}>d4</Button>
               <Button marginLeft='10px' onClick={() => handleDiceThrow(ThrowType.interference)}>-2d4</Button>
            </Flex>            
        </Box>
    )
}