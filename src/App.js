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
  return (
    <Wrapper>
      <Title />
      <Screen />
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
              onClick={() => {
                console.log(`${btn} clicked`);
              }}
            />
          );
        })}
      </BottonBox>
    </Wrapper>
  );
}

export default App;
