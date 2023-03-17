import { Box, Button, Flex, Grid } from "@chakra-ui/react"
import "./entityPanel.css"
import { EntityView } from "./entityView"
import { useState } from "react"
import { Entity } from "../../types/entity"

export function EntityPanel () {

    const [entities, setEntities] = useState<Entity[]>([])

    function handleAddEntity () {
        const newEntity = {
            id: Date.now()
        }

        setEntities([...entities, newEntity])
    }

    return (
        <Flex className="entityPanel">
            <Grid className="entityGrid">
                {entities.map(entity => 
                 <EntityView/>
                )}
            </Grid>
            <button className="addEntity" onClick={handleAddEntity}>+</button>
            <Flex className="signPanel">
                <Box className="signCard"/>
                <Button>Найти ответ</Button>
            </Flex>
        </Flex>
   )
}
