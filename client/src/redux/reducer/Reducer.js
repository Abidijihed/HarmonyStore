import { GET_CURRENT , LOGIN , REGISTER} from "../actionType/ActionType";
import { GET_CARD_Product, GET_PRODUCT } from "../actionType/ProtactType";
const initialState = {
  users: {},
  data:[],
  cardProduct:[]
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token",payload.token)
    localStorage.setItem("id",payload.id)
      return { ...state, users: payload };
    case LOGIN: 
    localStorage.setItem("token",payload.token)
    localStorage.setItem("id",payload.id)
    return { ...state,users:payload.utilisateur};
    case GET_CURRENT: 
    return { ...state,users:payload}
    case GET_PRODUCT:
      return {...state,data:payload}
      case GET_CARD_Product:
        return {...state,cardProduct:payload}
    default:
      return state;
  }
};
export default UserReducer;