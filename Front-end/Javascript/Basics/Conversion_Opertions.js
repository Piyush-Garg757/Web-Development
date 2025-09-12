let score = "33";
console.log(typeof score);
let value_in_number = Number(score); //type conversion
console.log(typeof value_in_number);

// abhi to 33 tha to easily ho gaya but agar kisi ne 33abc diya hota tab?
console.log("\n");

let score1 = "33abc";
console.log(typeof score1);
let value_in_number1 = Number(score1);
console.log(typeof value_in_number1);
console.log(value_in_number1);
// ismein humne dekha ki convert to kar diya but jab number print kara ke dekha to NaN aya jo ki ayega kyuki 33abc ko number mein convert nahi kiya ja sakta
// aise hi same null pe karenge to 0 dega aur undefined NaN hi dega aur true  aur false ke liye 1 aur 0
// aise hi boolean conversion mein 1 ka true 0 ka false aur agar "" doge to false aur "abc" to true

// Operations
console.log("\n");

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)
let value = 3;
let negvalue = -value;
console.log(negvalue);

let s1 = "Hello ";
let s2 = "Piyush ";
let s3 = s1 + s2;
console.log(s3);

// confusion
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
// ye thoda dhyaan rakhne ki cheez hai

console.log(true);
console.log(+true); // 1 ata hai
// console.log(true+); not  acceptable
console.log(+""); // 0 ata hai
// console.log(""+); not acceptable

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // this is acceptable but not readable

// let a = 1;
// a++;
// ++a; ye normally vese hi work karta hai jaise ab tak dekha

console.log("\n");

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// null vale ka reason ye hai ki comparisons (>,>=,<,<=) aur equality (==) alag alag tareeke se work karte hain comparisons null ko number mein convert kar dete hain isiliye null >0 which is 0>0 is false and null>=0 is true and null==0 is false as it is not converting
// inmein results predict nahi karr sakte hain

// iske baad ata hai === joki data type bhi check karta hai "2" == 2 is true but "2" === 2 is false aise hi != aur !==