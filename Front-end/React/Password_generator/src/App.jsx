import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number_allowed, setnumber_allowed] = useState(false);
  const [char_allowed, setchar_allowed] = useState(false);
  const [password, setpassword] = useState("");
  /* to ab hum password generator banayenge
  bu hume ye observe kiya ki ye password functoin nbaar bar call hoga jab char allowed honge jab number alowed hongearu jab length change hogi  to humein ye method baar baar call karnahai to uske liye hum ek naya hook use karenge useCallback  import { useState,useCallback } from "react";   */
  /* useCallback ka syntax aisa rehta hai useSate kihi tarah bas ismein do cheezein pass hoti hain useState(function,dependencies in the    form of array) */
  /* useCallback ka simple matlab:
  👉 Function ko memoize karna — taaki har render pe naya function na bane aur unnecessary re-renders na ho.
  🔥 Problem kya hoti hai bina useCallback ke?
  React me jab bhi component re-render hota hai:
  functions dobara create hote hain
  Agar wo function child component ko prop ke through ja raha ho,
  to child bhi faltu me re-render ho jata hai 😤
  ✅ useCallback kya karta hai?
  Ek same function reference ko yaad (cache) rakhta hai
  Jab tak dependencies change na ho, function same rehta hai */
  // setpassword bhi as a dependency count hoga
  const password_generator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
    if (number_allowed) string += "0123456789";
    if (char_allowed) string += "!@#$%^&*(){}[]|<>;:,./?~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setpassword(pass);
  }, [length, number_allowed, char_allowed]);

  // ab humei chahiye to ye ki page shuru mein load hote hi ya har baar page refresh hote hi passwordgenerator call ho ya number allowed change ho ya char allowed change ho to ye call ho to uske liye hum ek naya hook dekhte hain useRef
  // useRef kisi value ko store karta hai jo change ho sakti hai
  // lekin component re-render nahi karwati.
  useEffect(() => {
    password_generator();
  }, [length, number_allowed, char_allowed, password_generator]); // yahan dependencies ka matlab ye hai i inmein kuch bhi change hota hai to firse run kar do
  /*useCallback ki dependency array decide karti hai: function kab naya banega
  useEffect ki dependency array decide karti hai: effect kab chalega */

  // abhi ek kaam aur karna hai  copy vale button pe click karne pe humara    jiske liye hum naya hook use karenge useRef

  // useRef hook
  const password_ref = useRef(null);
  // ismein humein reference chahiye input field se jahan passwprd show ho raha hoga  to uske liye hum uss input field mein kuch add karenge
  const copy_password_to_clipboard = useCallback(() => {
    // yahan pe hum react ke through project bana rahe hain to humare paas window object available hai    but agar node.js ke through bana rahe hote to nahi hota
    // window.navigator.clipboard.writeText(password);
    // abhi is se kya hai na ki copy ho ja raha hai but humne yahna reference ka uyse to kiya hi nahi 
    // aur ek baat aur hai ki kaam to ho gaya but copy karne pe pata sa nahi lag raha ki ho gya  hai copy
    password_ref.current?.select();
    // is se kya ho raha hai select karte hi pata lag raha hai
    // ye ?.seelct ka matlab optionally select kara rahe hain agar null hoga top select nahi karega
    // ismein hum range bhi de sakte hain
    password_ref.current?.setSelectionRange(0,3); // is se ye hoga ki 0-3 tak ka hi password select hoga to kahi aisa optimisatoipn chahiye ho to humein ata hain
  }, [password]);
  // ismein dependency bas password hi hogi kyuki vese dekha jaye to aur bhi hain but password pe already humn vo sab dependency laga di hain to ispe lagane ki need nahi hai
  return (
    <>
      <div className=" max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            // reference taken
            ref={password_ref}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copy_password_to_clipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number_allowed}
              id="numberInput"
              onChange={() => {
                setnumber_allowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char_allowed}
              id="characterInput"
              onChange={() => {
                setchar_allowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
