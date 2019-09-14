import React, {Component} from "react"
import { navigate } from "@reach/router"
class Inovices extends Component{
 state={
     id:null,
 }
    render()
  {    const createInovice=()=>{
return {id:this.state.id}
}
      return(<div>    
         This is Inovices page <br></br>
         <input type="number" onChange={(e)=>
           this.setState({id:e.target.value})
         }></input>
         <br></br>
         <button value={this.state.id} onClick={async e => {
                 const newInovice = await createInovice()
                 this.setState({id:null})
            navigate(`inovice/${newInovice.id} `)
                
         }}>ADD</button>
    </div>)}
}
export default Inovices