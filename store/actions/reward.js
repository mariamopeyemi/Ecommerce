import { SET_CURRENT_PAGE, COUPON_RANDOM, COUPON_ASSIGN } from "./actionTypes";
import { baseInstance } from "../../axios";


export const setPage = ({ currentPage }) => {
	return async (dispatch) => {
		dispatch({
			type: SET_CURRENT_PAGE,
			payload: currentPage,
		});
	};
};

export const couponRandom = (data) => {
	return async (dispatch) => {
		console.log("working");
		try {
			const response = await baseInstance.post("/coupon/random", data);
			// i used dispatch only so that i can set item n get item.. that is so i can use the payload response
			dispatch({
				type: COUPON_RANDOM,
				payload: response.data.data,
			});
      console.log(response, "i am res");
				window.localStorage.setItem("random", JSON.stringify(response.data.data));
		} catch (error) {
			console.log("There was an error", error);
			// console.log("There was an error", error?.response?.data?.message);
		}
	};
};

export const couponAssign = (data) => {
	return async (dispatch) => {
		console.log("working assignment");
		try {
			const response = await baseInstance.post("/coupon/assign", data);
			
			console.log(response, "i am assignment response");
			
			
		} catch (error) {
			dispatch({
				type: COUPON_ASSIGN,
				payload: error.response.data.message,
			});
			console.log("Can't assign coupon because", error.response.data.message, );
			// window.localStorage.setItem("couponassign", JSON.stringify(error.response.data.message));
		}
	};
};
