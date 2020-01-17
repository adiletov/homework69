import { DISHES, ORDER_DISH_ERROR, ORDER_DISH_REQUEST} from "./actionType";
import axiosApi from "../axiosApi";

export const dishesSuccess = (dishes) =>({type: DISHES, dishes});
export const dishesRequest =(boolean) => ({type: ORDER_DISH_REQUEST, boolean});
export const dishesError = (error) => ({type: ORDER_DISH_ERROR, error});




export const getDishes = () =>{
    return async (dispatch) => {
        try {
            dispatch(dishesRequest(false));
            const res = await axiosApi.get('/dishes.json');
            dispatch(dishesSuccess(res.data));
            dispatch(dishesRequest(true));
        } catch (e) {
            dispatch(dishesError(e))
        }
}};

export const postOrders = (order) => {
    return async (dispatch) => {
        try{
           dispatch(dishesRequest(false));
             await axiosApi.post('/orders.json' , order);
             dispatch(dishesRequest(true))
        }catch (e) {
            dispatch(dishesError(e))
        }
    }
};