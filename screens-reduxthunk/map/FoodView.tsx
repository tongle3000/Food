/**
 * https://github.com/react-native-community/react-native-maps
 * 
 */
import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';

// interface Region {
// 	latitude: string;
// 	longitude: number;
// 	latitudeDelta?: number;
// 	longitudeDelta?: number;
// }



let LATITUDE:number=10; // 原是国外的一个坐标 30.295918458111203
let LONGITUDE:number=40; // = 120.09555143880725;
let LATITUDEDELTA= 0.02; // 改显示的大小
let LONGITUDEDELTA= 0.012;


export default class App extends React.Component<any, any> {
	state = {
		region: {
			latitude: LATITUDE, // 37.78825
			longitude: LONGITUDE, //-122.4324
			latitudeDelta: LATITUDEDELTA, // 改显示的大小
			longitudeDelta: LONGITUDEDELTA,
		},
	}



	componentWillMount() {
		// let {LATITUDE, LONGITUDE } = this.props;
		navigator.geolocation.getCurrentPosition((position) => {
			alert(JSON.stringify(position)); // 获取当前地理位置
				this.setState({
					region:{
						latitude: position.coords.latitude,
						longitude: position.coords.longitude
					}
				})
		})
	}


	render() {
		return (
			<View style={styles.container}>
				<MapView style={styles.mapStyle}
					region={this.state.region}
					// initialRegion={
					// 	this.getInitialState().region
					// }
					// onRegionChange={this.onRegionChange}
				/>

			</View>
		);
	}
	
	  

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});


/**
		 * geolocation 
		 * 获取当前位置, 调用一个成功的回调函数, 第二个是失败的回调函数,可不传,第一个必传.
		 * getCurrentPosition 获取当前地理位置
		 * 
		 * watchPosition 记录今天走了多远. 移动了多少米.
		 * 
		 * clearWatch 取消监听 移动
		 * 
		 * navigator.geolocation.getCurrentPosition((position) => {
			alert(JSON.stringify(position)); // 获取当前地理位置
		})
		 */