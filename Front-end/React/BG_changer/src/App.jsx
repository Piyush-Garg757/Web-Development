import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("Violet");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flrx flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("Violet")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => setcolor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;



/*
onClick={() => setcolor("Yellow")}

ise aise hi kyu likha

iska reason ye hai ki onClick expect karta hai ki aap use ek function pass karo to
onClick={setcolor} aise likha to bhi to ek function hi pass kar rahe hain setColor ek fx hi to hai 

but baat ye hai ki aise likhne mein hum parameter pass kaha kar rahe hain ??
aur agar aise likha onClick={setcolor("Red")}  iss case mein humne function call kar diya to function jo return karega vo pass hoga onClick pe na ki function  to ye method bhi theek nahi hai 

isliye humne ek call back use kiya
*/