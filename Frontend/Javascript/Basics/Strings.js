const name = "Piyush";
const age = 19;
console.log(name + " " + age + " ABC"); // outdated
console.log(`Hello my name is ${name} and my age is ${age}`);
console.log(name[1]);

const name2 = new String("piyush"); // ye ek alag way hai string define karne ka
console.log(name2.__proto__);
console.log(name2.length);
console.log(name2.toUpperCase());
console.log(name2.charAt(2));
console.log(name2.indexOf("i"));

const str = name2.substring(0, 4); // last vala is not included
console.log(str);
const str2 = name2.slice(-6, 4); // last vala is not included aur ismein negative values bhi de sakte hain
console.log(str2);
const s = "     Piyush     ";
console.log(s);
console.log(s.trim());

const url = "https://piyush.com/piyush%20garg";
console.log(url.replace("%20", "-"));
console.log(url.includes("piyush"));

const h = "piyush garg com";
console.log(h.split(" ")); // " " ke basis pe split kar dega string ko

const greet = "Hello";
console.log(greet.concat(" World.", " Let's study js"));

// endsWith(searchString)
// endsWith(searchString, endPosition)
const str1 = "he quick brown fox jumps over the lazy dog.";
console.log(str1.endsWith("dog.")); // true
console.log(str1.endsWith("over the")); // false
console.log(str1.endsWith("quick", 19)); // false

const ourMotto = 'We want justice! \n';
console.log(ourMotto.repeat(5));