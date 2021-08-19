import React, {Component} from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from '../styles/ScanQRCodeStyles';
import logo from '../assets/logo.png';

const scanQR = require('../assets/scanQR.png');

class ScanQRCode extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Image source={logo} style={styles.logoImage} />
          </View>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Scan the QR Code</Text>
          </View>
          <View style={styles.headerTwoView}>
            <Text style={styles.headerTwoText}>
              Please scan the QR code in your box {'\n'} to connect the device
              with you you phone
            </Text>
          </View>
          <View style={styles.QRImageView}>
            <Image source={scanQR} style={styles.QRImage} />
          </View>
          <View style={styles.scanView}>
            <TouchableOpacity style={styles.scanBtn}>
              <Text style={styles.scanBtnText}>SCAN & CONNECT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default ScanQRCode;
