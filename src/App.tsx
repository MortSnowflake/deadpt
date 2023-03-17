import Toast from "./components/toast";
import useToastMessage from "./hook/useToastMessage";
import "./App.css";
import { CardList } from "./components/card-list/cardList";
import { Box } from "@chakra-ui/react";
import { EntityPanel } from "./components/entity-panel/entityPanel";
import { ThrowPanel } from "./components/throw-panel/throwPanel";

function App() {
  const { toastMessage, handleToastMessage } = useToastMessage();
  return (
    <Box className="App">
      <Box className="sidePanel">
        <button
          disabled={toastMessage.isLoading}
          onClick={() => handleToastMessage('green', 'Работает. Проверено.', true, 3000)}>Success</button>
          {toastMessage.isLoading && <Toast message={toastMessage.message} bg={toastMessage.bg} />}
        <ThrowPanel/>
      </Box>
      <Box className="mainField">
        <CardList/>
        <EntityPanel/>
        <CardList/>
      </Box>
    </Box>);
}

export default App;
