import { ReactReduxContext } from "react-redux";
import {createStore,applyMiddleware,combineReducers} from "redux";
import BookReducer from "./reducer/bookReducer.js";

const thunkMiddleware=require("redux-thunk").default;

const mainReducer=combineReducers(
{
pass:BookReducer
}
);
const store=createStore(mainReducer,applyMiddleware(thunkMiddleware));

export default store;
