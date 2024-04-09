import "./App.css";
import { useState } from "react";
import CurrencyInput from "./components/CurrencyInput";

function App() {
  const [input, setInput] = useState({
    krw: 0,
    usd: 0,
  });

  const onChangeInput = (name, value) => {
    if (name === "krw") {
      setInput({
        krw: value,
        // 4월 9일 달러환율 기준
        usd: value / 1354.84,
      });
    } else {
      setInput({
        krw: value * 1354.84,
        // 4월 9일 달러환율 기준
        usd: value,
      });
    }
  };

  return (
    <div className="App">
      <section>
        <h1>환율 변환기 (KRW-USD)</h1>
      </section>
      <section>
        <CurrencyInput
          name={"krw"}
          value={input.krw}
          onChangeInput={onChangeInput}
        />
        <CurrencyInput
          name={"usd"}
          value={input.usd}
          onChangeInput={onChangeInput}
        />
      </section>
    </div>
  );
}

export default App;
