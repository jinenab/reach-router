import React from "react"
import { Link} from "@reach/router"
function DashboardNav(){
    return(<div>
        <nav>
    
            
            <div><Link to="/dashboard">Home</Link> </div>
            <div><Link to="/dashboard/team"> Team</Link> </div>
        </nav>
        <br></br>
    </div>)
}
export default DashboardNav