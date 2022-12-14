import reducer from "./reducer";
import thunk from "redux-thunk";
import {legacy_createStore,applyMiddleware } from "redux"

const store=legacy_createStore(reducer,applyMiddleware(thunk));

export {store};