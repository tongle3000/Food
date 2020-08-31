/**
 * redux-thunk
 * 
 * 引   入:  applyMiddleware, thunk
 * 代码增加: ,applyMiddleware(thunk)
 */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store