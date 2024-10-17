import style from "../App.module.css";

const Display = ({ displayval }) => {
  return (
    <input className={style.display} type="text" value={displayval} readOnly />
  );
};
export default Display;
