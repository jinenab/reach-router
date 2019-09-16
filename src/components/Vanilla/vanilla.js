import React,{Component} from "react"
import { createStore } from 'redux'
import reducers from "../../reducers"
import {INC} from "../../actions"
class Vanilla extends Component{
    state={ Counter:0,
    }


    render()
    {    const store = createStore(reducers)

   return(<div>
<h1>Vanilla-Counter : {this.state.Counter}
</h1> <br></br>

 <button onClick={()=>{console.log(store.getState())
     store.dispatch(INC())}}>+</button>
 <button>-</button>
 <button>increment if odd</button>
 </div>)}
}
export default Vanilla