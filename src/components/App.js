import "../stylesheets/App.css";
import data from "../data/data.json";
import PokeList from "./PokeList";
import image from "../images/image.png";
function App() {
  return (
    <div className="pokemon">
      <div className="header">
        <h1 className="title">Mi lista de</h1>
        <img className="logo" src={image} />
      </div>
      <PokeList pokedata={data} />
    </div>
  );
}
export default App;
