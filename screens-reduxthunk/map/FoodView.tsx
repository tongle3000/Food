import * as React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'react-native-amap3d';


export default class FoodMap extends React.Component {
    render() {
      return <MapView style={StyleSheet.absoluteFill}/>
    }
}

const styles = StyleSheet.create({

})