import { combineReducers } from 'redux';

import list from '../screens-reduxthunk/list/reducer';
import { reducer as TabTwoScreen } from '../screens-reduxthunk/TabTwoScreen';

const reducer = combineReducers({
    TabTwoScreen,
    list
})

// const defaultState = {
//     name: 'tong'
// }

// export default (state=defaultState, action) => {
//     return state;
// } 

export default reducer;


