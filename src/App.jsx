import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Courses from "./Components/Courses/Courses";
import ContactUs from "./Components/ConatctUs/ContactUs";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Notfound from "./Components/Notfound/Notfound";
import MyCourses from "./Components/MyCourses/MyCourses";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Components/PrivateRoute";
import { CoursesProvider } from "./Context/CoursesProvider";
import WishList from "./Components/WishList/WishList";
import CourseDetails from "./Components/ProductDetails/CourseDetails";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "courses", element: <Courses /> },
      {
        path: "mycourses",
        element: <PrivateRoute />,
        children: [{ path: "", element: <MyCourses /> }],
      },
      { path: "/courses/:id", element: <CourseDetails /> },
      {
        path: "mywishlist",
        element: <PrivateRoute />,
        children: [{ path: "", element: <WishList /> }],
      },
      { path: "contact", element: <ContactUs /> },
      { path: "login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgotpassword", element: <ForgotPassword /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <CoursesProvider>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <RouterProvider router={routers}></RouterProvider>
        </CoursesProvider>
      </Provider>
    </>
  );
}

export default App;
