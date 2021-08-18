import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import styles from '../styles/LoginScreenStyle';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.body}>
        <TextInput
          style={styles.emailInput}
          // onChangeText={}
          placeholder={'Email'}
        />
        <TextInput
          style={styles.passwordInput}
          // onChangeText={}
          placeholder={'Password'}
        />
      </View>
    );
  }
}
export default LoginScreen;
