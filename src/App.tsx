import Toast from "./components/toast";
import useToastMessage from "./hook/useToastMessage";


function App() {
  const { toastMessage, handleToastMessage } = useToastMessage();
  return (
    <div className="App">
      <button
        disabled={toastMessage.isLoading}
        onClick={() => handleToastMessage('green', 'Работает', true, 3000)}>Success</button>
      {toastMessage.isLoading && <Toast message={toastMessage.message} bg={toastMessage.bg} />}
    </div>);
}

export default App;
