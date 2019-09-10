import React from "react"
import {Link} from "@reach/router"
function NavBar(){
    return(  <div className="Navbarcontainer"> 
     <div className="NavBar">
 <div> <Link to="/">Home</Link></div>
 <div> <Link to="/dashboard">Dashboard</Link>
</div>
</div>
    <div><a href="https://reach.tech">Reach Router</a>
</div>

    </div>
    )
}
export default NavBar