import { RouteProp, TabNavigationState } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { RootStackNavigation } from '../../navigation';
import { IHotList, IHotLists, RootStackParamList } from '../../types';
import { styles } from './style';



type Route = RouteProp<RootStackParamList, "List"> & {
    state?: TabNavigationState;
}

interface IProps extends IHotLists {
    navigation: RootStackNavigation;
    route: Route;
    // [key: string]: any;
    getList:()=>void;
    getRefreshingList:()=>void;
    _onRefresh:() => void;
}


export default class List extends React.Component<IProps, IHotLists> {
    // state: IHotLists = {
    //     list: [],
    //     refreshing: false,
    // }
    componentDidMount() {
        this.setOptions(); // 6.修改首页顶部;
        // alert(this.props.route.params.id) // 能获取到 父组件传过来的参数,,id 
        this.props.getList()
        // this.getListData2()
    }

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
                    <Text style={styles.title}>{item.title} redux-thunk</Text>
                    <Text numberOfLines={4} style={styles.desc} >{item.desc}</Text>
                </View>
            </View>
        )
    }
    keyExtractor = (item:IHotList) => {
        return item.id
    }

    render() {
        const { navigation, route} = this.props;
        // alert(this.props.refreshing)
        return (
            <FlatList
                onRefresh={this.props._onRefresh} // () => alert(123) 测试打印//在下拉刷新时,需要把 refreshing 赋值成 true
                refreshing={ this.props.refreshing }
                data={this.props.list} // 数据
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
        )
    }
}           