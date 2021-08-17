import React, {Component} from 'react';
import {AppRegistry, Image, Text, View, TouchableOpacity} from 'react-native';

import styles from '../styles/deviceConnetStyles';
const logo = require('../assets/logo.png');
const connected = require('../assets/connected.png');
// const styles = require('../styles/deviceConnetStyles');
import {Actions} from 'react-native-router-flux';
class deviceConnected extends Component {
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
          <Text style={styles.headerText}>DEVICE CONNECTED</Text>
        </View>
        <View style={styles.connectedView}>
          <Image source={connected} style={styles.connectedImage} />
        </View>
        <View style={styles.continueButton}>
          <TouchableOpacity style={styles.button} onPress={''}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default deviceConnected;
