import {INCREMENT} from "../actions/types"
const initState={
    Counter:0
}
 const vanilla=(state=initState,action)=>{
switch(action.type){
    case INCREMENT:
        return {Counter:state.Counter+1}
    default:
        return state
}

}
export default vanilla