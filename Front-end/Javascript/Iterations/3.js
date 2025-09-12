const my_nums = [1, 2, 3];
const total = my_nums.reduce(function (accumulator, current_value) {
  console.log(
    `accumulator => ${accumulator} current value => ${current_value}`
  );
  return accumulator + current_value;
}, 0);
console.log(total);
// ismein ho basically ye raha hai ki accumulator mein current value jo ki pehle 1 fir 2 fir 3 hogi vo add ho rahi hai
// accumulator ki initial value vo hogi jo function end hone se ) isse pehle aur } iske baad , lagake di jayegi }, initial_value) kuch isstype se jo ki iss case mein 0 hai aur accumulator value ko store kar leta hai jjaise ki humne output bhi dekha ki uski value pehle 0 + 1 to 1 ho gayi fir 1 + 2 to 3 ho gayi fir 3 + 3 to finally 6 ho gayi jo ki end mein retur bhi kar diya

// to kuch iss tarah se kaam karta hai reduce
const total2 = my_nums.reduce((acc, currval) => acc + currval, 0);
console.log(total2);
// iska practical use to tab hai jab puri shopping cart ka sum nikalna ho