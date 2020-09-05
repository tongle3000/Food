import { connect } from 'react-redux';

import { getSwitchChangeAction } from './actionCreate';
import Settings from './Ui';

const mapState = (state: any) => {
    return {
        nearSwitch: state.settings.nearSwitch,
    }
}

const mapDispatch = (dispatch: any) => {
    return {
        _onValueChange(value: boolean) {
            // alert(value) ;
            const action = getSwitchChangeAction(value);
            // alert(action)
            dispatch(action);
        }
    }
}

export default connect(mapState, mapDispatch)(Settings);
