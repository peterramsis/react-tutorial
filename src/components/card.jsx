import PropsTypes from "prop-types";
import logo from "../assets/react.svg";
const Card = (props) => {
 

  return (
    <section className="bg-slate-50 p-5 shadow gap-2">
      <h1>{props.name}</h1>
    </section>
  );
};

Card.PropsTypes = {
  name: PropsTypes.string,
};

export default Card;
