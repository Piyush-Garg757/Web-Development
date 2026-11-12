let score = 400;
console.log(score);
console.log(typeof score);

let s = new Number(300.2101);
console.log(s);
console.log(typeof s);
// iss case mein as an object define hota hai
console.log(s.toString().length);
console.log(s.toFixed(2));
console.log(s.toPrecision(3)); // it returns a string upto the number given after rounding it off

let n = 100000000;
console.log(n.toLocaleString("en-IN")); //commas lag jaate hain by default us system ke hisaab se agar bracket mein kuch na do to aur 'en-IN' de do to indian system ke hisaab se
console.log(Number.MAX_VALUE);

console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(2.35));
console.log(Math.ceil(34.34));
console.log(Math.floor(13.34));
console.log(Math.random()); // alwways a random value between 0 and 1

// to get a value in a given range
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // remember
