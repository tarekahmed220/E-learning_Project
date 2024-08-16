import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#FFF8D9] border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* <img
                            src={Logo} width={120}
                            className="h-11  mr-3 sm:h-9"
                            alt="Landwind Logo"
                        /> */}

          <span className="self-center text-amber-700 text-xl font-semibold whitespace-nowrap font-mono ">
            LEARN YOU
          </span>

          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            {/* <NavLink className="active  text-gray-500 hover:bg-slate-300 hover:bg-opacity-25 focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 hover:bg-amber-text-amber-500 focus:outline-none "
                            to={"login"} >Login</NavLink>


                        <NavLink className="active text-white bg-amber-600 hover:bg-amber-500 focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-3 lg:py-2 sm:ml-2 lg:mr-0 hover:bg-amber-text-amber-500 focus:outline-none "
                            to={""}>Register now</NavLink> */}
            <p className="text-amber-700 font-medium me-3">Mohamed Abo Saif </p>
            <div className="profile">
              <div className="dropdown">
                <button className="dropbtn">
                  {" "}
                  <img
                    className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  ></img>
                </button>
                <div className="dropdown-content">
                  <a href="#">Edit Profile</a>
                  <a href="#">Logout</a>
                </div>
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d={`M3 ${
                    isMenuOpen ? "10" : "5"
                  }a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 ${
                    isMenuOpen ? "5" : "10"
                  }a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 ${
                    isMenuOpen ? "15" : "10"
                  }a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z`}
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            {/* <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink className="active block py-2 pl-3 pr-4 text-gray-700  rounded   lg:p-0 "
                                    to={"home"}>Home</NavLink>

                            </li>
                            <li>
                                <NavLink className="active block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0  lg:dar   "
                                    to={"about"}>About Us </NavLink>

                            </li>
                            <li>
                                <NavLink className="active block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0  lg:dar   "
                                    to={"courses"}>Courses</NavLink>
                                     */}

            <div className="flex items-center lg:order-2">
              <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
              </div>

              {/* <NavLink
              className="active  text-gray-500 hover:bg-slate-300 hover:bg-opacity-25 focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 hover:bg-amber-text-amber-500 focus:outline-none "
              to={"login"}
            >
              Login
            </NavLink> */}
              {/* 
                            </li> */}

              <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d={`M3 ${
                      isMenuOpen ? "10" : "5"
                    }a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 ${
                      isMenuOpen ? "5" : "10"
                    }a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 ${
                      isMenuOpen ? "15" : "10"
                    }a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z`}
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
                isMenuOpen ? "" : "hidden"
              }`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    className="active block py-2 pl-3 pr-4 text-gray-700  rounded   lg:p-0 "
                    to={"home"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="active block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0  lg:dar   "
                    to={"about"}
                  >
                    About Us{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="active block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0  lg:dar   "
                    to={"courses"}
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="active block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0  lg:dar   "
                    to={"contact"}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="active block py-2 pl-3 pr-4 text-amber-700 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-800 lg:p-0  lg:dar   "
                    to={"mycourses"}
                  >
                    My Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="active block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-800 lg:p-0  lg:dar   "
                    to={"mycourses"}
                  >
                    My Wishlist
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
      </nav>
    </>
  );
}
