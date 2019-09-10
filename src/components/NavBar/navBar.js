import React from "react"
import {Link} from "@reach/router"
function NavBar(){
    return(    <div className="NavBar">
 
 <Link to="/">Home</Link>
 <Link to="/dashboard">Dashboard</Link>

    </div>)
}
export default NavBar