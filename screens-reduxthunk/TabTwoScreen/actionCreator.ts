import { IList } from '../../types';
import { SET_CATEGORYS } from './actionTypes';

export const getSetCategorysAction = (data:IList[]) => {
    return {
        type: SET_CATEGORYS,
		data,
    }
}

// 加入 redux-thunk 后, 获取数据方法. 
// 1. 可以接受 dispatch,  在内层 return 里面;
// 3. return 可不再是个对象,可以是个函数.


// 初始状态 获取数据

export const getCategorysData = () => {
    return (dispatch: any) => {
        fetch('http://192.168.31.55:3001/mock/17/rn2/hotfood') // 只有浏览器有跨域问题, app没有.
            .then((res) => res.json())
            .then((res) => {
                const action = getSetCategorysAction(res.data)
                dispatch(action)
            })
            .catch(() => { alert('请求异常') })
    }
}