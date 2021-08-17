/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Router from './src/navigation/router';
import deviceConnected from './src/components/deviceConnected';

class App extends Component {
  render() {
    return (
      <Router />
      // <deviceConnected />
    );
  }
}

export default App;
