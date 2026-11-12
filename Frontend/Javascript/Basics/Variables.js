const account_id = 14453;
let account_email = "apiyushgarg2006@gmail.com";
var account_password = "12345";
account_city = "Palwal";
let account_state;
// account_id = 2345   NOT ALLOWED TO CHANGE
account_email = "Gargsahab@gmail.com";
account_password = "356";
account_city = "Faridabad";
// baaki teenon cheezein badal gayi hain matlab unhein badal sakte hain
// to constant declare karne ke liye use const jise badal nahi sakte and for variables use let and not var as it haas some scope problem aur jo third method se variable declare kiya vo bhi valid hai but use bhi use karna is not preferred
// aur humne ye bhi dekha ki js mein agar hum ek variable ko koi value na dein to vo use undefined manti hai
console.table([
  account_id,
  account_email,
  account_password,
  account_city,
  account_state,
]);
// conssole.log se ek hhi value print hoti hain isiliye ke tabular way mein vakues print karne ke liye we use console.table
