import {ORDER_DISH_REQUEST, ORDER_DISH_SUCCESS} from "../../Actions/actionType";

const initialState = {
    loading : '',
};

const orderDishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_DISH_REQUEST:
            return {...state, loading: action.boolean};
        case ORDER_DISH_SUCCESS:
            return state;
        default:
            return state
    }
};

export default orderDishesReducer;