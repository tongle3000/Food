import { IHotList } from '../../types';
import { GETLISTDATA, GETREFRESHING } from './actionTypes';


export const getListDataAction = (data:IHotList[]) => {
    return {
        type: GETLISTDATA,
        data,
        // refreshing: false,
    }
}

export const getonRefreshingAction = (data:IHotList[]) => {
    return {
        type: GETREFRESHING,
        data,
        refreshing: false,
    }
}