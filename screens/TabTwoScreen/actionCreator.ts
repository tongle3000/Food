import { SET_CATEGORYS } from './actionTypes';

export const getSetCategorysAction = (data) => {
    return {
        type: SET_CATEGORYS,
		data,
    }
}