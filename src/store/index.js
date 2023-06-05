import { createStore } from "redux";
import thunkMiddleware  from "redux-thunk";
import { applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const store= createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
export default store;
//Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
//asyncronous function are responsive to other events while that task runs, rather than having to wait until that task has finished.
