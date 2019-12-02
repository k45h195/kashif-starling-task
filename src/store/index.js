import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {accountInfo} from './reducers'
import { createLogger } from 'redux-logger'
 
const logger = createLogger({
  // ...options
});
 
const listOFMiddleWare = [thunk, logger]

export const store = createStore(accountInfo,  applyMiddleware(...listOFMiddleWare))