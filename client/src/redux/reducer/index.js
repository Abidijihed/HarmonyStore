import { combineReducers } from "redux";
import AlertReducer from "./AlertReducer";
import UserReducer from "./Reducer";






const rootReducer = combineReducers({AlertReducer,UserReducer})



export default rootReducer