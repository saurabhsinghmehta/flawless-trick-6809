import Sortingreducer from "./Sorting/reducer";
import Menureducer from "./Menudata/reducer";
import Productreducer from "./ProductMgt/reducer";
import CartReducer from "./AddToCart/reducer"
import thunk from "redux-thunk";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({
  Sortingreducer,
  Menureducer,
  Productreducer,
  CartReducer
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// hihi
export { store };
