import { RouteProp, TabNavigationState } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Alert,
    Modal,
    Slider,
    StyleSheet,
    Text,
    TouchableHighlight,
    useColorScheme,
    useWindowDimensions,
    View,
} from 'react-native';

import { RootStackNavigation } from '../navigation';
import { IHotList, RootStackParamList } from '../types';


type Route = RouteProp<RootStackParamList, "Detail"> & {
	state?: TabNavigationState;
}

interface IProps extends IHotList {
	navigation: RootStackNavigation;
	route: Route;
	// [key: string]: any;
	// getList:()=>void;
}

const WindowDimensions = () => {
	const window = useWindowDimensions();
	const colorScheme = useColorScheme();
	return (
		<View style={{ height: 200, width: 200, backgroundColor: 'red' }}>
			<Text>HOOKS</Text>
			<Text>useColorScheme, useWindowDimensions</Text>
			<Text></Text>
			<Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}`}</Text>
			<Text>useColorScheme(): {colorScheme}</Text>
		</View>
	)
}



class Detail extends React.Component<IProps> {


	// 新: 写在箭头函数里的 写法 Function Component Example
	// const [modalVisible, setModalVisible] = useState(false);
	// 旧: 写在 Class Component Example
	state = { modalVisible: false }

	setModalVisible(visible: boolean) {
		this.setState({ modalVisible: visible })
	}

	

	componentDidMount() {
		this.setOptions(); // 6.修改首页顶部;
		// alert(this.props.route.params.id) // 能获取到 父组件传过来的参数,,id 
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
	}

	render() {
		const { modalVisible } = this.state;

		return (
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert("Modal has been closed.");
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Hello World!</Text>

							<TouchableHighlight
								style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
								onPress={() => {
									this.setModalVisible(!modalVisible);
								}}
							>
								<Text style={styles.textStyle}>Hide Modal</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				<TouchableHighlight
					style={styles.openButton}
					onPress={() => {
						this.setModalVisible(true);
					}}
				>
					<Text style={styles.textStyle}>Show Modal</Text>
				</TouchableHighlight>



				{/* 拖动 */}
				<Slider style={{ width: 200 }} />
				<WindowDimensions />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	openButton: {
		backgroundColor: "#F194FF",
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	}
});

export default Detail;
