import React from "react"
import {Link} from "@reach/router"
function NavBar(){
    return(    <div>
        <nav>
<Link to="/">Home</Link> |
<Link to="about"> About</Link> |
<Link to="support"> Support</Link>
        </nav>
        <br></br>
    </div>)
}
export default NavBar