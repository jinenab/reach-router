import { combineReducers } from "redux";
import counter from "./counter"
const reducers=combineReducers({counter:counter})
export default reducers 