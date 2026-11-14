import React, { useId } from "react";

function Inputbox({
  label, // from ayega ek card me and ek me to
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "", // ye humne isiliye dala hai taki agar user apna khud ka css dena chahe to de sake aur agar user kuch na de to empty daal diya
}) {
  const amountInputId = useId(); // ye bilkul end ka step hai optimisation ka to ise pura component design karne ke baad dekhna
  // basically From and To vale label ko amount vale section se bind karne ke liye hum ek unique id generste karte hain and ddono mein jake id = amountInputId de dete hain to dono ki id same hai to dono bind ho gaye
  // Iske liye as such iss hook ki need bhi nahi thi hum chahte to khud se hi koi bhi id de sakte the and dono jagah vahi same valuee de dete
  // Aisa na bhi karo to bhi kaam chal jata but theek hai humne is se ek naye hook ke baare me seekh liya
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {" "}
      {/* yaha pe jo css likhi hai vo javascript ke andar `` lagake likhi hai kyuki yahi humm use rko khud ki css dene ka allow karenge  nahi to normally hum aise nahi likhte hain css  */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId} // yaha humne useId vale ka use kiya
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId} // yaha humne useId vale ka use kiya
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable} // if the amount is disabled
          value={amount} // the value is the amount
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } // ye isiliye ki agar amount change ho to hum function dobara call kar sakein lekin 2 baar isiliye likha kyuki maan lo function exist hi na karta ho and kyuki ye function hai so hum ismeinn koi defaault value bhi pass nahi kar sakte hain  so hum && ka use karte hai and AND lete hai pehli valu se pata lag jata hai ki function exist karta haiki nahi     agar karta hai tabhi vo aage bahdta hai and use execute karta hai nahi to vahi ruk jata hai
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(Number(e.target.value))
          } // Same concept lag raha hai upar vala yaha pe jab bhi currency change hogi to iss field me value badalni chahiye so ispe onChange laga diya and event fire kar diya
          disabled={currencyDisable}
        >
          {/* Ab yaha humein sare options show karne honge to obviously manually type to karenge nahi loop se karenge  */}
          {/* <option value="usd">
                            usd
                        </option> */}
          {currencyOptions.map((currency) => {
            // Ab aise loop se bohot saare options bana rahe hain to humeiin yaha key use karni padti hai taki performance issues na aaye    ab vo key kya honi chahiye vo baad me dekhenge but abhi ke liye ye yaad rakho ki jab bhi aise loop se bohot saari values generate kara rahe ho to ek key use karni chaiye
            <option key={currency} value={currency}>
              {currency}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
// export karne ke liye ye tareeka bhi theek hai but ye bas chote projects ke liye sahi hai    bade projects ke liye hum kya karte hain hum index.js naam ki file banate hain components me hi and vaha se saare components export karte hain
