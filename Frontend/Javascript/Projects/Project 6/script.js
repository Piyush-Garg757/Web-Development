let start;
document.querySelector("#start").addEventListener("click", function (e) {
  if (!start) {
    // ye if vala safety check bhi professionalism ke liye check kara ki kahi null to nahi hai
    start = setInterval(function () {
      const body_bg = document.querySelector("body");
      const r = Math.floor(Math.random() * 256); // Use 256 for full RGB range
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      body_bg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }, 1000);
  }
});
document.querySelector("#stop").addEventListener("click", function (e) {
  clearInterval(start);
  start = null; // shows professionalism
});

// yahan random color generate ek aur tareeke se kar sakte the
/*const random_color = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
*/
