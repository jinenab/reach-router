import React,{Component} from "react"
class Vanilla extends Component{
    state={ Counter:0,
    }
    render()
    {
   return(<div>
Vanilla-Counter
 <br></br>
 <button onClick={()=>{}}>+</button>
 <button>-</button>
 <button>increment if odd</button>
 </div>)}
}
export default Vanilla