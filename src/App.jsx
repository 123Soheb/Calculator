import style from "./App.module.css";
import Display from "./component.jsx/Display";
import ButtonCon from "./component.jsx/Buttoncon";
import { useState } from "react";
function App() {
  const [calval, setcalval] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText == "c") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  };
  return (
    <div className={style.calculator}>
      <Display displayval={calval}></Display>
      <ButtonCon onButtonClick={onButtonClick}></ButtonCon>
    </div>
  );
}

export default App;
