import { useEffect, useState } from "react";

function useCurrenctinfo(currency) {
  const [data, setdata] = useState({}); // iske andar humne {} isiliye dala taki gar koi data na aaye to by default ye value rahe iske andar
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{currency}.json`,
      //   ye ek kamal ki api hai jo humein currency conversion deti hai har ek currency se dusri kisi bhi currency ke liye
      // api se jo response ata hai vo string ki format mein hota hai to hum use pehle json mein convert karenge
      // fetch mein we know chaining ho jati hai .then mein iss fetch ka response ayega jo ki ek callback hai
    )
      .then((res) => res.json())
      .then((res) => setdata(res[currency])); // ye humne aise socha ki pehle run karake dekha api to usmein jaise hi upar url mein currency change kar rahe usek according jo output mil raha tha use dekha fir socha
    console.log(data);
  }, [currency]); // kyuki iski dependency currrency hai   jab bhi currecy change hogi  vapas api cal honi hai aur uska data fetch karna hai
  return data;
}
export default useCurrenctinfo;
