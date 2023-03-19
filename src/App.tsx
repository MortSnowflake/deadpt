import "./App.css";
import { CardList } from "./components/card-list/cardList";
import { Box } from "@chakra-ui/react";
import { EntityPanel } from "./components/entity-panel/entityPanel";
import { ThrowPanel } from "./components/throw-panel/throwPanel";

function App() {
  return (
    <Box className="App">
      <Box className="sidePanel">
        <ThrowPanel/>
      </Box>
      <Box className="mainField">
        <CardList/>
        <EntityPanel/>
        <CardList/>
      </Box>
    </Box>
  );
}

export default App;
