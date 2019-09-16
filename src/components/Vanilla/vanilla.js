import React,{Component} from "react"
import { createStore ,} from 'redux'
import{ connect }from "react-redux"
import reducers from "../../reducers"
class Vanilla extends Component{
    state={ Counter:0,
    }


    render()
    {    const store = createStore(reducers)

   return(<div>
<h1>Vanilla-Counter : {this.props.Counter}   
{store.getState().vanilla.Counter}
</h1> <br></br>

 <button onClick=
 {this.props.INCR}>+</button>
 <button>-</button>
 <button>increment if odd</button>
 </div>)}
}
const mapStateToProps = state => {
    return {
      Counter: state.Counter
    };
  };
const mapDispachToProps=dispach=>{
    return{
        INCR:()=>dispach( {type:"INCREMENT"})
    }
}
export default connect(
    mapStateToProps,
    mapDispachToProps,
    )(Vanilla);

