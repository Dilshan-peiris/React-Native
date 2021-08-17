import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import deviceConnected from '../components/deviceConnected';
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="deviceConnect"
          component={deviceConnected}
          headerShown={false}
          initial
        />
      </Scene>
    </Router>
  );
};
export default RouterComponent;
