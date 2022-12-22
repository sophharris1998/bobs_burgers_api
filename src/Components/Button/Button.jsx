import "./Button.scss";

const Button = ({ handleClick, label }) => {
  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
