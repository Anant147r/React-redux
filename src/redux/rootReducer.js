import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducers from "./iceCream/iceCreamReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducers,
});

export default rootReducer;
