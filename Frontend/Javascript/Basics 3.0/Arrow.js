const user = {
  username: "Piyush",
  id: 13632,
  welcome_message: function () {
    console.log(`${this.username}, Welcome to this site`);
    console.log(this);
  },
};
user.welcome_message();
user.username = "Sam";
user.welcome_message();
// ye possible isiliye ho paya kyuki humne this ka use kiya jo ki cheezon ko curent context mein le ata hai isiiye humne vahan pe thid likha na ki username
console.log(this);
// jab humne this fuction ke andar print kiya tab usne pura obbject print kar diya but jab bahar print kiya tab empty object kyuki vo global ko refer kar raha hai tab isse ye pata lagta hai ki this current context ko refer karta hai
// ek aurr baat jab hum ise brrowser mein run karenge tab alag output ayega kyuki uske liye global object window object hai
// function ke andar this work nahi karta

// Arrow function
const add = (n1, n2) => {
  return n1 + n2;
};
// const add = (n1, n2) => n1 + n2; ise aise bhi define kar sakte hain
// const add = (n1, n2) => (n1 + n2); aise bhi aur ismein ek aur baat parenthesis use karenge to return use nahi karna padega but {} use karenge to return keyword use karna hoga
console.log(add(3, 4));
const add1 = (n1, n2) => ({ username: "Piyush" }); // object return karane ke liye yahi way mein karna hoga 
console.log(add1());
