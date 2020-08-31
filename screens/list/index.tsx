//  这页面加入 react-redux,读不到数据是 reducer.ts list: [ ...action.data], 之前写成了 list: [ ...action.list], 
import { RouteProp, TabNavigationState } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { RootStackNavigation } from '../../navigation';
import { IHotList, IHotLists, RootStackParamList } from '../../types';
import { getListDataAction, getonRefreshingAction } from './actionCreater';
import { GETLISTDATA } from './actionTypes';
import { styles } from './style';


type Route = RouteProp<RootStackParamList, "List"> & {
    state?: TabNavigationState;
}

interface IProps extends IHotLists {
    navigation: RootStackNavigation;
    route: Route;
    // [key: string]: any;
    changeListInfo:(res:any)=>void;
    changeListInfo2:(res:any)=>void;
}


class List extends React.Component<IProps, IHotLists> {
    // state: IHotLists = {
    //     list: [],
    //     refreshing: false,
    // }
    componentDidMount() {
        this.setOptions(); // 6.修改首页顶部;
        // alert(this.props.route.params.id) // 能获取到 父组件传过来的参数,,id 
        this.getListData()
        // this.getListData2()
    }

    // componentWillMount() {
    //     this.getListData()
    // }

    getListData(){
        // let id = this.props.route.params.id;
        // let url = "http://192.168.31.55:3001/mock/17/rn2/hotlist?id=" + id;
        let url = "http://192.168.31.55:3001/mock/17/rn2/hotlist";
        fetch(url)
            .then((res) => res.json()
                // alert(JSON.stringify(res))
            )
            .then( this.props.changeListInfo
                // (res) =>{
                    // this.setState({
                    //     list: res.data.list,
                    // })
                    // 刷新,追加新的数据
                    // this.setState((prevState: IHotLists)=> {
                    //     return{
                    //         list:[...prevState.list, ...res.data.list],
                    //         refreshing: false ,
                    //     }
                    // })


                    // alert(JSON.stringify(res.data)); 
                    // alert(id)
                // }
            );
            
    }

    getListData2(){
        let id = this.props.route.params.id;
        let url = "http://192.168.31.55:3001/mock/17/rn2/hotlist?id=" + id;
        // let url = "http://192.168.31.55:3001/mock/17/rn2/hotlist";
        fetch(url)
            .then((res) => res.json()
                // alert(JSON.stringify(res))
            )
            .then( this.props.changeListInfo2
                // (res) =>{
                    // this.setState({
                    //     list: res.data.list,
                    // })
                    // 刷新,追加新的数据
                    // this.setState((prevState: IHotLists)=> {
                    //     return{
                    //         list:[...prevState.list, ...res.data.list],
                    //         refreshing: false ,
                    //     }
                    // })


                    // alert(JSON.stringify(res.data)); 
                    // alert(id)
                // }
            );
            
    }

    // changeListInfogetListSucc(res) {
    //     if(res.ret && res.data) {
    //         this.props.changeListInfo(res.data.list)
    //     }
    // }

    setOptions = () => {
        // 4.修改首页顶部; 把这整块代码 放在一个方法里, 以便这 2 个生命周期函数componentDidMount,componentDidUpdate都调用.
        // componentDidUpdate: 只有 PROPS 发生变化,就会执行这个周期.
        const { navigation, route } = this.props;
        // alert(route.params.id) 打印传过来的 id

        navigation.setOptions({
            headerTransparent: false, // true 透明
            headerTitle: route.params.title, // '' 赋空值  这里读取父组件传过来的 标题.
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',

        });

        // 2.修改首页顶部; 加入下面路由
        // const routeName = route.state
        // ? route.state.routes[route.state.index].name
        // : route.params?.screen || 'TabOne'; 

        // if(routeName === 'HomeTabs') {
        // 	navigation.setOptions({
        // 		headerTransparent: true, // 透明
        // 		headerTitle: '', // 赋空值
        // 	});
        // } else {
        // 	navigation.setOptions({
        // 		headerTransparent: false, // 这个 false 必须加
        // 		headerTitle: getHeaderTitle(routeName),
        // 	});
        // }
    }

    renderItem = ({ item }: { item: IHotList }) => {
        return (
            <View style={styles.item}>
                <Image source={{ uri: item.imgUrl }} style={styles.image} />
                <View style={styles.text}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={4} style={styles.desc} >{item.desc}</Text>
                </View>
            </View>
        )
    }
    keyExtractor = (item:IHotList) => {
        return item.id
    }

    _onRefresh = () => {
        
        // this.props.changeRefreshing()
        // this.getListData()
        
        this.setState({
            refreshing: true, // 要下拉刷新, refreshing 得为 true;
        })
        // alert(this.props.list)
        this.getListData2() // 去获取数据,再把 refreshing 赋值为 false; 就可以一直下拉刷新了;
    }

    render() {
        const { navigation, route} = this.props;
        // alert(this.props.refreshing)
        return (
            // 改成 FlatList
            // <ScrollView style={styles.container}>
            //     {/* <Text>{JSON.stringify(this.props.list)}</Text> */}
            //     {
            //         this.props.list.map((item, value) => {
            //             return (
            //                 <View key={item.id} style={styles.item}>
            //                     <Image source={{uri:item.imgUrl}} style={styles.image} />
            //                     <View style={styles.text}>
            //                         <Text style={styles.title}>{item.title}</Text>
            //                         <Text numberOfLines={4} style={styles.desc} >{item.desc}</Text>
            //                     </View>
            //                 </View>
            //              )
            //         })
            //     }
            //     {/*  route.params.title 读父组件穿过来的 标题.
            //     <Text> {route.name} </Text>
            //     <Text> {route.params.id}</Text> */}
            //     {/* <Text> {route.params}</Text> */}
            // </ScrollView>
            <FlatList
                onRefresh={this._onRefresh} // () => alert(123) 测试打印//在下拉刷新时,需要把 refreshing 赋值成 true
                refreshing={this.props.refreshing || false} // 默认 false  refreshing
                data={this.props.list} // 数据
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
        )
    }
}
const mapStateToProps = (state:any) => {
    // alert(res.data.list) //打印出 []
    return {
        list: state.list.list,
        refreshing: state.list.refreshing,
    }
     
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        changeListInfo(res:any) {
            // alert(JSON.stringify(res.data.list)) // 能打印出完整数据.
            // alert(JSON.stringify(refreshing))
            // if(res.ret && res.data.list) {
                const action = getListDataAction(res.data.list)
                // const action = {
                //     type: 'GETLISTDATA',
                //     data: res.data.list,
                //     // refreshing: false,
                // }
                // alert(JSON.stringify(res.data.list)) // 能打印出完整数据.
                dispatch(action)
                // alert(JSON.stringify(action)) // 能打印出完整数据.
                // this.setState((prevState: IHotLists)=> {
                    //     return{
                    //         list:[...prevState.list, ...res.data.list],
                    //         refreshing: false ,
                    //     }
                    // }) 
            // }
        },
        changeListInfo2(res:any) {
            const action = getonRefreshingAction(res.data.list)
            dispatch(action)
        },

        // changeRefreshing() {
        //     const action = {
        //         type: 'change_refreshing',
        //         value: true
        //     }
        //     dispatch(action)
        // }

    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(List);