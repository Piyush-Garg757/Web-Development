const react_element = {
  type: "a", // ye type of element batata hai   div,a,p,etc
  props: {
    // properties associated with element
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

/*
 ye to humnw khud se banaya react element bur official react mein aise nahi hota
 vahan aise banta hai
const react_element=React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'};
    'Click me to open google'
)*/
function customRender(react_element, main_container) {
  const dom_element = document.createElement(react_element.type);
  dom_element.innerHTML = dom_element.children;
  /*dom_element.setAttribute("target".react_element.props.target);
  dom_element.setAttribute("href".react_element.props.href);*/ // ye method se accha hum loop use karein
  for (const prop in react_element.props) {
    dom_element.setAttribute(prop, react_element.props[prop]);
  }

  main_container.appendChild(dom_element);
}
const main_container = document.querySelector("#root");
// react jo hota hai na vo huamara jo bhi element hota hai uska tree banane ki koshish karta hai
// to vo ek react_element banata hai jo upar bana rakha hai

customRender(react_element, main_container);
// humein karna kya hai      humein main_container mein react_element dalna hai
