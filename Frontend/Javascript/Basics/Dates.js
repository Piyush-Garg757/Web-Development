let date = new Date(); // ye ek objectt hoti hai
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toTimeString());
console.log(date.toUTCString());
// we can create date too
let created_date = new Date(2026, 0, 24); // yahan se ye conclude kar sakte hain ki months ki indexing 0 se hi shuru hoti hai ismein aur ismein hours seconds minutes ye sab bhi de sakte hain
console.log(created_date.toDateString());
let created_date2 = new Date("2023-01-23"); // different format aur yahan 14-01-2023 bhi de sakte hain
console.log(created_date2.toDateString());

let timestamp = Date.now();
console.log(timestamp);
// it given total milloseconds
// to convert into seconds
console.log(Math.floor(timestamp / 1000));