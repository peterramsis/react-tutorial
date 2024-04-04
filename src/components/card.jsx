import PropsTypes from 'prop-types';

const Card = (props) => {
    return (
        <h1>{ props.name }</h1>
    )
};


Card.PropsTypes = {
    name: PropsTypes.string
}

export default Card;