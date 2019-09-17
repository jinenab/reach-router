import React,{Component} from "react"
import {createStore} from "redux"
import reducers from "../../reducers"
import {INC} from "../../actions"
import vanilla from "../../reducers/vanilla"
class Vanilla extends Component{
  state={
Counter:0
  }
 INCREMENT=async()=>{
  await  this.setState({Counter:createStore(vanilla).getState()})
  }
  render()
    {   
     const store=createStore(vanilla)
      return(<div>
                  <h1>Vanilla-Counter : {this.state.Counter}
                    </h1> <br></br>
                    <button  onClick={ ()=> 
                    {
                      store.dispatch(INC())
                     
                    console.log(store.getState())
                     //this.INCREMENT()
                    }
                      
                  }>+</button>

                    <button  >-</button>
                    <button>increment if odd</button>
                    </div>)}
}

export default Vanilla;

