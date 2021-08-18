import {Fonts} from '../utils/Fonts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const React = require('react-native');
const {StyleSheet, Dimensions} = React;
const {width: WIDTH, height: height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  body: {
    flex: 1,
    width: WIDTH,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTwoView: {
    flex: 2,
    alignItems: 'center',
    marginTop: '10%',
    justifyContent: 'flex-start',
  },
  headerTwoText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  QRImageView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  QRImage: {
    width: wp('50%'),
    height: hp('25%'),
  },
  bodyText: {
    color: '#fff',
    fontSize: 11,
  },
});
