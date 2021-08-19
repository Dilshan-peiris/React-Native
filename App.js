/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Router from './src/navigation/Router';
import DeviceConnect from './src/components/DeviceConnected';
import DeviceNotConnect from './src/components/DeviceNotConnected';
import Login from './src/components/LoginScreen';
import QRScreen from './src/components/QRScreen';
import ScanQRScreen from './src/components/ScanQRCode';
class App extends Component {
  render() {
    return (
      // <Router />
      // <DeviceConnect />
      // <DeviceNotConnect />
      // <Login />
      // <QRScreen />
      <ScanQRScreen />
    );
  }
}

export default App;
