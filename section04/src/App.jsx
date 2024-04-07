import "./App.css";

// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

//화살표식 표현(함수식)
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };
// import Button from "./components/Button";

import { useState } from "react";
function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
      {/* <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button> */}
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            if (light === "OFF") {
              setLight("ON");
            } else {
              setLight("OFF");
            }
          }}
        >
          전구 끄기 / 켜기
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </>
  );
}

export default App;
