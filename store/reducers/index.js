import { combineReducers } from 'redux';
import rewardReducer from './reward';
import posReducer from './pos';
import cartReducer from './cart';

const appReducer = combineReducers({
  reward: rewardReducer,
  pos: posReducer,
  cart: cartReducer,
});

export default appReducer;
