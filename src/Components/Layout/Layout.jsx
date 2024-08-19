import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (<>
        <NavBar />
        <div className="">
            <Outlet></Outlet>
        </div>
        <Footer />
    </>
    )
}
