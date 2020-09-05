import { combineReducers } from 'redux';

import list from '../screens-reduxthunk/list/reducer';
import { reducer as settings } from '../screens-reduxthunk/settings';
import { reducer as TabTwoScreen } from '../screens-reduxthunk/TabTwoScreen';

const reducer = combineReducers({
    TabTwoScreen,
    list,
    settings
})

// const defaultState = {
//     name: 'tong'
// }

// export default (state=defaultState, action) => {
//     return state;
// } 

export default reducer;


