// const user = new Object(); ye hain constructor object jo ki singleton hota hai baki aur koi difference nahi hota
// console.log(user);

const user = {
  email: "User@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Piyush",
      lastname: "Garg",
    },
  },
};
console.log(user);
console.log(user.fullname.userfullname.firstname);

console.log(Object.keys(user));
console.log(Object.values(user));
//interesting hai ye aur inka data type array ata hai aur ye method yaad rakhne ki cheez hai

console.log(Object.entries(user)); // array of arrays
console.log(user.hasOwnProperty("email"));

const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "A", 4: "B" };
const obj3 = { obj1, obj2 };
console.log(obj3); //ismein vahi dikatt  hui jo arrays mein hui thi
const obj4 = Object.assign(/*{},*/ obj1, obj2); //ismein {} ye vala parameter optional hota hai but dena chaiye aur agr ise nahi doge to obj1 mein jayega sara aur doge to ek naye mein
console.log(obj4);
console.log(obj1 == obj4);

// but yahan bhi arrays ki tarah spread vala concept use karenge most of the time
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

// kai baar humein array of objects milega
const users = [
  {
    name: "Piyush",
    id: 1,
  },
  {
    name: "Harsh",
    id: 2,
  },
  {
    name: "Teja",
    id: 3,
  },
];
console.log(users[0].name);

console.log("\n");

const course = {
  coursename: "Javascript from zero to hero",
  coursementor: "Piyush Garg",
};
// ab maan lo humein do teen baar coursementor print karna hai to hum baar baar course.coursementor likhna theek nahi rahega to hum destructuring karte hain
const { coursementor: mentor } = course; // is tarah se kar sakte hain basically typedef hai
console.log(mentor);
