/* jab bhi  javacsript humare programme ko run karta hai to 2 phase mein karta hai

jab bhi hum ek code js ko dete hain to ek global execution context banta hai aur humne padh liya hai ki this variable ke andar uss global execution context ko rakh diya jata hai aur humne dekh rakha hai ki browser ka gec alag ata hai aur node js envirronment ka alag

global execution context
functional execution context
evall execution context

jin do phase ki upar baat hui hai jinmein code run hota hai usmein se pehla hai:-

1. memory creation phase ya memory phase ya creation phase - jo bhi variables constant diye hain unke liye space allot kiya jata hai iss phase mein

2. execution phase - ismein sab ko execute kiya jata hai*/

let n1 = 4;
let n2 = 6;
function add(no1, no2) {
  let result = no1 + no2;
  return result;
}
let result1 = add(n1, n2);
let result2 = add(3, 5);
/*steps in which it will execute :-
1. global execution context mein isko allocate kiya jata hai this ke andar
2. memory phase -
    n1 - undefined
    n2 - undefined
    add - definition
    result1 - undefined
    result2 - undefined
3. execution phase -
    n1 - 4
    n2 - 6
    result1 - iska aab alag execution context banega - [new variable environment + execution thread] aur ab iske liye memory phase aur execution phase firse run hoga aur ek interesting baat ki iska kaam hone ke baad yani ki iss ffunction k eexecute hone ke baad ye delete bhi ho jata hai
        1. memory phase -
            no1 - undefined
            no2 - undefined
            result - undefined
        2. execution phase -
            no1 - 4
            no2 - 6
            result - 10
        ab ye result jayega global execution context main vale aur jo gec iss function ke liye bana tha([new variable environment + execution thread]) vo ab delete ho jayega
    result1 - 10
    result2 - same process repeat hoga aur ismein 8 aa jayega

ye hota hai pura process execution ka */

// yahan call stack bhi banta hai 