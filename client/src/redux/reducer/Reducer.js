import { GET_CURRENT , LOGIN , REGISTER} from "../actionType/ActionType";
import { GET_PRODUCT } from "../actionType/ProtactType";
const initialState = {
  users: {},
  data:[]
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { ...state, users: payload.utilisateur };
    case LOGIN: 
    localStorage.setItem("token",payload.token)
    localStorage.setItem("id",payload.id)
    return { ...state,users:payload.utilisateur};
    case GET_CURRENT: 
    return { ...state,users:payload}
    case GET_PRODUCT:
      return {...state,data:payload}
    default:
      return state;
  }
};
export default UserReducer;