import React,{Component} from "react"
import {INC} from "../../actions"
import {connect} from "react-redux"
class Counter extends Component{
  render()
    {   console.log('***')
      return(<div >
                  <h1>Vanilla-Counter : 
                    </h1> <br></br>
                    <button>+</button>

                    <button  >-</button>
                    <button>increment if odd</button>
                    </div>)
}
}


export default Counter
