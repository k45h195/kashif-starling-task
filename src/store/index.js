import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {accountInfo} from './reducers'
export const store = createStore(accountInfo,  applyMiddleware(thunk))