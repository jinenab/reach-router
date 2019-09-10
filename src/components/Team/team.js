import React from "react"
import {Match,Link} from "@reach/router"
function Team(){
    return(<div>

<Match path="/dashboard/team/*">{props=>


<div>
    <Link to={props.match.uri}> Team </Link>
</div>


}</Match>

    </div>)
}
export default Team