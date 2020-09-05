//  这页面加入 react-redux,读不到数据是 reducer.ts list: [ ...action.data], 之前写成了 list: [ ...action.list], 
import { connect } from 'react-redux';

import { getListData, getListDataAction, getonRefreshingAction } from './actionCreater';
import List from './Ui';


 

const mapStateToProps = (state:any) => {
    // alert(res.data.list) //打印出 []
    return {
        list: state.list.list,
        refreshing: state.list.refreshing,
    }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    return {
        getList() {
            dispatch(getListData(ownProps.route, true)) // 后面这个 true 覆盖,  false 不覆盖.
            // const action = getListDataAction(ownProps.route, true)
            // dispatch(action)
        },
        getRefreshingList() {
            let action = getonRefreshingAction(true)
            dispatch(action)
            // dispatch(getListData(ownProps.route, true))
            action = getListData(ownProps.route, false)
            dispatch(action)
        },
        // _onRefresh() {
        //     dispatch(getonRefreshingAction([], true))
        //     // this.props.setState({
        //     //     refreshing: true, // 要下拉刷新, refreshing 得为 true;
        //     // })
        //     // alert(this.props.list)
        //     dispatch(getRefreshingData(ownProps.route))
        // }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(List);