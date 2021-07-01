import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import coffee from "./modules/coffee";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({coffee});
const store = createStore(rootReducer, enhancer);

export default store;