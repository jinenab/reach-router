import React from "react"
import {Link} from "@reach/router"
function NavBar(props){
    return(    <div>
        {/* <nav>
            
            <div><Link to="/">Home</Link> </div>
            <div><Link to="about"> About</Link> </div>
            <div><Link to="support"> Support</Link></div>
        </nav>
        <br></br> */}
        {props.children}
    </div>)
}
export default NavBar