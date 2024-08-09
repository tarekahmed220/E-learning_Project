
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import Courses from './Components/Courses/Courses'
import ContactUs from './Components/ConatctUs/ContactUs'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Notfound from './Components/Notfound/Notfound'
import MyCourses from './Components/MyCourses/MyCourses'

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'courses', element: <Courses /> },
      { path: 'mycourses', element: <MyCourses /> },

      { path: 'contact', element: <ContactUs /> },
      { path: 'login', element: <Login /> },
      { index: true, element: <Register /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])

function App() {

  return <RouterProvider router={routers}></RouterProvider>
}

export default App
