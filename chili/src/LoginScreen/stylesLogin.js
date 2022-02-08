import { StyleSheet } from 'react-native';
import { globalColors } from '../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.DARK_GREY,
  },

  logo: {
    width: 60,
    height: 60,
  },

  inputContainer: {
    marginHorizontal: 25,
  },

  spinner: {
    marginBottom: 150,
  },
});
