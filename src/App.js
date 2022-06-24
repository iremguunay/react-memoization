import "./App.css";

import { useState, useMemo } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // useMemo is a hook that caches the result of a function call
  const data = useMemo(() => {
    return calculateObject(number);
  }, [number]);
  //If we dont use useMemo, the data will be recalculated every time the number changes
  // const data = calculateObject()

  return (
    <div className="App">
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

function calculateObject(number) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}
  console.log("Calculating completed!");

  return { name: "Irem", number };
}

export default App;
