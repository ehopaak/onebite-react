import "./App.css";

// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";

import Register from "./components/Register";

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

function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  return (
    <>
      {/* <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button> */}

      {/* <Bulb />
      <Counter /> */}
      <Register />
    </>
  );
}

export default App;
