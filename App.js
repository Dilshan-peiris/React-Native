/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Router from './src/navigation/router';
import DeviceConnect from './src/components/deviceConnected';
import DeviceNotConnect from './src/components/deviceNotConnected';
class App extends Component {
  render() {
    return (
      // <Router />
      // <DeviceConnect />
      <DeviceNotConnect />
    );
  }
}

export default App;
