import { posState } from '../initialStates';
import {
    SET_POS_PAGE,
    COUPON_VERIFY,
  COUPON_VALIDATE,
} from '../actions/actionTypes';

const reducer = (state = posState, action) => {
  switch (action.type) {
    case SET_POS_PAGE:
      return {
        ...state,
        currentPosPage: action.payload,
      };
    case COUPON_VERIFY:
      return {
        ...state,
        couponVerify: action.payload,
      };
    case COUPON_VALIDATE:
      return {
        ...state,
        couponValidate: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
