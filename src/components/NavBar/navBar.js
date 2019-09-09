import React from "react"
import {Link} from "@reach/router"
function NavBar(){
    return(    <div>
        <nav>
            
            <div><Link to="/">Home</Link> </div>
            <div><Link to="about"> About</Link> </div>
            <div><Link to="support"> Support</Link></div>
        </nav>
        <br></br>
    </div>)
}
export default NavBar