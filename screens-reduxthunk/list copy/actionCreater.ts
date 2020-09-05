import { IHotList, IHotLists } from '../../types';
import { dataUrl } from '../../units';
import { GETLISTDATA, GETREFRESHING } from './actionTypes';


// 初始状态 获取数据 action
export const getListDataAction = (data:IHotList[]) => {
    return {
        type: GETLISTDATA,
        data,
        refreshing: false,
    }
}

// 下拉刷新 action
export const getonRefreshingAction = (data:IHotList[], refreshing: boolean) => {
    // alert('3333')
    return {
        type: GETREFRESHING,
        data,
        refreshing,
    }
}

// 初始状态 获取数据
export const getListData = () => {
    return (dispatch: any) => {
        // let id = this.props.route.params.id;
        // let url = dataUrl+"/mock/17/rn2/hotlist?id=" + id;
        let url = dataUrl+"/mock/17/rn2/hotlist";
        fetch(url)
            .then((res) => res.json()
                // alert(JSON.stringify(res))
            )
            .then((res) => {
                // alert('12222')
                const action = getListDataAction(res.data.list)
                dispatch(action)
            });
    }
}

// 下拉刷新
export const getRefreshingData = (route:any) => {
    return (dispatch: any) => {
        let id =route.params.id;
        let url = dataUrl+"/mock/17/rn2/hotlist?id=" + id;
        // let url = dataUrl+"/mock/17/rn2/hotlist";
        fetch(url)
            .then((res) => res.json()
                // alert(JSON.stringify(res))
            )
            .then((res) => {
                const action = getonRefreshingAction(res.data.list, false)
                dispatch(action)
            });
    }
}


// export const changeRefreshingAction = (value: boolean) => {
//     return {
//         type: CHANGEREFRESHING,
//         value,
//     }
// }

// export const getCategorysData = () => {
//     return (dispatch: any) => {
//         fetch('http://192.168.31.55:3001/mock/17/rn2/hotfood') // 只有浏览器有跨域问题, app没有.
// 			.then((res) => res.json()
// 				// alert(JSON.stringify(res));
// 			)
//             .then(
//                 // this.props.setCategorys
//                 (res) => {
//                     if(res.ret && res.data) {
//                         const action = getSetCategorysAction(res.data)
//                         dispatch(action);
//                     }
//                 }
//             )
// 			.catch(() => { alert('请求异常') })
//     }
// }