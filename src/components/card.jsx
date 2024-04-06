import PropsTypes from "prop-types";
import logo from "../assets/react.svg";
const Card = (props) => {
  function handelFunction(e) {
    e.target.style.display = "none";
  }

  return (
    <section className="bg-slate-50 p-5 shadow gap-2" onClick={handelFunction}>
      <h1>{props.name}</h1>
      <img src={logo} alt="" />
    </section>
  );
};

Card.PropsTypes = {
  name: PropsTypes.string,
};

export default Card;
