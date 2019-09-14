import React from "react"
import {Match,Link} from "@reach/router"
function Inovice(){
    return(<div>
        <Match path="/inovice/:id">
{
    props  =>
    props.match.id===null?

      ( <div>
    
    This is Inovice page number : {props.match.id}
    <br></br>

          </div>) 
    : (<div>You didn't add a new Inovice page please return to <Link to="/inovices">Inovices 's page</Link>  and add a new one</div>)
    }  

        </Match>

      </div>)
}
export default Inovice