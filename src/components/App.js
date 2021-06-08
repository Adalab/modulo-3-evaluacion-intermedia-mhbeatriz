import "../stylesheets/App.css";
import data from "../data/data.json";
import PokeList from "./PokeList";
console.log(data);
function App() {
  return (
    <div className="pokemon">
      <h1 className="title">Mi lista de Pokemon</h1>
      <PokeList pokedata={data} />
    </div>
  );
}
export default App;
