import style from "../App.module.css";

const ButtonCon = ({ onButtonClick }) => {
  const buttonName = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    ".",
    "=",
  ];
  return (
    <div className={style.buttonContainer}>
      {buttonName.map((buttonName) => (
        <button
          className={style.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonCon;
