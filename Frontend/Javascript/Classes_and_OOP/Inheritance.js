class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // vo sab purana method tha call this a super uska saara kaam khud kar deta hai
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.logMe();
const masalaChai = new User("masalaChai");
masalaChai.logMe();

// some things to remember
console.log(chai instanceof Teacher);
console.log(User instanceof Teacher);
console.log(Teacher instanceof User);
console.log(chai instanceof User);