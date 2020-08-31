import { connect } from 'react-redux';

import { getCategorysData } from './actionCreator';
import TabTwoScreen from './Ui';





const mapStateToProps = (state:any) => {
	// alert(state.TabTwoScreen.categorys); 
	return {
		// name: state.name,          // render 里 alert(this.props.name); 就能打印默认的 name: tong
		// 取 reducer 里的数据
		categorys: state.TabTwoScreen.categorys // 初始值.
	}
}

const mapDispatchToProps = (dispatch:any) => {
	return {
		getData() {
			dispatch(getCategorysData())
		}
		
		// setCategorys(res:any) {
		// 	if(res.ret && res.data) {
		// 		const action = getSetCategorysAction(res.data)
		// 		// const action ={
		// 		// 	type: 'SET_CATEGORYS',
		// 		// 	data: res.data,
		// 		// }
		// 		dispatch(action);
		// 	}
		// }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TabTwoScreen);