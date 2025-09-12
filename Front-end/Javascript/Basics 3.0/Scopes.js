// var use na karne ka reason
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// console.log(a); //ye print nahi hoga jo ki acchi baat hai kyuki iska scope if else tak hi rehna chaiye
// console.log(b); //same
// console.log(c); //ye print ho jayega bahar isiliye ise use nahi karna chahiye

// kisi statement ya function tak ka scope hota hai block scope aur vese main code ka scope hota hai global scope
// *** bohot important interview question - google pe jake inspect karnr pe console mein jake vahan ka global scope alag hota hai aur humare yahan environment mein node mein global scope alag hota hai

const addone = function (num) {
  return num + 1;
};
console.log(addone(4));
// ye bhi ek tareeka hai function ko define karne ka aur isstype vale ko expression bhi bol dete hain
// difference dono mein ye hai ki iss function ko call iske neech hi kiya ja sakta hai matlab agar main console.log(addone(4)); iske upar le jaunga to error aa jayega but dsre method mein aisa nahi hota vahan error nahi ata vahan aise kar sakte hain
