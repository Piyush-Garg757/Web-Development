const myarr = ["God of War", "Need For Speed", "Grand Theft Auto"];
// for each (mostly used for arrays )
myarr.forEach(function (item) {
  console.log(item);
});
// ise arrow function ke roop mein bhi likh sakte hainn
myarr.forEach((item) => {
  console.log(item);
});
console.log("\n");

myarr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
console.log("\n");

// ek aur way
function printme(item) {
  console.log(item);
}
myarr.forEach(printme);

console.log("*************************************************");
const Database = [
  {
    language_name: "Python",
    abbr: "py",
  },
  {
    language_name: "C++",
    abbr: "cpp",
  },
  {
    language_name: "Javascript",
    abbr: "js",
  },
];
Database.forEach((item) => {
  console.log(item.language_name);
});
console.log("*************************************************");

// for each loop kuch return nahi karta hai (undefined)
// so isiliye we use filter function kyuki vo values return karta hai
const my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const my_value = my_array.filter((item) => item > 5);
const my_value = my_array.filter((item) => {
  return item > 5;
});
// ye humne peeche seekha tha ki {} use karenge to return use karna hi padega aur () use karte hain ya nahi bhi use karte kuch to khud return ho jata hai
console.log(my_value);

// agar hum chahte hain ki foreach ka use karke hi karna hai ye to aise acheive kar sakte hain
const new_array = [];
my_array.forEach((item) => {
  if (item > 5) {
    new_array.push(item);
  }
});
console.log(new_array);

// for each ko hum array jiske andar objects hote hain uske liye bhi kar sakte hain

const array2 = my_array.map((item) => {
  return item + 10;
});
console.log(array2);

// chaining
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a2 = a1
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 41);
console.log(a2);
// basically map aur filter ke beech difference ye hai ki koi operation karana ho pure pe to map use karte hain aur kisi condition ke liye check karna ho to filter use karte hain