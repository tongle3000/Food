import { NEARSWITCH } from './actionTypes';

export const getSwitchChangeAction = (value:boolean) => ({
    type: NEARSWITCH,
    value
})