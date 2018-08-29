import Reducer from './reducers';
import {
    createStore,
    applyMiddleware
} from 'redux';
import Thunk from 'redux-thunk';
export default createStore(Reducer, applyMiddleware(Thunk))