//import {ping} from "./ping"
import { products, productEpics } from './products';
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ products })
//리듀서(모듈)들을 하나로 모아서 export 하여 configure.js에서 사용할 수 있게 한다.
export const rootEpics = combineEpics(productEpics.addProductEpic);
