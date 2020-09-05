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



const App = () => {
	// 新
	const [modalVisible, setModalVisible] = useState(false);
	// 旧
	// state = { modalVisible: false }
	// setModalVisible(visible) {
	//   this.setState({ modalVisible: visiable })
	// }

	/**
	 * Hooks 
	 * 
	 * useColorScheme
	 * const colorScheme = useColorScheme();
	 * <Text>useColorScheme(): {colorScheme}</Text>
	 * 
	 * 
	 */
	const colorScheme = useColorScheme();
	const windowWidth = useWindowDimensions().width;
	const windowHeight = useWindowDimensions().height;
	const window = useWindowDimensions();

	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="slide" // fade 渐隐渐现;
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
								setModalVisible(!modalVisible);
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
					setModalVisible(true);
				}}
			>
				<Text style={styles.textStyle}>Show Modal</Text>
			</TouchableHighlight>

			{/* 拖动 */}
			<Slider style={{ width: 200 }} />

			<Text>useColorScheme(): {colorScheme}</Text>

			<Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}`}</Text>

			
		</View>
	);
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

export default App;
