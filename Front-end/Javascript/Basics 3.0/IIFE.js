// flobal scope ke pollution se problem hoti hai kaafi baar to usse humara function pollute na ho isiliye we use iife
// immediately invoked function expressions
(function greet() {
  console.log("Hello world");
})();
// to basically ye define hote hi chal jata hai alag se chalana nahi padta aur iske end mein semicolon nahi lagaya to aage k code mein error dega kyuki use nahi pata kaha stop hona hai
((name) => {
  console.log(`Hello ${name}`);
})("Piyush");
// upar vala named iife tha neeche vala unnamed