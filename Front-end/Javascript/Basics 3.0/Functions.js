function say_my_name() {
  console.log("P");
  console.log("i");
  console.log("y");
  console.log("u");
  console.log("s");
  console.log("h");
}
say_my_name(); // say_my_name jab tak ye likha ye tha function ka reference aur jab aage() laga diya vo hua uska execution

function add_two_numbers(number1, number2) {
  // yahan number1 aur number2 parameters kehlate hain aur neeche jab call karte hain tab jo dete hain tab vo arguments kehlate hain
  let result = number1 + number2;
  return result;
}
let addition = add_two_numbers(3, 4); // arguments nahi denge to NaN dega as output
console.log(addition);

function user_logged_in(username /*= "Sam"*/) {
  //yahan default value de sakte hain jaaise sam di to agar hum kuch argument pass nahi karenge to by defaulr vo value le lega function
  if (!username) {
    console.log("Please enter a valid input");
    return;
  }
  return `${username} just logged in`;
}
console.log(user_logged_in("Piyush")); //yahan argument nahi denge to undefined just logged in ayega as output

// kabhi kabbhi jab humein shopping cart ki cheezein add karrni hongi tab humein pata nahi hoga ki kitne items hai
function calculate(...num) {
  //rest operator use karke hum ye acheive kar sakte hain
  return num;
}
console.log(calculate(100, 200, 300)); //ye sab elements ko array mein return kar dega fir hum array mein loop lagake sum to find kar hi sakte hain

// how to pass an object to aa function
const course = {
  name: "JS",
  price: 1364,
};
function object(anyobject) {
  console.log(
    `The course name is ${anyobject.name} and its price is ${anyobject.price}`
  );
}
object(course);
