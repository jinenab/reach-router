import {INCREMENT} from "../actions/types"

 const vanilla=(state=0,action)=>{
   switch(action.type){
    case INCREMENT:
        state=state+1
        break;
    default:
        return state
}
return state
}
export default vanilla