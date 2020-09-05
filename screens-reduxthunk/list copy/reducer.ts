import { reducer } from '../TabTwoScreen';
import { GETLISTDATA, GETREFRESHING } from './actionTypes';

interface IState {
    list:string[],
    refreshing: boolean,
}

const defaultState:IState ={
    list: [],
    refreshing: false,
}


export default (state=defaultState, action:any) => {
    if(action.type === GETLISTDATA) {
        return {
            ...state,
            list: [...action.data],
            refreshing: action.refreshing,
        }
    } else if(action.type === GETREFRESHING) {
        return {
            list: [...action.data, ...state.list],
            refreshing: action.refreshing,
        }
    }
    // if(action.type === CHANGEREFRESHING) {
    //     return {
    //         ...state,
    //         refreshing: action.value,
    //     }
    // } 
    // else if (action.type === 'change_refreshing') {
    //     return {
    //         list: [..state.list],
    //         refreshing: action.value,
    //     }
    // }

    return state;
}