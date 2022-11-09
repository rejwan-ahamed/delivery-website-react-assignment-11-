import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Main from "./Layout/Main";
import Blog from "./Components/Blog/Blog";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Servies from "./Components/Servies";
import Service from "./Components/Service";
import Myreviews from "./Components/Myreviews";
import EditComment from "./Components/EditComment";
import AddService from "./Components/AddService";
import { Toaster } from "react-hot-toast";
import Private from "./Private/Private";
import "react-photo-view/dist/react-photo-view.css";
import { async } from "@firebase/util";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        {
          path: "/services",
          element: <Servies></Servies>,
          loader: async () => {
            return await fetch("http://localhost:5000/products/");
          },
        },
        {
          path: "/service/:id",
          element: <Service></Service>,
          loader: async ({ params }) => {
            return await fetch(`http://localhost:5000/products/${params.id}`);
          },
        },
        {
          path: "/reviews",
          element: (
            <Private>
              <Myreviews></Myreviews>
            </Private>
          ),
        },
        {
          path: "/edit",
          element: (
            <Private>
              <EditComment></EditComment>
            </Private>
          ),
        },
        {
          path: "/add",
          element: (
            <Private>
              <AddService></AddService>
            </Private>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
