const promise1 = new Promise(function (resolve, reject) {
  // do an async task
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

// resolve ka conneection .then se hota hai but unko connect karnee ke liye upar resolve call bhi karna padega
promise1.then(function () {
  console.log("Promise is consumed");
});

// upar jo kara tha use aise bhi kar sakte hain
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve();
  }, 100);
}).then(function () {
  console.log("Promise 2 consumed");
});
// ek interesting cheez - dono promise mein jiska timout kam hai pehle vo hi consume hoga ye hum programme ko run karke bhu dekh sakte hain

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ Username: "Piyush", User_id: "apiyushgarg2006@gmail.com" });
  }, 1000);
});
promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  let error = true;
  if (!error) {
    resolve({ Username: "Piyush", User_id: "apiyushgarg2006@gmail.com" });
  } else {
    reject("Something went wrong");
  }
}, 1000);
// ab jaise resolve ka connection then se hota hai vese hi reject ka catch se hota hai
// aur in then aur catch mein chahining bhi ho sakti hai
promise4
  .then((user) => {
    console.log(user);
    return user.Username;
  }) // upar vaal then jo return karega vo uske neeche vale mein jayega
  .then((Username) => {
    console.log(Username);
  })
  .catch((error) => {
    {
      console.log(error);
    }
  })
  .finally(() => {
    console.log("The promise is finally resolved or rejected");
  });

const promise5 = new Promise(function (resolve, reject) {
  let error = true;
  if (!error) {
    resolve({ Username: "Javascript", User_id: "apiyushgarg2006@gmail.com" });
  } else {
    reject("JS went wrong");
  }
}, 10);

async function Consume_Promise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
Consume_Promise5();
// then cath ya async await dono hi sybtax sahi hai koi bhi use kar sakte hain

// async function get_all_users() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// get_all_users();
// await ka kaam basically ye hota hau ki uss kaam ke hone mein time lagta hai to wait larta hai aur uss kaam ke hone ke baad hi aage badhta hai

// ab isi ko .then .catch se karte hain
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
/*fetch(...): sends a GET request to the URL.

.then(response => response.json()): converts the HTTP response into a usable JSON object.

.then(data => console.log(data)): prints the array of user objects to the console.

.catch(...): handles any errors in the entire fetch chain.*/


/* Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});*/



// humne itne saare promises diye hain fir bhi sabse pehlle fetch vala run ho raha hai      ise relate karo async vale folder mein ss image explanation se  vahan dekha tha ki fetch ke liye high priorty queue banti hai to vo pehle enter hogi call stack mein 