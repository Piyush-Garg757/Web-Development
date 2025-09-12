class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // get email(){
  //     return this._email.toUpperCase()
  // }
  // set email(value){
  //     this._email = value
  // }

  // ab agar kkoi humse password mange aur humein ye messge retrn karna ho ki nahi denge ya kuch bhi to uske liye get ka use karte hain
  get password() {
    return this./*_*/ password.toUpperCase();
  }
  //   get dete hian to saath mein set bhi dena mandatory hota hai
  set password(value) {
    this./*_*/ password = value;
  }
  //   ab yahan bhi password set kar diya upar bhi     this.password = password; set kiya hai to ye error dega ??
  // to yahan se error ati hai maximum call stack exceeded kyuki upar constructor bhi set kar raha hai password aur get aur set bhi
  //   to isse bachne ke liye humne set mein _password use kiya to ek naya hi variable bana diya hai but issue ab bhi ayega aur eb tak to set mein aa raha tha ab get meein ayega kyuki do alag alag variavble ho gaye hain
  //   to hum get mein bhi _password laga denge to ab humara issue resolve ho jayega
}
const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.password);
