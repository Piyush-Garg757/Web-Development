import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;
  const subtractvalue = () => {
    set_counter(counter - 1);
  };
  const addvalue = () => {
    set_counter(counter + 1);
  }; // But ye function kaam nahi karta jaisa expect kiya tha   UI Updation mein problem ata hai   to iske liye hum hooks use karte hain

  // import { useState } from "react";   ye hi line hooks ko import karti hain
  // useState()  ismein koi bhi data type de sakte hain int string char array function object  aur ye return humesha array karta hai 2 cheezon ki
  let [counter, set_counter] = useState(15); // yahan set_counter ek method hai jo control karega counter ko
  // iske baad humein aur kahi kuch change karne ki need nahi hai apne aap jab bhi set_counter call hoga tab apne aap jahan jahan counter use kiya hai update ho jayega

  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={subtractvalue}>Subtract value</button>
    </>
  );
}

export default App;

/* interview question
  maan lo addvalue kuch aisi hoti
  const addvalue = () => {
    set_counter(counter + 1);
    set_counter(counter + 1);
    set_counter(counter + 1);
    set_counter(counter + 1);
  }; 


  to ek baar button press karne pe kya hota ?
  value 16 ayegi ya 19 ?


  real answer hai ki value 16 hi ayegi
  reason ye hai ki humne virtual dom aur react fibre mein padha tha ki kaise updation handle hote hain  to vo iss request ko ek hi baar cater karega 


  but agar humein shi mein hi value 4 baar add1 karni ho to ?
  const addvalue = () => {
    set_counter(counter => counter +1);
    set_counter(counter => counter +1);
    set_counter(counter => counter +1);
    set_counter(counter => counter +1);
  }; 
  to asliyat mein set_counter ye jo method hai jo ki usetate humein deta hai vo ek callback hota hai   to agar hum arraw function ke form mein likhenge (counter) => { counter+1 }  to ye pehle pichle counter ki value fetch karega aur fir use update karega 
  */