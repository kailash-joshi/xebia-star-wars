import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducer from './reducers/reducer';
const middleWare = [];
middleWare.push(reduxThunk);
const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
  });
middleWare.push(loggerMiddleware);
let store = createStore(reducer, applyMiddleware(...middleWare));
export default store;