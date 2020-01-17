import {ADD_DISH, DISHES, REMOVE_DISH} from "../../Actions/actionType";

const INITIAL_DISHES = {
  Plov: 0,
  Lagman: 0,
  Manty: 0,
  DuckFillet: 0,
};

const DISHES_PRICE = 0;

const initialState = {
    dishes: '',
    numberOfDishes: INITIAL_DISHES,
    totalPrice: DISHES_PRICE,
    delivery: 0,
};

const dishesReducer = (state = initialState, action) =>{
  switch (action.type) {
      case DISHES:
          return {...state, dishes: action.dishes};
      case ADD_DISH:
          return {...state,
              numberOfDishes: {
                  ...state.numberOfDishes,
                  [action.dish]: state.numberOfDishes[action.dish] + 1
              },
              totalPrice: state.totalPrice + state.dishes[action.dish].cost,
              delivery: 150
          };
      case REMOVE_DISH:
          return {...state,
              numberOfDishes: {
                  ...state.numberOfDishes,
                  [action.dish]: state.numberOfDishes[action.dish] - 1
              },
              totalPrice: state.totalPrice - state.dishes[action.dish].cost,
              delivery: 0
          };
      default:
          return state
  }
};

export default dishesReducer;