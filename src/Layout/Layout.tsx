import {Outlet} from 'react-router-dom'
import Header from '../Static/Header'
import Footer from '../Static/Footer'
import Homescreen from '../Pages/Homescreen'


const Layout = () =>{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Homescreen/>
            <Footer/>
        </div>
    )
}

export default Layout;