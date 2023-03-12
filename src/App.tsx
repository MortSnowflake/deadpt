import Toast from "./components/toast";
import useToastMessage from "./hook/useToastMessage";
import "./App.css";
import { CardList } from "./components/card-list/cardList";



function App() {
  const { toastMessage, handleToastMessage } = useToastMessage();
  return (
    <div className="App">
      <button
        disabled={toastMessage.isLoading}
        onClick={() => handleToastMessage('green', 'Работает. Проверено.', true, 3000)}>Success</button>
      {toastMessage.isLoading && <Toast message={toastMessage.message} bg={toastMessage.bg} />}
      <CardList/>
    </div>);
}

export default App;
