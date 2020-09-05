import { AsyncStorage } from 'react-native';

import { NEARSWITCH } from './actionTypes';

const defaultState = {
    nearSwitch: false,
}

export  default (state = defaultState, action: any) => {
    if(action.type === NEARSWITCH) {
        AsyncStorage.setItem('near', action.value.toString())
        return Object.assign({}, state, {
            nearSwitch: action.value
        })
        // return {
        //     nearSwitch: action.value
        // }
    }
    // if(state === NEARSWITCH)
    return state;
}