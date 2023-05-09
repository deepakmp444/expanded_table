import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./People/reducers";
import filmsReducer from "./Films/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filmsReducer,
  reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
