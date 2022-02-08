import { StyleSheet, Dimensions } from 'react-native';
import { globalColors } from '../styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 30,
    color: globalColors.DARK_GREY,
  },

  inputs: {
    backgroundColor: globalColors.LIGHT_GREY,
  },

  button: {
    color: globalColors.ORANGE,
  },

});
