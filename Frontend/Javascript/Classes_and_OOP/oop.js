// object literal yani humara normal object hi
const user = {
  username: "Piyush",
  Logged_in_number: 8,
  get_username: function () {
    console.log(this.username);
    console.log("\n");
    console.log(this);
  },
};
console.log(user.get_username());
console.log("\n");
console.log(this);

// new keyword humara constructor function hota hai

function user1(username, Logged_in_number) {
  this.username = username;
  this.Logged_in_number = Logged_in_number;
  return this;
}
const u1 = new user1("Piyush", 6);
const u2 = new user1("Akash", 4);
console.log(u1);
console.log(u2);

// humne to kabhi u2 print hi nahi karaya but usne u1 ki values overwrute kar di  iisliye humein constructor function new chshiye hita hau kyuki vo humein naya instance deta hai

/*new keyword use karte hi ek empty object create hota hai jise instance kehte hain 
2 nd step ye hota hai ki constructor function call hota hai new keyqord ke karan aur 3rd mein ye jitne bhi arguments hain unko pack karta hai aur this mein bhej  deta hai aur 4th step mein humein mil jata hai*/

console.log(u1.constructor);
// isse pata chalta hai ki constructor property basically reference hoti hai khud hi ke bare mein

/*In JavaScript, functions are also objects, and we often create instances of functions using the new keyword when treating functions as constructor functions.

A new object created using a constructor function (with the new keyword), and that object inherits from the function's prototype.*/
console.log(u1 instanceof user1);
console.log(u1 instanceof Object);