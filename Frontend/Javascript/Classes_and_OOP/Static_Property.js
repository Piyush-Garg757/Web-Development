class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
//   jab hum kisi property ka acces har instance ko ahi dena chahte to hum static use karte hain
  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())

// extend kar doge tab bhi uss function ka access dene se rokega static
class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId());
