import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const Layout =() => {

    return (
        <>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="container mt-4">
                <Outlet></Outlet>
            </div>
        </>
        
    );


}

export default Layout;