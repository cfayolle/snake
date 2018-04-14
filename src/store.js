import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(rootReducer, composeWithDevTools(applyMiddleware(loggingMiddleware)))
