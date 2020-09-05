import React from 'react';
import { Switch, Text, View } from 'react-native';

import styles from './styles';


interface IProps{
    nearSwitch: boolean;
    _onValueChange:(value: boolean)=> void;
}

export default class Settings extends React.Component<IProps> {
    render() {
        const { nearSwitch, _onValueChange } = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>频道开/关:</Text>
                <View style={styles.Item}>
                    <Text style={styles.subTitle}>附近美食  </Text>
                    <Switch value={nearSwitch} onValueChange={_onValueChange} />
                </View>
            </View>
        )
    }
}
