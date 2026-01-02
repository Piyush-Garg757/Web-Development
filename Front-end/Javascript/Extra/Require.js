const fs = require("fs");
const data = fs.readFileSync(
  "C:\\Users\\piyush\\OneDrive\\Desktop\\Web Development\\Front-end\\Javascript\\Extra\\a.txt",
  "utf8"
); // yahan to files ke andar files hainbohot isilye proper address dena pada aise but agar itna complex structure na hota to normally easily ho jata a.txt likh ke bhi
console.log(data);

/*
1️⃣ require("fs") kya hai?
🔹 require
require Node.js ka function hai
Iska kaam: kisi module / file / library ko import karna
Browser mein jaise:
<script src="file.js"></script>  jaise #include<stdio.h>
Node mein waise:
require("module-name")
🔹 "fs" kya hai?
fs ka full form 👉 File System
Ye Node.js ka built-in module hai
Iska kaam:
file read karna
file likhna
file delete karna
folder banana / hatana
👉 Ye browser JS mein nahi hota, sirf Node.js mein hota hai.
🔹 Ye line actually kya karti hai?
const fs = require("fs");
✔️ Node ke File System tools ko load karke
✔️ fs naam ke variable mein daal diya
Ab tu fs ke functions use kar sakta hai 👇
fs.readFileSync(), fs.writeFileSync(), etc.
2️⃣ fs.readFileSync() kya karta hai?
fs.readFileSync(path, encoding)
🔹 Kaam
👉 File ko read karta hai (synchronously)
Synchronously matlab:
pehle file poori read hogi
tabhi next line chalegi

🔹 Tumhara case
const data = fs.readFileSync(
  "C:\\Users\\piyush\\OneDrive\\Desktop\\Web Development\\Front-end\\Javascript\\Extra\\a.txt",
  "utf8"
);
Iska matlab:
is path wali file khol
uska text UTF-8 format mein read kar
jo content mile use data variable mein store kar

3️⃣ "utf8" kyun likha?
Agar tu "utf8" nahi likhega:
fs.readFileSync(path)
To output aayega:
<Buffer 48 65 6c 6c 6f>
👉 Ye binary data hota hai (Buffer)
But:
"utf8"
👉 Node ko bolta hai:
“Text chahiye, binary nahi” */

// similarly we have readFile which does the task asynchronously
// aur asynchronously karenge to ek functonnas a hird aargument dena padega so that jab bhi iska kaam pura ho jaye to vo jake print ho jaye aur dusre ke saaath collide na kare
function print(err, data) {
  if (err) {
    console.log(`Error is ${err}`);
  } else console.log(data);
}
fs.readFile("a.txt", "utf8", print);
fs.readFile("b.txt", "utf8", print);
console.log("Done");

// to ismein we know call stack vala concept so sabse pehle done prin hoga fir uske baad a ar b mein se jismein bhi kam cntent hai aur fir agla  aur agar aisa ho ki a pehle orint ho gya to vo isiliye hai kyuki a choti file hai to ov jald process ho ja ri hai


/*
Ek expensive CPU operation
⏱️ 4–5 seconds leta hai
(pure JS, heavy loop, blocking
Usse pehle:
setTimeout(fn, 1000);
❓ Question
Kaunsa log pehle execute hoga?
✅ Final Answer (clear & short)
CPU operation ka log pehle execute hoga
setTimeout wala function baad mein
🔥 Reason (IMPORTANT)
❌ Common misunderstanding
“setTimeout 1 sec ka hai, to 1 sec baad hi chalega”
❌ Galat.
✅ Reality
setTimeout(fn, 1000);
Iska matlab:
“kam se kam 1 second baad, jab call stack free ho”
🧠 Execution Flow (step-by-step)
setTimeout(() => console.log("timeout"), 1000);
for (let i = 0; i < 1e10; i++) {} // 4–5 sec blocking
console.log("CPU done");
Timeline:
Time	Kya ho raha
0s	setTimeout register hua
0–5s	CPU heavy loop (blocking)
5s	"CPU done" print
5s+	event loop free hua
5s+	"timeout" print
🖨️ Output Order
CPU done
timeout*/