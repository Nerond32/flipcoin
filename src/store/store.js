import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from 'reducers/rootReducer';
import socketioMiddleware from 'store/socketioMiddleware';

const middlewares = [socketioMiddleware];
export const store = compose(applyMiddleware(...middlewares))(createStore)(
  rootReducer
);
export const persistor = persistStore(store);
