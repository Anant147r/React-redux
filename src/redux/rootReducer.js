import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducers from "./iceCream/iceCreamReducers";
import reducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducers,
  user: reducer,
});

export default rootReducer;
