import React, {Component} from "react"
import { navigate } from "@reach/router"
class Inovices extends Component{
 state={
     id:0,
 }
    render()
  {    const createInovice=()=>{
return {id:this.state.id+1}
}
      return(<div>    
         This is Inovices page
         <button value={this.state.id} onClick={async e => {
                 const newInovice = await createInovice(e.target.value)
            navigate(`inovice/${newInovice.id} `)
                
         }}>ADD</button>
    </div>)}
}
export default Inovices