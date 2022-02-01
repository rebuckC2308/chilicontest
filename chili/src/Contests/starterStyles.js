import { StyleSheet } from 'react-native';
import { globalColors } from '../styles';

// eslint-disable-next-line import/prefer-default-export
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
    flexGrow: 0.5,
    width: '100%',
    marginTop: 100,
    marginBottom: 25,
    // borderColor: 'blue',
    // borderWidth: 5,
  },

  buttonContainer: {
    display: 'flex',
    alignSelf: 'center',
    marginHorizontal: 16,
    width: 225,
    alignItems: 'stretch',
    flexGrow: 0.5,
  },

  join: {
    marginTop: 25,
    display: 'flex',
    alignSelf: 'center',
    marginHorizontal: 16,
    width: 200,
    alignItems: 'stretch',
    flexGrow: 1,
  },

  text: {
    color: globalColors.LIGHT_GREY,
    fontSize: 23,
    justifyContent: 'center',
    // fontFamily: "notoserif",
    marginBottom: 7,
  },

  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: globalColors.LIGHT_GREY,
    textAlign: 'center',
    width: '100%',
  },

  welcomeText: {
    // borderColor: 'red',
    // borderWidth: 5,
    color: globalColors.LIGHT_GREY,
    fontSize: 30,
    alignSelf: 'center',
    // fontFamily: "notoserif",
    marginBottom: 75,
  },

});
