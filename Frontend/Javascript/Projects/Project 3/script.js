const time = document.getElementById("clock");
const date = new Date();
//  ab ye time to har baar update hote rehna chahiye isiliye humein interval set karna padega
setInterval(function () {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000); // yahan time milliseconds mein dete hain isiliye humne 1000 likha taki har ek second baad refresh ho
