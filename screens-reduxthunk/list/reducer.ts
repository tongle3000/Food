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


export default (state = defaultState, action: any) => {
    if(action.type === GETLISTDATA) {
        let newState={}
        if(action.cover) {
            newState = {
                list: [ ...action.list],
                refreshing: false,
            }
        } else {
            newState = {
                list: [...action.list, ...state.list],
                refreshing: false,
            }
        }
        return newState;
    } else if(action.type === GETREFRESHING) {
        return {
            list: [...state.list],
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