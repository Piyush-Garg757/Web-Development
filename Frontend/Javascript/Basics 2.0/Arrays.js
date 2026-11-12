const arr = [1, 2, 3, 4, [5, 6, 7, 8, 9]];
// ismein zaruri nahii same type ke elements ho upar vali array meon hi agar "Piyush" aur true bhi add kar dete to koi dikkat nahi hoti vo tab bhi array hoti
// js arrays are resizable
// copy operations in javascript arrays create shallow copies i.e. with the same reference point
console.log(arr);
console.log(typeof arr);

console.log("\n");

// const arr2 = new Array(1, 2, 3, 4, 5); aise bhi declare kar sakte hain koi difference nahi hota
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(78); // starting mein add karta hai
console.log(arr);
arr.shift(); // starting se remove karta hai
console.log(arr);
console.table([arr.indexOf(90), arr.includes(4)]);

console.log("\n");

const arr2 = arr.join(); // string mein convert kar deta hai
console.log(arr2);
console.log(typeof arr2);

console.log("\n");

const array = [1, 2, 3, 4, 5];
console.log("A", array);

const mna1 = array.slice(1, 3);
console.log(mna1);
console.log("B", array);
// ismein 3 index vala element include nahi hoga
const mna2 = array.splice(1, 3);
console.log(mna2);
console.log("C", array);
// ismein 3 index vala element include hoga

// *** most important difference ye hai ki slice ein bas utna portion print karega jitne ki need hai but splice mein vo utne part ko alag hi kar dega aur original array mein bas bache hue elements bachenge ***
