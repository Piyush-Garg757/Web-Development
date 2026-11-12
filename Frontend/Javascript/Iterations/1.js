// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("\n");

// kisi bhi word ko select karke agar use select kare kare uske next duplicate word ko bhi saath mein select krna chahte ho to use ctrl + d aur aise hi aage aurb duplicates choose karne hain to utni hi baar db press kare jao ctrl select kare kare
// break and continue as also there

// while loop
let i = 1;
while (i <= 10) {
  console.log(i++);
}
console.log(`The value of i is ${i}`);
console.log("\n");

// do while loop
i = 1;
do {
  console.log(i++);
} while (i <= 10);
console.log(`The value of i is ${i}`);
console.log("\n");

// for of loop - array specific
const arr = [1, 2, 3, 4, 5, 7];
for (const i of arr) {
  console.log(i);
}
// bas ismein values bata do fir kuch increment vagera ya end condition kuch nahi dena ye khud dekh lega vo

// Maps
const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United States Of America");
map.set("IN", "India");
console.log(map);
// jab humne ise print kiya to india do baar nahi aya => to maps unique values ke liye jane jate hain aur order bhi maintain karte hain
// ab ismein loop
for (const [key, value] of map) {
  console.log(`${key} => ${value}`);
}
// this is syntax to be remembered

// ye for of vala method objects pe kaam nahi karega
// uske liye hum use karte hain for in loop but aisa nahi hai ye bas objects pe lagta hai
let myobj = {
  GOW: "God of War",
  NFS: "Need For Speed",
  GTA: "Grand Theft Auto",
};
console.log(myobj);
for (const key in myobj) {
  console.log(`${key}: '${myobj[key]}'`);
}
// syntax to be remembered

// ise array ke liye bhi use kar sakte hain
const myarr = ["God of War", "Need For Speed", "Grand Theft Auto"];
for (const key in myarr) {
  console.log(myarr[key]);
}
console.log("\n");

// maps pe mahi lagega ye