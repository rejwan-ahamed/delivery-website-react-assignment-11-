import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Main from "./Layout/Main";
import Blog from "./Components/Blog/Blog"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Servies from "./Components/Servies";
import Service from "./Components/Service";
import Myreviews from "./Components/Myreviews";
import EditComment from "./Components/EditComment";
import AddService from "./Components/AddService";

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
        { path: "/services", element: <Servies></Servies> },
        { path: "/service", element: <Service></Service> },
        { path: "/reviews", element: <Myreviews></Myreviews> },
        { path: "/edit", element: <EditComment></EditComment> },
        { path: "/add", element: <AddService></AddService> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
