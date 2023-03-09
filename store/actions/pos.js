import {
    SET_POS_PAGE,
    COUPON_VERIFY,
  // COUPON_VALIDATE,
  } from './actionTypes';
import { baseInstance } from "../../axios";

  export const setPosPage = ({ currentPosPage }) => {
    return async (dispatch) => {
      dispatch({
        type: SET_POS_PAGE,
        payload: currentPosPage,
      });
    };
  };
  
  export const couponVerify= (data) => {
    return async (dispatch) => {
      console.log("verify is working");
      try {
        const response = await baseInstance.post("/coupon/verify", data);
        dispatch({
          type: COUPON_VERIFY,
          payload: response.data,
        });
        console.log('this is res', response, 'and data', response.data, 'and message', response.data.message, 'and status', response.status);
        // if (response.status == 201) {
          window.localStorage.setItem("couponVerify", JSON.stringify(response));
          // window.localStorage.setItem("couponVerify", JSON.stringify(response.data.data));
        // }
      } catch (error) {
        console.log("Error while verifying",  error);
        // console.log("Error while verifying",  error.response.data.message);
      }
    };
  };
  
  export const couponValidate= (data) => {
    return async () => {
      console.log("validate is working");
      try {
        // const response = await axios.post("https://staging-api.shoutng.com/coupon/validate", data);
        const response = await baseInstance.post("/coupon/validate", data);
        console.log(response);
      } catch (error) {
        // console.log("Error while validating",  error.response.data.message);
        console.log("Error while validating",  error);
      }
    };
  };