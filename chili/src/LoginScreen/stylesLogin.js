import { StyleSheet } from 'react-native';
import { globalColors } from '../styles';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: globalColors.DARK_GREY,
    display: 'flex',
  },

  gapIcon: {
    marginLeft: 10,
  },

  logo: {
    width: 60,
    height: 60,

    display: 'flex',
  },

  titleText: {
    fontSize: 50,
    display: 'flex',
    justifyContent: 'center',
    color: globalColors.LIGHT_GREY,
    // fontFamily: "notoserif",
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    width: '100%',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: globalColors.LIGHT_GREY,
  },

  inputContainer: {
    marginBottom: 100,
  },

  buttonContainers: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 20,
    width: 200,
    alignItems: 'stretch',
  },

  buttons: {
    marginBottom: 50,
  },

  buttonBackgroundColor: {
    backgroundColor: globalColors.ORANGE,
  },

  spinner: {
    marginBottom: 150,
  },
});
