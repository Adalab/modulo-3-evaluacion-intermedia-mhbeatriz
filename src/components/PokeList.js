import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const item = props.pokedata.map((dataItem, id) => {
    return (
      <li className="list-items" key={id}>
        <Pokemon dataItem={dataItem} />
      </li>
    );
  });
  return (
    <div>
      <ul className="list">{item}</ul>
    </div>
  );
};
export default PokeList;
