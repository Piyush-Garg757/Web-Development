import { useState } from "react";
import { Inputbox } from "./components"; // ye jo humne optimisation kiya tha uss wajah se hua hai ye index.js file call hoti hi hai to usi se ye import ho gaya alag se uss file ka naam nahi dena pada jisme component tha
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setconvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyinfo(from); // yaad karo humne jo hook banaya tha vo isiliye hi banaya tha ki hum api se data nikal ke ue kar sakein to hum yaha uss function ko call karenge and obviously from se jo jo conversions hain vahi chahiye humko so form pass kar denge and yaha humein vo data mil jayega

  // humne api ke url se dekha tha ki jo data mil raha tha vo sara object ke form me mil raha tha and uski keys me hi saair baaki currencies thi   to vahi to options hain humare jo hume use ko show karne hain neeche to ke liye     so hum Object.keys(currencyInfo)  se saari keys nikal lenge and unhein as a option de denge userko to select
  let options = Object.keys(currencyInfo);

  // Ab humne beech me ek swap button bhi diya hai jis se upar vala neeche aa jayega and neeche vala upar chale jayega so usmeinn basically from to ban ja raha hai and vice versa

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setconvertedAmount(amount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  }; // converted amoount ko set karne ke liye humne ismein de diya ki jis bhi me convert karna hai uske regarding jo vale hai us se * kar do amount to be converted ka so vo ho jayega

  // ye return pura humne utha liya hai md file se ab iske andar accordingly kaam karenge  and ye basic html se banta hai to ise bana bhi sakte hain hi araam se
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // default ko prevent karke hum chahte hain submit karne pe convert() call ho jaye
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox // ab yaha humara Inputbox component aa gaya jo humne banaya tha and humein ismein parameters pass karne hain bas yaha pe ab
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} // swap button ko click karne pe swap function call ho jaye
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable // iss tarah se de diya matlab true diya hai
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toLocaleUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;