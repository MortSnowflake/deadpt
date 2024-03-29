import { Box, Flex, Text } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { RollType } from "../../types/roll"
import { rollWithHint } from "../../utils/dice-roller"
import "./rollPanel.css"

export function RollPanel () {

    const [result, setResult] = useState<string[][]>([]);
    const scrollEl = useRef<any>()
    
    const onUpdate = () => {
        scrollEl.current.scrollIntoView({behavior: 'smooth'})
    }
    
    function handleDiceRoll (rollType: RollType) {
        let newRoll: string[] = rollWithHint(rollType);
        setResult([...result, newRoll]);
        onUpdate()
    }

    return (
        <Box className="rollPanel">
            <Box className="rollLog">{result.map(([rolls, result, rollType, hint]) => <Text className={rollType}>{rolls} {result} {hint}</Text>)}
                <Box className='dummy' ref={scrollEl}/>
            </Box>
            <Flex className="rollButtons">
               <button className="rollWithInt" onClick={() => handleDiceRoll(RollType.advantage)}/>
               <button className="rollNorm" onClick={() => handleDiceRoll(RollType.normal)}/>
               <button className="rollWithAdv" onClick={() => handleDiceRoll(RollType.interference)}/>
            </Flex>            
        </Box>
    )
}
