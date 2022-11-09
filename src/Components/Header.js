import React, { useContext } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/MainContext";

const Header = () => {
  const { userLogout, user } = useContext(AuthContext);
  console.warn(user)
  const userLogoutButtonClicked = () => {
    userLogout();
  };
  return (
    <div>
      <div className="main-nav-section border-b">
        <Navbar
          fluid={true}
          rounded={true}
          className="md:mx-20 lg:mx-20 xl:mx-40"
        >
          <Navbar.Brand href="/">
            <img
              src="/assets/images/logo.svg"
              className="mr-3 w-[5rem] "
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold font-general">
              Jonkar Express
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="font-general font-[500] lg:pr-6">
            <div className="main-collapse flex flex-col sm:flex sm:flex-row lg:flex-row lg:flex items-center justify-center gap-4">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blogs</Link>
              <Link to="/reviews">My review</Link>
              <Link to="/add">Add service</Link>
              {user ? (
                <button
                  onClick={userLogoutButtonClicked}
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Log out
                </button>
              ) : (
                <div className="button-group block lg:flex">
                  <Link
                    to="/login"
                    type="button"
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    type="button"
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    Register
                  </Link>
                </div>
                
              )}
             {user? <img class="w-10 h-10 rounded-full" src={user?.photoURL} alt="Rounded avatar"/>:undefined}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
