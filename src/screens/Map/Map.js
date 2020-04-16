/*
Map screen
*/

import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native'
import styles from './MapStyle'
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { BackButton } from '../../components';

class Map extends Component {

  backButtonClicked() {
    Actions.pop()
  }

  // Render UI objects 
  render() {
    return (
      <>
        <StatusBar barStyle='dark-content' />
        <View style={styles.mainConatiner}>
          <BackButton topMargin={'5%'} onPress={() => { this.backButtonClicked() }} />
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View>
      </>
    )
  }
}


export default Map;