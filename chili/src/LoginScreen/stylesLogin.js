import { StyleSheet } from 'react-native';
import { globalColors } from '../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.DARK_GREY,
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
    marginHorizontal: 25,
  },

  spinner: {
    marginBottom: 150,
  },
});
