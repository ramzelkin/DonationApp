import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default style;
