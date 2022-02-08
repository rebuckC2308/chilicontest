import { StyleSheet } from 'react-native';
import { globalColors } from '../styles';

export const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
  },

  registerButtonStyle: {
    width: '50%',
  },

  loginButtonStyle: {
    width: '80%',
    marginTop: 20,
  },

  loginButtonTextStyles: {
    fontSize: 30,
    marginLeft: 15,
  },

  registerButtonTextStyles: {
    fontSize: 20,
    marginLeft: 15,
  },

  buttonBackgroundColor: {
    backgroundColor: globalColors.ORANGE,
  },

  container: {
    height: '100%',
    backgroundColor: globalColors.DARK_GREY,
  },

  loginContainer: {
    flex: 3,
    alignContent: 'center',
    justifyContent: 'center',
  },

  loginButtonContainer: {
    alignItems: 'center',
  },

  registerButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    width: 60,
    height: 60,
    display: 'flex',
  },

  titleText: {
    fontSize: 50,
    color: globalColors.LIGHT_GREY,
  },

});
