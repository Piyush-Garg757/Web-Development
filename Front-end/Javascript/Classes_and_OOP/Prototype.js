let s1 = "Piyush         ";
console.log(s1.length);
// but hum chahte hain ki spaces count na ho
console.log(s1.trim().length);
// but maan lo 4 - 5 aise hain to sabmein baar baar ye itna bada thofi likhenge   hum chahte hain ki saari strings ke saath ek property aa jaye s.true_length jo ki unki true length ko de de

let my_heroes = ["Hulk", "Spidey"];
let hero_power = {
  Hulk: 250,
  Spidey: 453,
};
Object.prototype.Piyush = function () {
  console.log("Piyush is present everywhere");
};
// ye humne object ke liye prototype declare kiya hai ab hero_power bhi to ek object hi hai
hero_power.Piyush();
// humne padha ki har cheez basically object hi hai jo ki object_is_supreme vali image se bhi dekh sakte hain  array string function   to object ka prorotype unmein bhi hoga to humare paas ek array hai hi
my_heroes.Piyush();
// to ab ye property array string function sabke paas chali gayi
// aur koi prototype array ke liye define karenge to vo object ke paas ya string aur function ke paas nahi jayega jo ki object_is_supreme vali image se saaf dikh raha hai

// inheritance
const User = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport.makeVideo);
// to basically __proto__ aur  setprototypeof dono yehi kaam karte hin ki ek ki propety dusra bh access kar paye

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()