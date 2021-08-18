import {Fonts} from '../utils/Fonts';
const React = require('react-native');
const {StyleSheet, Dimensions} = React;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width: WIDTH, height: height} = Dimensions.get('window');
import {StatusBar} from 'react-native';

module.exports = StyleSheet.create({
  body: {
    flex: 1,
    width: WIDTH,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  logoView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  logoImage: {
    width: wp('19%'),
    height: hp('10%'),
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 19,
    color: '#295778',
    fontWeight: 'bold',
  },
  connectedView: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('80%'),
    height: hp('30%'),
  },
  connectedImage: {
    alignItems: 'stretch',
  },
  continueButton: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    width: '75%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#27952C',
    padding: 18,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
