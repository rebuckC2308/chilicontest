import { StyleSheet, Dimensions } from 'react-native';
import { globalColors } from '../styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    justifyContent: 'center',
  },

  button: {
    backgroundColor: globalColors.ORANGE,
    height: 60,
    width: 250,
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

});
