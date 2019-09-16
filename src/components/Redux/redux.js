import React from "react"
import {Link,Location} from "@reach/router"
function LearnRedux({children}){
    return(<div>
<Location>
    {
        props=>props.location.pathname==="/redux/counter"?<div>{children}</div>: 
        <div>
        Redux    
        <li>
            <ul><Link to="/redux/counter">Counter</Link> 
        </ul>
        </li>
       </div>
    }
</Location>




    </div>)
}
export default LearnRedux