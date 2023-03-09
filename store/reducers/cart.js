import { cartInitState  } from '../initialStates';
import {
  CART_ITEMS,
  CART_COUNT,
  CART_TOTAL,
  CART_OPEN,
} from '../actions/actionTypes';

// const reducer = (state = cartState , action) => {
const reducer = (state  , action) => {
  // const {type, payload} = action;
  switch (action.type) {
    case CART_ITEMS:
      return {
        ...state,
        currentPage: action.payload,
      };
    case CART_COUNT:
      return {
        ...state,
        randomCoupon: action.payload,
      };
    case CART_TOTAL:
      return {
        ...state,
        assignError: action.payload,
      };
      case CART_OPEN: false;
    default:
      return state;
      // return throw new Error('Invalid action type');
  }
};

export default reducer;



