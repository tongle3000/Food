import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useComponentWillMount } from '../hooks/useComponentWillMount.my';
import FoodMap from '../screens-reduxthunk/map/FoodView';
import { Settings } from '../screens-reduxthunk/settings';
import { actionCreate } from '../screens-reduxthunk/settings';
import TabOneScreen from '../screens-reduxthunk/TabOneScreen';
import TabTwoScreen from '../screens-reduxthunk/TabTwoScreen/TabTwoScreen';
import { BottomTabParamList, TabFourParamList, TabOneParamList, TabThreeParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


/**
 * 自定义 hook componentWillMount
 * @param props 
 */





function BottomTabNavigator(props:any) {
	
	// 自定义 ComponentWillMount
	useComponentWillMount(() => {
		// 代码块
		AsyncStorage.getItem('near', (err, value) => {
			props.changeNearStatus(value)
			// alert(props.changeNearStatus(value))
			// alert('345')
		})
	}, [])
	
	
	const colorScheme = useColorScheme();

	const {nearSwitch} =props;

	// 控制 地图 是否 显示; nearSwitch 为 true 时显示;
	let NearItem = null;
	// const {nearSwitch} = props;
	if (nearSwitch) {
		NearItem = <BottomTab.Screen
				name="TabThree"
				component={TabThreeNavigator}
				options={{
					title: '附近美食',
					tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/>
	}

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneNavigator}
				options={{
					title: '首页',
					tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoNavigator}
				options={{
					tabBarBadge: 1,
					title: '热门食品',
					tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/>
			{NearItem}
			{/* <BottomTab.Screen
				name="TabThree"
				component={TabThreeNavigator}
				options={{
				title: '地图',
				tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/> */}
			<BottomTab.Screen
				name="TabFour"
				component={TabFourNavigator}
				options={{
					title: '设置',
					tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name="TabOneScreen"
				component={TabOneScreen}
				options={{ headerTitle: 'Tab One Title' }}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerTitle: 'TabTwoScreen', headerShown: false }}
			/>
		</TabTwoStack.Navigator>
	);
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
	return (
		<TabThreeStack.Navigator>
			<TabThreeStack.Screen
				name="TabThreeScreen"
				component={FoodMap}
				options={{ headerTitle: 'TabThreeScreen', headerShown: false }}
			/>
		</TabThreeStack.Navigator>
	);
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
	return (
		<TabFourStack.Navigator>
			<TabFourStack.Screen
				name="TabFourScreen"
				component={Settings}
				options={{ headerTitle: 'TabFourScreen', headerShown: false }}
			/>
		</TabFourStack.Navigator>
	);
}




const mapState = (state: any) => {
	// alert(state.settings.nearSwitch) // 这里能读到
	return {
		nearSwitch: state.settings.nearSwitch,
	}
}

const mapDispatch = (dispatch: any) => ({
	changeNearStatus(value: boolean) {
		// alert(value);
		// alert('123')
		value = (value = true) ? true : false ;
		// 这里要派发一个 action, 改 redux 里的数据, 其实这个数据是存在 settings 组件里的
		const action = actionCreate.getSwitchChangeAction(value); //把 value 传给她
		dispatch(action);

		// if(value === true) {
		// 	value = true
		// } else {
		// 	value =false
		// }
	}
})



export default connect(mapState, mapDispatch)(BottomTabNavigator);