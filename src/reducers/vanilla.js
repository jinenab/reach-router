import {INCREMENT} from "../actions/types"
const initState={
    counter:0
}
 const vanilla=(state=initState,action)=>{
switch(action.type){
    case INCREMENT:
        return {counter:state.Counter+1}
    default:
        return state
}

}
export default vanilla