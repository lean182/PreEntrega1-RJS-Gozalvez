import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <div id="app">
      <NavBar />
      <ItemListContainer saludo="Prop de saludo" />
    </div>
  );
}

export default App;
