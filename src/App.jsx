import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About/About";


import { Layout } from "./Components/Layout/Layout";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Contact } from "./Components/Contact/Contact";

function App() {
  let router = createBrowserRouter([

   {path: "" , element: <Layout />, children: [
    { index : true , element: <About />},
    { path: "portfolio", element:<Portfolio />},
    { path: "contact", element: <Contact />},
  ]
   }
  ]);

  return (
    <>
    
      <RouterProvider router={router}></RouterProvider>
  
    </>
  );
}

export default App;
