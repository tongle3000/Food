import * as React from 'react';
import {
    Animated,
    Button,
    ImagePickerIOS,
    ScrollView,
    Share,
    StatusBar,
    StyleSheet,
    Touchable,
    TouchableOpacity,
} from 'react-native';
import { FlatList, TextInput, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { dataUrl } from '../units';

interface IState {
	inputValue: string,
	list: string[],
	fadeAnim?: any,
	rotate?: any,
}
let n = 0;

export default class TabOneScreen extends React.Component {

	state: IState = {
		inputValue: "",
		list: [],
		fadeAnim: new Animated.Value(0),
		rotate: new Animated.Value(0)
	};
	//   constructor(props: Readonly<{}>) {
	//     super(props);
	//     this.state = {
	//       inputValue: "",
	//       list: [1, 1, 2, 3],
	//     };
	//   }

	onSubmit = () => {

		this.setState((prevState: IState) => {
			// if(prevState.inputValue==''){
			// 		alert('请输入内容后, 再点提交.')
			// }
			if (prevState.inputValue) {
				return {
					list: [...prevState.list, prevState.inputValue],
					inputValue: ''
				}
			} else {
				// alert('请输入内容后, 再点提交.')
			}
		})
		// this.setState({
		// 	list:[...this.state.list, this.state.inputValue],
		// 	inputValue:'',
		// })
	}

	deleteItem(index: number) {
		const list = [...this.state.list];
		list.splice(index, 1); // 从第几项开始删, 删除几项;
		this.setState({
			list,
		})

	}

	onChangeText = (value: any) => {
		this.setState({
			inputValue: value,
		})
	}
	render() {
		return (
			<ScrollView
				contentContainerStyle={styles.scrollContentContainer}
			>
				<View style={styles.container}>

					<Text style={styles.title}>Tab One121</Text>
					<View style={styles.topView}>
						<TextInput
							style={styles.topViewInput}
							placeholder="请输入内容"
							placeholderTextColor="#666"
							onChangeText={this.onChangeText} value={this.state.inputValue} underlineColorAndroid="#fff"
						/>
						{/* <Button title="提交" onPress={this.onSubmit} /> */}

						{/* TouchableOpacity 点下去 没有反应
						<TouchableWithoutFeedback onPress={this.onSubmit}  style={styles.btn}>
							<Text style={styles.btnText}>提交</Text>
						</TouchableWithoutFeedback> 
					*/}
						{/* TouchableOpacity 点下去 浅色背景
						<TouchableOpacity onPress={this.onSubmit}  style={styles.btn}>
							<Text style={styles.btnText}>提交</Text>
						</TouchableOpacity> 
					*/}
						{/* TouchableHighlight 点下去 深色背景 */}
						<TouchableHighlight onPress={this.onSubmit} style={styles.btn}>
							<Text style={styles.btnText}>提交</Text>
						</TouchableHighlight>
					</View>
					{/* 把这个值赋值给 input de value */}
					<View><Text>{this.state.inputValue}</Text></View>
					<FlatList
						// data={this.state.list}
						data={this.state.list}
						renderItem={({ item, index }) => {
							return (
								<TouchableWithoutFeedback
									// key={index} 用 FlatList K 值不是写在这里, 而是写在 FlatList 里;
									onPress={() => this.deleteItem(index)} // {this.deleteItem.bind(this,index)} 这个写法也可以.
								>
									<View><Text style={styles.item}>{item}</Text></View>
								</TouchableWithoutFeedback>
							)
						}}
						keyExtractor={index => index}
					/>
					{/* {
							this.state.list.map((item, index) => {
								return (
									<TouchableWithoutFeedback  
										key={index} 
										onPress={() => this.deleteItem(index)} // {this.deleteItem.bind(this,index)} 这个写法也可以.
									>
										<View><Text style={styles.item}>{item}</Text></View>
									</TouchableWithoutFeedback>
								);
							})
						} */}
					{/* {this.getListInfo()} */}
					{/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
					{/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

					{/* 旋转  */}
					<TouchableWithoutFeedback
						onPress={() => {
							n = n + 6.28;
							Animated.timing(this.state.rotate, {
								toValue: n,
								duration: 600,
								useNativeDriver: true,
								// easing: Easing.inOut(Easing.ease)
							}).start();
						}}
					>
						<Animated.View style={[styles.box,
						{
							transform: [{
								rotate: this.state.rotate,
							}],
						}
						]}>
							<Text>点击旋转360度</Text>
						</Animated.View>
					</TouchableWithoutFeedback>


					<View style={{paddingTop:300,}}><Text></Text></View>
					<View style={styles.box}>
						<Text style={styles.text}>Original Object</Text>
					</View>

					<View style={[styles.box, {
						transform: [{ scale: 2 }]
					}]}>
						<Text style={styles.text}>Scale by 2</Text>
					</View>

					<View style={[styles.box, {
						transform: [{ scaleX: 2 }]
					}]}>
						<Text style={styles.text}>ScaleX by 2</Text>
					</View>

					<View style={[styles.box, {
						transform: [{ scaleY: 2 }]
					}]}>
						<Text style={styles.text}>ScaleY by 2</Text>
					</View>

					<View style={[styles.box, {
						transform: [{ rotate: "45deg" }]
					}]}>
						<Text style={styles.text}>Rotate by 45 deg</Text>
					</View>

					<View style={[styles.box, {
						transform: [
							{ rotateX: "45deg" },
							{ rotateZ: "45deg" }
						]
					}]}>
						<Text style={styles.text}>Rotate X&Z by 45 deg</Text>
					</View>

					<View style={[styles.box, {
						transform: [
							{ rotateY: "45deg" },
							{ rotateZ: "45deg" }
						]
					}]}>
						<Text style={styles.text}>Rotate Y&Z by 45 deg</Text>
					</View>

					<View style={[styles.box, {
						transform: [{ skewX: "45deg" }]
					}]}>
						<Text style={styles.text}>SkewX by 45 deg</Text>
					</View>

					<View style={[styles.box, {
						transform: [{ skewY: "45deg" }]
					}]}>
						<Text style={styles.text}>SkewY by 45 deg</Text>
					</View>

					<View style={[styles.box, {
						transform: [
							{ skewX: "30deg" },
							{ skewY: "30deg" }
						]
					}]}>
						<Text style={styles.text}>Skew X&Y by 30 deg</Text>
					</View>

					<View style={[styles.box, {
						transform: [{ translateX: -50 }]
					}]}>
						<Text style={styles.text}>TranslateX by -50 </Text>
					</View>

					<View style={[styles.box, {
						transform: [{ translateY: 50 }]
					}]}>
						<Text style={styles.text}>TranslateY by 50 </Text>
					</View>
				</View></ScrollView>
		);
	}

	componentDidMount() {
		this.getListInfo();
		

		/**
		 * ImagePickerIOS  换起照相功能.
		 * static openCameraDialog(config, successCallback, cancelCallback)
		 * 下面方法 视频上能调出摄像头,这里运行不行.
		 * 报错: ImagePickerIOS is not available , ImagePickerIOS 不可用
		 */
		// ImagePickerIOS.openCameraDialog({},(res)=>{alert(JSON.stringify(res))},()=>{});

		/**
		 * share 分享
		 *  运行 分享功能 会自动弹出, 因为这个方法写在了 componentDidMount里.
		 * 
		 */
		// Share.share({
		// 	message: 'hello', // 分享的内容
		// 	title: '标题', // 分享的标题
		// })

		// KeyboardAvoidingView 组件,对登录页面可以用, 键盘弹出,内容往上挤,而不会挡住.

	}

	getListInfo() {
		fetch(dataUrl + '/mock/17/rn2/list') // 只有浏览器有跨域问题, app没有.
			.then((res) => res.json()
				// alert(JSON.stringify(res));
			)
			// .then((res)=> alert(JSON.stringify(res)))
			.then((res) => {
				this.setState({
					list: res.data.list, // 把 yapi 取得数据 赋值给,state 里的 list
				})
			})

	}

}

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One11</Text>
//       {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
//       {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
//     </View>
//   );
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		// justifyContent: "center",
		paddingVertical: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	topView: {
		flexDirection: 'row',
		height: 40,
		paddingHorizontal: 10,
	},
	topViewInput: {
		flex: 1,
		paddingHorizontal: 10,
		fontSize: 16,
		borderWidth: 1,
		borderColor: '#ccc',
		marginRight: 6,
		borderRadius: 4,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	item: {
		lineHeight: 30,
	},
	btn: {
		height: 40,
		paddingHorizontal: 20,
		backgroundColor: '#0777E0',
		borderRadius: 4,
	},
	btnText: {
		color: '#fff',
		fontSize: 14,
		lineHeight: 40,
	},
	// box:{
	// 	// width: 50,
	// 	// height: 50,
	// 	// backgroundColor: 'red',
	// 	// transform:[{rotate:'30' }],
	// },
	scrollContentContainer: {
		alignItems: "center",
		paddingBottom: 60
	},
	box: {
		height: 100,
		width: 100,
		borderRadius: 5,
		marginVertical: 40,
		backgroundColor: "#61dafb",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontSize: 14,
		fontWeight: "bold",
		margin: 8,
		color: "#000",
		textAlign: "center"
	}
});

