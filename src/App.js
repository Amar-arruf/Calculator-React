import { useState } from "react";
import Botton from "./Component/Botton/Botton";
import BottonBox from "./Component/BottonBox/BottonBox";
import Screen from "./Component/Screen/Screen";
import Title from "./Component/Title/Title";
import Wrapper from "./Component/Wrapper/Wrapper";

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
];

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    });
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const resetClickHandler = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const delClickHandler = () => {
    setCalc({
      ...calc,
      num:
        calc.num.toString().length === "1"
          ? 0
          : Number(
              calc.num
                .toString()
                .slice(0, Number(calc.num.toString().length) - 1)
            ),
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  return (
    <Wrapper>
      <Title />
      <Screen value={calc.num ? calc.num : calc.res} />
      <BottonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Botton
              key={i}
              className={
                btn === "="
                  ? "equals"
                  : btn === "DEL"
                  ? "remove"
                  : btn === "RESET"
                  ? "remove span"
                  : ""
              }
              value={btn}
              onClick={
                btn === "."
                  ? commaClickHandler
                  : btn === "RESET"
                  ? resetClickHandler
                  : btn === "DEL"
                  ? delClickHandler
                  : btn === "/" || btn === "+" || btn === "-" || btn === "x"
                  ? signClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </BottonBox>
    </Wrapper>
  );
}

export default App;
