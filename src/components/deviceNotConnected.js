import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

import styles from '../styles/deviceNotConnectedStyles';
const logo = require('../assets/logo.png');
const disconnected = require('../assets/disconnected.png');
const connected = require('../assets/connected.png');
// const styles = require('../styles/deviceConnetStyles');
class deviceNotConnected extends Component {
  // componentDidMount() {
  //   this.requestCameraPermission();
  //   setTimeout(() => {
  //     Actions.Welcome();
  //   }, 2000);
  // }
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logoImage} />
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>DEVICE NOT CONNECTED</Text>
        </View>
        <View style={styles.disConnectedView}>
          <Image source={connected} style={styles.disConnectedImage} />
        </View>
        <View style={styles.tryAgainButton}>
          <TouchableOpacity style={styles.button} onPress={''}>
            <Text style={styles.buttonText}>TRY AGAIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default deviceNotConnected;
