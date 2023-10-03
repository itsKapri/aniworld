import './App.css';
import { useGlobalContext } from './context/global';

function App() {
  const global=useGlobalContext();
  console.log(global)
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
