import Sortingreducer from "./Sorting/reducer";
import Menureducer from "./Menudata/reducer"
import thunk from "redux-thunk";
import {legacy_createStore,applyMiddleware,combineReducers } from "redux"


const rootReducer= combineReducers({Sortingreducer,Menureducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export {store};