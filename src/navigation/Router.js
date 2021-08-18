import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import deviceConnected from '../components/DeviceConnected';
import deviceNotConnected from '../components/DeviceNotConnected';
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" headerShown={false}>
        <Scene key="deviceConnect" component={deviceConnected} initial />
        <Scene key="deviceNotConnect" component={deviceNotConnected} />
      </Scene>
    </Router>
  );
};
export default RouterComponent;
