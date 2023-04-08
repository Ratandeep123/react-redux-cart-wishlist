import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_TO_CART } from "../constant";
const initialState = {
  cartData: [],
};
export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
        // console.log("fromReducer",action)
        //here we pushing multiple item in the cart so we are using  array method,// return{ ...state, catData:action.data}
      return [
        ...state,
        {cartData: action.data},
      ];
      case REMOVE_TO_CART:
        state.pop();
      return [
        ...state,
      ];
      break;
    default:
      return state;
  }
}
