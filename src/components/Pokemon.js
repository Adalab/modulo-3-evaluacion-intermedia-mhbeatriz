import PropTypes from "prop-types";
const Pokemon = (props) => {
  const itemTypes = props.dataItem.types.map((type, id) => {
    return <li key={id}>{type}</li>;
  });
  return (
    <div className="list-item">
      <img
        className="image"
        src={props.dataItem.url}
        alt={props.dataItem.name}
      />
      <h2 className="list-title">{props.dataItem.name}</h2>
      <ul className="list-types">{itemTypes}</ul>
    </div>
  );
};

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.object,
};
