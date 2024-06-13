import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    color: '#ffffff',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
