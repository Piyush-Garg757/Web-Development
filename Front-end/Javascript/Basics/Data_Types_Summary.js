// primitive (call by value) - string,boolean,numvber,null,undefined,symbol,bigint
// non primitive or reference type (call by reference) - array,objects,functions
// JavaScript is dynamically typed — variables can change types, and you don’t have to declare their types explicitly.

const id = Symbol("123");
const id2 = Symbol("123");
console.table([id, id2, typeof id, typeof id2, id == id2, id === id2]);
// ye same nahi hote hain chahe == check karo ya ===

const bignumber = 258241387374979734174n; // end mein n lagane se vo bigint ban jatga hai
console.log(typeof bignumber);

// arrays
let a1 = [1, 2, 3, 4, 5];
let a2 = ["Piyush", "Nishant", "Akash"];
let obj = {
  name: "Piyush",
  age: 19,
};
console.table([a1, a2, obj, typeof a1]);
const my_function = function () {
  console.log("Hello world");
};
console.log(my_function);
console.log(typeof my_function);
// jo bhi non primitive hain unka data type object hi ata hai bas function ka data type object function kaha jata hai isiliye function hi ata hai

// stack memory(primitive)  heap memory(non-primitive)
console.log("\n");

let n1 = 123;
let n2 = n1;
n2 = 987;
console.log(n1);
console.log(n2);
// primitive data type hai jise stack memory milti hai aur jismein copy banti hai reference nahi isilioye n1 badla nahi

let obj1 = {
  name: "Piyush",
  age: 19,
};
let obj2 = obj1;
obj2.age = 90;
console.log(obj1);
console.log(obj2);
// yahan heap memory use hui jismein reference diya jata hai na ki copy isiliye pehle vala bhi change ho gaya