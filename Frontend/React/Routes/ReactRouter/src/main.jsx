import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import { About, Contact, Home, User } from "./components/index.js";
import Github, { githubInfoLoader } from "./components/github/Github.jsx";

// To router banane ke 2 tareeke hote hain
// 1.
let router = createBrowserRouter([
  // Iss array ke andar hum apne sab elements ki list daal dete hain jo bhi humein object chahiye
  {
    path: "/",
    element: <Root />, // ye root jake dekho iska kya concept hai and iska explanation
    // Ab ismien aur children bhi add kiye ja sakte hain aur iss case me humein karne hi hain jaise home, about us, contact us
    children: [
      // {}                              ,{}
      // ye aise hi about us ke liye pura   aur ye aise hi dusre ke liye puura path aise karenge
      {
        path: "", // ab ye childrenn hai to iske path me / already laga hua hai   so humein ab uske aage kya laggana hai vo yaha ayega
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      }, 
      // Aise hi aur children add kar sakte hain karne ho to
      {
        path: "contact",
        element: <Contact />
      },
    ],
  },
]);

// Ab dekhte hain dusra tareea
// 2.
router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Root />}>
      <Route path="about" element = {<About />} />
      <Route path="contact" element = {<Contact />} />
      <Route path="user/:userid" element = {<User />} /> 
      <Route 
      path ="github" 
      element = {<Github />}
      // loader = {() => {}} iss tarah se yaha callback fire karna allowed hai and aise hum ismein pura apna fetch ke through api call yaha kar sakte h   but ise ek aur tarah se bhi kiya ja sakta h    github vali file mein jake export vali line ke neeche dekho
      loader = {githubInfoLoader} // ab  bas yaha function dene se kaam nahi chalega vaha jake cheezein karni padengi ek hook ke through jo ki hai useLoaderData jo ki loader vale data ka access de deta hai
       />
    </Route>
  )
)
// Ye comment userid val ke yaha ka hai
{/* ismein hume chahiye ki url me user ke aagejo bhi number likha ho use hum use kar sakein and use user vale page pe display kara sakein  basically url se parameter lena seekhna hai    to iske liye user me jake kya karte hai vo dekho     jo bhi component iss url ko render kar raha hai usmein humein /: ke baad vali cheez ka acceess milta hia automatcally*/}
// yaha humne user/ ise baad jo : use kiya hai vo suntax hai 

// Loader basically jab huara cursor github ke li e jayega navbar e tabhi api fetch shuru kar dega rather than waiting ki hum uspe click karein and then data fetch ho   to ye useEffect se bhi taggda aur badhiyaa aur optimised h     to iske andar hum direct api call kar sakte hai basically humne jo bhi waha kiya hai useEffect ke andar vo sab yahi isk elandar likh sakte hain calllback fire karke
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* Hum router use kar rahe hain isiliye humne yaha se app hatake RouterProvider use kiya hai   jab jab react router use karenge to aise hi karna hai dhyaan rakhna  and ye ek prop leta hai router   to chalo ab router banate hain*/}
  </StrictMode>,
);
