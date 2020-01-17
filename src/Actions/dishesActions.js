import {ADD_DISH, REMOVE_DISH} from "./actionType";

export const addDish = (dish) => ({type: ADD_DISH, dish});
export const removeDish = (dish) => ({type: REMOVE_DISH, dish});