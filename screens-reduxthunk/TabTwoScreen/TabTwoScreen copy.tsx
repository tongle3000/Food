import * as React from 'react';
import { Dimensions, Image, StatusBar, StyleSheet } from 'react-native';
import { ScrollView, State, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootStackNavigation } from '../../navigation';


interface IList {
	id: string;
	title: string;
	image: string;
}

interface Categorys {
	// status: string;
	categorys: IList[];
}

const { width } = Dimensions.get("window"); // 获取屏幕宽度;
const ItemWidth = (width - 20) / 3;
const ImageWidthHeight = (width - 20) / 3 - 20;


interface IProps {
	navigation: RootStackNavigation;
}



class TabTwoScreen extends React.Component<IProps> {

	state: Categorys = {
		categorys: []
	}

	render() {
		// alert(this.props.name); //  store defaultState默认数据已经删除;
		// const {categorys} =this.props;
		// alert(width); //375
		return (
			<View style={styles.container}>
				<Image source={require("../../assets/img/banner.png")} style={styles.img} />
				<TextInput
					placeholder="请输入要搜索的内容"
					placeholderTextColor="#666"
					underlineColorAndroid="#fff"
					style={styles.search}
				/>
				<ScrollView style={styles.content}>
					<View style={styles.categoryContainer}>

						{/* <Text>{JSON.stringify(this.state.categorys)}</Text> */}
						{/* {alert(this.state.categorys)} */}
						{
							this.state.categorys.map((item) => {
								return (
									<TouchableWithoutFeedback onPress={()=>this.ItemClick(item.id, item.title)} key={item.id}>
										<View style={styles.item}>
											<Image style={styles.image} source={{ uri: item.image }} />
											<Text style={styles.ItemText}>{item.title}</Text>
										</View>
									</TouchableWithoutFeedback>
								);
							})
						}

					</View>
				</ScrollView>

				{/* <Text style={styles.title}>Tab Two</Text> */}
				{/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
			</View>
		);
	}

	componentDidMount() {
		this.getListCategory();
	}

	getListCategory() {
		fetch('http://192.168.31.55:3001/mock/17/rn2/hotfood') // 只有浏览器有跨域问题, app没有.
			.then((res) => res.json()
				// alert(JSON.stringify(res));
			)
			// .then((res)=> alert(JSON.stringify(res)))
			.then((res) => {
				// alert(JSON.stringify(res));
				this.setState({
					categorys: res.data,  // 把 yapi 取得数据 赋值给,state 里的 list
				})
			})
			.catch(() => { alert('请求异常') })

	}
    
	ItemClick(id:string,title:string) {
		// alert(id); // 能输出接收的 id;
		const { navigate }=this.props.navigation;
		navigate('List', {id:id, title:title})
	}  

	// // 下面这种写法报错
	// componentDidMount() {
	// 	fetch('http://192.168.31.55:3001/mock/11/bear/guess')
	// 		.then((res) => res.json())
	// 		.then(this.GetListSucc)
	// 		.catch(() => {alert('请求异常')})
	// }

	// GetListSucc(res:any) {
	// 	// if(res.status === '100' && res.data) {
	// 		this.setState({
	// 			categorys: res.data,
	// 		})
	// 	// }
	// 	// alert(JSON.stringify(res))
	// }
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'flex-start',
		// justifyContent:'flex-start',
		backgroundColor: "#ddd",
	},
	img: {
		borderWidth: 2,
		height: width * 0.6,
		width: width * 1,
		// resizeMode: 'contain',
		resizeMode: "cover",
	},
	search: {
		top: width * 0.45,
		height: 40,
		position: "absolute",
		left: 16,
		right: 16,
		backgroundColor: "rgba(255,255,255, .9)",
		borderRadius: 8,
		paddingHorizontal: 10,
	},
	content: {
		flex: 1,
		backgroundColor: '#fff',
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: 8,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	categoryContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		// backgroundColor:'red'
		// backgroundColor: 'green',
		// borderRadius: 8,
		// marginTop: 12,
		// marginBottom:6,
		// marginLeft:16,
		// marginRight:16,
		// padding: 9,
	},
	item: {
		// flex: 1,
		width: ItemWidth,
		alignItems: 'center',
		marginVertical: 10, // 外 竖向: 元素 与 元素之间的 边距 8
		// marginHorizontal: 6, // 外 横向: 元素 与 元素之间的 边距 5
		marginBottom: 12,
		// backgroundColor:'red'
	},
	image: {
		width: ImageWidthHeight,
		height: ImageWidthHeight,
		borderRadius: 20,
		marginBottom: 7,
	},
	ItemText: {
		// color: '#fff'
	},
});

const mapStateToProps = (state:any) => {
	return {
		// name: state.name,          // render 里 alert(this.props.name); 就能打印默认的 name: tong
	}
}

export default connect(mapStateToProps, null)(TabTwoScreen);