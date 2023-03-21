import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { RollType } from "../../types/roll"
import { rollWithParameter } from "../../utils/dice-roller"
import "./rollPanel.css"

export function RollPanel () {

    const [result, setResult] = useState<any[]>([]);
    const scrollEl = useRef<any>()
    
    const onUpdate = () => {
        scrollEl.current.scrollIntoView({behavior: 'smooth'})
    }
    
    function handleDiceRoll (rollType: RollType) {
        let newRoll: any = rollWithParameter(rollType);
        switch(newRoll[1]){
            case 1:
                newRoll.push(' Провал!');
                break;
            case 2:
            case 3:
                newRoll.push(' Частичный успех');
                break;
            case 4:
                newRoll.push(' Успех!');
                break;
        }          
        setResult([...result, newRoll]);
        onUpdate()
    }

    return (
        <Box className="rollPanel">
            <Box className="rollLog">{result.map((item) => <Text className={`${item[2] === RollType.advantage ? 'rollTypeAdvantage' : item[2] === RollType.interference ? 'rollTypeInterference' : ''}`}>{item[0]}{item[1]}{item[3]}</Text>)}
                <Box className='dummy' ref={scrollEl}/>
            </Box>
            <Flex className="rollButtons">
               <Button onClick={() => handleDiceRoll(RollType.advantage)}>+2d4</Button>
               <Button marginLeft='10px' onClick={() => handleDiceRoll(RollType.normal)}>d4</Button>
               <Button marginLeft='10px' onClick={() => handleDiceRoll(RollType.interference)}>-2d4</Button>
            </Flex>            
        </Box>
    )
}
