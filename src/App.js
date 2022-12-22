import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main";
import Home from "./pages/Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
   useEffect(() => {
      Aos.init({
         duration: 3000,
         offset: -100,
         throttleDelay: 50,
      });
   }, []);
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         errorElement: <></>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
            },
         ],
      },
   ]);
   return (
      <div className="App overflow-hidden">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
