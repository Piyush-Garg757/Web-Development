const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  //   ab kuch checks lagate hain
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    const result_line = document.querySelector("#result-line");
    if (bmi < 18.6) {
      result_line.innerHTML = "You are underweight";
    } else if (bmi < 24.9) {
      result_line.innerHTML = "You lie in normal range";
    } else {
      result_line.innerHTML = "You are overweight";
    }
  }
});
// form jab submit hota hai to data basically server ke paas chali jati hain to humein basically use rokna hai isiliye humne use kiya preventDefault()
/*innput values ko lene ke liye end mein.value lagaya aur hum jante hainki input as a string milti hain so humein convert karna hoga isiliye parseInt use kiya */
