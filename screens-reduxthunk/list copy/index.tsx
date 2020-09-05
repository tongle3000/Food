//  这页面加入 react-redux,读不到数据是 reducer.ts list: [ ...action.data], 之前写成了 list: [ ...action.list], 
import { connect } from 'react-redux';

import { getListData, getonRefreshingAction, getRefreshingData } from './actionCreater';
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
            dispatch(getListData())
        },
        getRefreshingList() {
            dispatch(getRefreshingData(ownProps.route))
        },
        _onRefresh() {
            dispatch(getonRefreshingAction([], true))
            // this.props.setState({
            //     refreshing: true, // 要下拉刷新, refreshing 得为 true;
            // })
            // alert(this.props.list)
            dispatch(getRefreshingData(ownProps.route))
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(List);