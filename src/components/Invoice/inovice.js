import React from "react"
import {Match} from "@reach/router"
function Inovice(){
    return(<div>
        <Match path="/inovice/:id">
{
    props =>props.match?
      ( <div>
    
    This is Inovice page number : {props.match.id}
          </div>) : ""
    
    }  

        </Match>

      </div>)
}
export default Inovice