function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  SetUsername/*.call*/(/*this,*/ username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

/* Step-by-Step Breakdown:
✅ Step 1: new createUser(...) is called
const chai = new createUser("chai", "chai@fb.com", "123");
This creates a new empty object internally.
this inside createUser now refers to that new object: this = {}.

✅ Step 2: Inside createUser(...)
SetUsername(username);  // SetUsername("chai")
The function SetUsername is called, but without .call(this).
So this inside SetUsername does NOT refer to the new user object.
Instead:
In non-strict mode, this defaults to the global object (e.g., window in browsers).
In strict mode, this is undefined, causing an error (if you're assigning properties).
So:
this.username = username;  // 👈 Sets `username` on the wrong object!
And:
console.log("Called");     // ✅ So this still prints

✅ Step 3: Back in createUser(...)
this.email = email;
this.password = password;
These do run properly, because this here refers to the new chai object.

✅ Step 4: Final output

console.log(chai);
The object you get:
createUser { email: 'chai@fb.com', password: '123' }
Notice: username is missing. Because this.username = username happened in the wrong context.*/

// to iss problem ki wajah se hum call se karte hain aurr bas call hi nahi this bhi dena hoga kyuki hum jante hain har object ka ek apna this hota hai aur jis function ko call kar rahe hain vo apna kaam apne this mein kar raha hai to humein use neeche vale function ka this bhi bhejna padega taki vo kaam usmein kare
