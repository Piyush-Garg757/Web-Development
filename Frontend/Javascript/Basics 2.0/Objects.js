// jab bhi constructor se banega singleton hi banega aur jab bhi literals se banta hai singleton nahi banta

// object literals

const symbol = Symbol("Key1");
const myobj = {
  name: "Piyush",
  [symbol]: "This is a symbol used as a key",
  age: 19,
  email: "apiyushgarg2006@gmail.com",
};
// print karane ke 2 tareeke
console.log(myobj.email);
console.log(myobj["email"]); //yahi use karna as it is more prominent
console.log(myobj[symbol]);

// *** for using a symbol as a key in object we declared a symbol first at the top then in object we followed syntax [symbol] and while printing too we used the same syntax myobj[symbol] and this is a very important qustion for imerviews ***

// hum values ko freeze bhi kar sakte hain taki vo change na ho sakein
// Object.freeze(myobj);
// myobj.email = "Piyush@gmai.com"; this wont change it

myobj.greeting=function(){
    console.log("Hello mitro");
}
console.log(myobj.greeting());

// ab maan lo isi object ki ek key ko refer karna ho to 
myobj.greetingtwo=function(){
    console.log(`Hello ${this.name}`);//do cheezein hain dhyaan dene vali ek to `` iske andar likha hai aur ek this ka use kiya hai
}
console.log(myobj.greetingtwo());