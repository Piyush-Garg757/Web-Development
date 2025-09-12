// js ka prototypal inheritance behaviour hota hai matlab usse koi cheez child se nahi mil rahi to vo parent grandparent tak jata rehtaa hai jab tak ki use null na mile
// har cheex js mein ek object hi hai

function multiply_by_5(number) {
  return number * 5;
}
multiply_by_5.power = 2;
console.log(multiply_by_5(3));
console.log(multiply_by_5.power);
console.log(multiply_by_5.prototype);

// hum jante hain ki . proprty object ki hai to function bhi ek tarah ka object hi hai

function Create_user(username, score) {
  this.username = username;
  this.score = score;
}
Create_user.prototype.increment = function () {
  this.score++;
};
Create_user.prototype.Print_me = function () {
  console.log(`${this.score}`);
};
const chai = new Create_user("Tea", 25);
const chaach = new Create_user("Chaach", 250);
console.log(chai);
console.log(chai.Print_me());

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/