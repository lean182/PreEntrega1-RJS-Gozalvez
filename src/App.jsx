import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return (
    <div id="app">
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos al Primer eCommerce"} />
    </div>
  );
}

export default App;
