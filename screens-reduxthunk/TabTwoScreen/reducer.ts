import { SET_CATEGORYS } from './actionTypes';

const defaultState = {
    categorys: [],
    name: 'tong',
}

export default (state =defaultState, action:any) => {
    if(action.type === SET_CATEGORYS) {
        return {
            categorys: [...action.data]
        }
    }
    return state
}