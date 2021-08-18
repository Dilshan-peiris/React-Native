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
class App extends Component {
  render() {
    return (
      <Router />
      // <DeviceConnect />
      // <DeviceNotConnect />
    );
  }
}

export default App;
