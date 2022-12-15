import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './pages/Home/Home';

function App() {
  const router = createBrowserRouter([
     {
        path: "/",
        element: <Main></Main>,
        errorElement: <></>,
        children: [
           {
              path: "/",
              element: <Home></Home>
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
