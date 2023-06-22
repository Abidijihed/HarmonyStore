import { GET_CURRENT , LOGIN , REGISTER} from "../actionType/ActionType";

const initialState = {
  users: {},
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
    return { ...state,users:payload.utilisateur}
    default:
      return state;
  }
};
export default UserReducer;