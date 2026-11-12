// javascript ek synchronous language hai iska matlab ye single threaded hai ek ke baad ek karke hi execute hoga code 
// ismein kuch exceptions hum la sakte hai but by default ye synchronous hi hai


// blocking code - block the flow of programme - read file sync - ye aisa hai ki main kuch kaam karne ja raha hu tum ruko abhi code execution rok do
// non blocking code - does not block execution - reaad file async - ye aisa  hai ki main kuch kaam karne ja raha hu tum apna kaam karte raho
// kab kaunsa use karna hai ye use case pe depend karta  hai



// image explanation
/* humara js engine memory heao aur call stack se banta hai

web api humare paas browser pe hota hai aur obciosuly usmin dom bhi milta hai humko 
agar hum koi aur environmwnt us ekarenge jaise node to vahan dom nahi milega

yahan ek aur cheez hoti hai which is task queue  jo ki js ko fast aur asynchronous banata hai

jab bhi programme run hta hi to uska ek call sack banta hai usmein pehle global execution context banta hai aur ek ek karke programme bante hain aur jaise jaaise function execute hote han unhein unload kar diuya jata hai

ab asynchronous mein hum chahte hain ki ye kaam karke humein baad mein yaad dila dena 
to uske liye web api hota hai

ab maan lo humara command aya settimeout ka to usne web api ko call kar diya
to maan lo humne time diya hai 2 sec  to vo register call back mein register ho jata haiu ki ye kaam 2 sec baad karna hai 
humarer iss case mein 2 sec aad timeout karna hai
ab register call back uss task ko task queue mein dalta hai jo ki uss task ko vapas call stack mein daal deta hai 
aur obviosuly vo stack hai to upar se hi enter hoga vo bas arrow diagram comolex na ho isikiye neeche bana rakha hai*/
/* ab maan lo humne 3 comaand di - 
humne pehle 1 print karaya fir o timeout ke baad 2 aur fir 3 to kis order mein print hoga 
1 3 2 aise pront hoga kyuki bhale hi timeout 0 hai but upar jo process dekha usmein kuchh to time lagega */

/*kuch nayi api design hui hain js mein jaise fetch to uske liye thodi high priority queue banti hhai jise promise queue aur miicro task queue air fetch queue bhi kehte hain usmein bas priority thodi high hoti hai*/