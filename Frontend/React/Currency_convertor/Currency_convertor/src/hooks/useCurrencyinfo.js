import { useCallback, useEffect, useState } from "react";

// Yaha hume apna custom hook banana hai and hook basically ek function hi hota hai jo ki ek functionality serve karta hai to hum ek function banayenge and use export kar denge so that it can be imported in any file and can be used as a hook 
function useCurrencyinfo(currency) {
  // ab yaha currenct info ke liye humein api call karna padega but hum chahte hain ki page load hote hi api call ho jaye and humare paas data aa jaye smo hum apne custom hook ke andar prefdefined hooks ka use kar sskte hain and hum useEffect ka use karenge
  let [data, Setdata] = useState({}); // yaha useState me empty object {} le liya kyuki agar api se response empty aya to uss case ke liye
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
    )
      .then((res) => res.json()) // jo response aya api se vo string me ata hai to use JSON me convert karane ke liye humne ye use kiya
      .then((res) => Setdata(res[currency])); // jab humne api ka url web pe dala to humein dikha ki ek object tha jisme ek parameter date tha jo humare kisi kaam ka nahi tha and dusra parameter jo currency daal rahe the usi naam se tha  so humne object me se uss parameter ka sab data le liye and use store kara liya iss step me data naam ke variable me
    // Ye api key har currency se har dusir currency me conversion rules deti hai
  }, [currency]); // jab jab currency change ho tab tab and page load hote hi ye function chalna chahiye ho humne yaah dependency me currency daal di
  return data;
}

export default useCurrencyinfo;