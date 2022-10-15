import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import Body from "./Components/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Components/Products/Products";
import Main from "./Components/Main/Main";

function App() {
  const router = createBrowserRouter([

    {
      path : '/',
      element: <Main></Main>,
      children : [
        {
          path: '/',
          element:<Body></Body>
        },
        
        {
          path: '/products',
          loader : async()=>{
            return fetch('./fakeData/products.json')
          },
          element: <Products></Products>
        },
        {
          path:'dashboard',
          element:<Body></Body>
        }
       
      ]
    },
    {path: '*',element:<div>Page not found</div>}


  ])


  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
