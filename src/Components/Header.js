import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div>
      <div className="main-nav-section border-b">
        <Navbar fluid={true} rounded={true} className="md:mx-20 lg:mx-40">
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
            <div className="main-collapse block lg:flex items-center justify-center gap-4">
              <Navbar.Link href="/navbars" active={true}>
                Home
              </Navbar.Link>
              <Navbar.Link href="/navbars">Services</Navbar.Link>
              <Navbar.Link href="/navbars">Blogs</Navbar.Link>
              <Navbar.Link href="/navbars">My review</Navbar.Link>
              <Navbar.Link href="/navbars">Add service</Navbar.Link>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Log out
              </button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
