import { StyleSheet } from 'react-native';
import { globalColors } from '../styles';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.DARK_GREY,
    height: '100%',
  },

  logo: {
    width: 60,
    height: 60,
  },

  titleText: {
    fontSize: 50,
    color: globalColors.LIGHT_GREY,
  },

  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },

  buttonContainer: {
    alignItems: 'center',
    flex: 2,
  },

  text: {
    color: globalColors.LIGHT_GREY,
    fontSize: 23,
  },

  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: globalColors.LIGHT_GREY,
    textAlign: 'center',
  },

  welcomeText: {
    color: globalColors.LIGHT_GREY,
    fontSize: 30,
    alignSelf: 'center',
  },

});
