/*if - else
if (condition) {        && ||
      
} else {

}*/
/*if (true) console.log("dDG"), 
console.log("rgsVfr"); ye code to valid hai commas se scope badha sakte hain aage ki lines tak bina {} use kare but enreaadabl hai so not advisable*/

// switch case
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

// falsy values - 0,-0,false,"",null,undefined,NaN,Bigint-0n inn sab values ko falsy mana jata hai inke alava sab truthy values hain
// truthy values - " ","0","false",[],{},function(){}
// false==0 false=='' 0='' ye sab true hain

// how to check for empty array and empty object
let user = [];
if (user.length == 0) {
  console.log("Array is empty");
}
let obj = {};
if (Object.keys(obj).length == 0) {
  console.log("Object is empty");
}

// nullish coalescing operator (??) : null undefined
// kabhi humare paas backend se do values aa jati hai tab ye useful hota hai
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = null ?? undefined;
console.log(val1);
console.log(val2);
console.log(val3);
