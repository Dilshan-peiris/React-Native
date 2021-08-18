import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../styles/QRScreenStyles';

const QR = require('../assets/QR.png');

class QRScreen extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>
              Scan the QR Code
            </Text>
          </View>
          <View style={styles.headerTwoView}>
            <Text style={styles.headerTwoText}>
              Please scan the QR code in your box {'\n'} to connect the device
              with you you phone
            </Text>
          </View>
          <View style={styles.QRImageView}>
            <Image source={QR} style={styles.QRImage} />
            <Text style={styles.bodyText}>Place the code inside the frame</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default QRScreen;
