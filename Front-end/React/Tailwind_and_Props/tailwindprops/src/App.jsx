import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    name: "Piyush Garg",
    age: 19,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-3 rounded-xl">Tailwind css</h1>
      <Card channel="Piyush" someobj={obj} btn="Hello" />
      <Card channel="ABC" btn="Hello dosto"/>
    </>
  );
}

export default App;
