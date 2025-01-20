import PropTypes from "prop-types";

const Vegetable = ({ name, price, emoji }) => {
  return (
    <div>
      <ul>
        <li>
          {emoji} {name} ${price}
        </li>
      </ul>
    </div>
  );
};

Vegetable.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  emoji: PropTypes.string.isRequired,
};

export default Vegetable;
