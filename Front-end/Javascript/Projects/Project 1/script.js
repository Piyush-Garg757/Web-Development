const body = document.querySelector("body");
const buttons = document.querySelectorAll(".box");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
