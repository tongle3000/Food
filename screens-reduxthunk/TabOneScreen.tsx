import * as React from 'react';
import { Button, StatusBar, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { FlatList, TextInput, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';

interface IState {
	inputValue: string,
	list: string[],
}

export default class TabOneScreen extends React.Component {

	state: IState = {
		inputValue: "",
		list: [],
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
			if(prevState.inputValue){
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

	deleteItem(index:number) {
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
					<TouchableHighlight onPress={this.onSubmit}  style={styles.btn}>
						<Text style={styles.btnText}>提交</Text>
					</TouchableHighlight>
				</View>
				{/* 把这个值赋值给 input de value */}
				<View><Text>{this.state.inputValue}</Text></View>
				<FlatList
					// data={this.state.list}
					data = {this.state.list}
					renderItem ={({item, index}) => {
						return (
							<TouchableWithoutFeedback  
								// key={index} 用 FlatList K 值不是写在这里, 而是写在 FlatList 里;
								onPress={() => this.deleteItem(index)} // {this.deleteItem.bind(this,index)} 这个写法也可以.
							>
								<View><Text style={styles.item}>{item}</Text></View>
							</TouchableWithoutFeedback>
						)
					}}
					keyExtractor = { index => index }
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
				


			</View>
		);
	}

	componentDidMount() {
		this.getListInfo();
	}

	getListInfo() {
		fetch('http://192.168.31.55:3001/mock/17/rn2/list') // 只有浏览器有跨域问题, app没有.
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
});
