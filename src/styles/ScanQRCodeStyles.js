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
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    flex: 1,
    marginTop: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    color: '#295778',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Fonts.PingFangScBold,
  },
  headerTwoView: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
    justifyContent: 'flex-start',
  },
  headerTwoText: {
    color: '#8B8B8B',
    fontSize: 11,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  QRImageView: {
    flex: 7,
    marginEnd: '6%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  QRImage: {
    width: wp('85%'),
    height: hp('50%'),
    resizeMode: 'stretch',
  },
  scanView:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scanBtn: {
    width: wp('75%'),
    padding: 15,
    backgroundColor: '#27952C',
    borderRadius: 10,
  },
  scanBtnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: Fonts.PingFangScBold,
  },
});
