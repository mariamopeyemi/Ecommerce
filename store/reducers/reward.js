import { rewardState } from '../initialStates';
import {
  SET_CURRENT_PAGE,
  COUPON_RANDOM,
  COUPON_ASSIGN,
} from '../actions/actionTypes';

const reducer = (state = rewardState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case COUPON_RANDOM:
      return {
        ...state,
        randomCoupon: action.payload,
      };
    case COUPON_ASSIGN:
      return {
        ...state,
        assignError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;



