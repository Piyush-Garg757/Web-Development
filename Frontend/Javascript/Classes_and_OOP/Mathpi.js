/*console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);*/
// to humne dekha ki isko overwrite nahi kar sakte hain
/*console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));*/
// aise change kar sakte hain but humein math.pi ki value hi badalni hai to donno mein farak hai
const pi = Object.getOwnPropertyDescriptor(Math, "PI"); // isse humko descriptor properties mil jati hain
console.log(pi);
// to humne iska output dekha to ye writable nahi hai
// to hum Math.PI ki value over write nahi kar sakte hain

// to ab hum dekhenge ki kisi object ke liye ue properties kaise set kar sakte hain

const Heroes = {
  1: "Thor",
  2: "Spidey",
  3: function () {
    console.log("Pit gaya hero");
  },
};
console.log(Object.getOwnPropertyDescriptor(Heroes, 1));
Object.defineProperty(Heroes, 1, {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(Heroes, 1));
for (let [key, value] of Object.entries(Heroes)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
// humne upar 1 ka enumerable false kar diya tha isiliye vo iterate nahi hua 
// aur function ka check jo lagaya taki code fate na vo real world problem hai

// interview level problem!!!!