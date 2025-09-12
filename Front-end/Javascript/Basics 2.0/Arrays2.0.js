const marvel_heroes = ["Thor", "Iron man", "Hulk"];
const dc_heroes = ["Superman", "Flash"];
marvel_heroes.push(dc_heroes); //dc_heroes ko  as a array treat kareg as a single unit
console.log(marvel_heroes);
console.log(marvel_heroes[3]);
console.log(marvel_heroes[3][1]);
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);
// matlab concat karne se as a single unit treat nahi karega

// ek aur unique way hota hai ise acheive karne ka which is spread
// spread kar deta hai yani har ek ekement ko alag alag kar deta hai but iska jadu ek level tak hi chakta hai agar  array ke andar array ho to andar vale array ko nahi todega bas bahar vale ko spread karega
const full_heroes = [...marvel_heroes, ...dc_heroes];
console.log(full_heroes);

// agar array kom bilukl todna hai jisse array ke andar vala array bhi tut jaye to use flat
const arr = [1, 2, 3, 4, [5, 6, 7, [8, 9]]];
const arr2 = arr.flat(2); // yahan depth deni hoti hai jaise upar depth 2 thi isiliye 2 diya yahan hum infinity bhi de sakte hain jisse ki humein fikar nahi karni padegi vo apne aap dekh lega kitni depth hai
console.log(arr2);

console.log(Array.isArray("Piyush"));
console.log(Array.from("Piyush"));
// aise bhi array bana sakte hain
const s1 = 100;
const s2 = 200;
const s3 = 300;
console.log(Array.of(s1, s2, s3));
