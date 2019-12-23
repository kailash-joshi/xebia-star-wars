import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const middleWare = [];
middleWare.push(reduxThunk);
const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
  });
middleWare.push(loggerMiddleware);
const sagaMiddleware = createSagaMiddleware();
middleWare.push(sagaMiddleware);

let store = createStore(reducer, applyMiddleware(...middleWare));
sagaMiddleware.run(rootSaga);
export default store;