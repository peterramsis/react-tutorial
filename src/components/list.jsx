import PropsTypes from "prop-types";
const List = (props) => {
  const items = props.items;
  const listItems = items.map((item) => <li key={item.id}>{item.name}</li>);
  return <ul>{listItems}</ul>;
};

List.PropsType = {
  items: PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.string.isRequired,
      name: PropsTypes.string.isRequired,
    })
  ),
};

export default List;
