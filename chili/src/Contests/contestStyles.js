import { StyleSheet } from 'react-native';
import { globalColors } from '../styles';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: globalColors.DARK_GREY,
    display: 'flex',
  },

  buttonContainer: {
    display: 'flex',
    alignSelf: 'center',
    marginHorizontal: 16,
    width: 225,
    alignItems: 'stretch',
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
    flexGrow: 0.25,
    width: '100%',
    marginBottom: 25,
    marginTop: 50,
  },

  textContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 100,
    borderWidth: 2,
    borderColor: 'pink',
  },

  text: {
    color: globalColors.LIGHT_GREY,
    fontSize: 23,
    marginBottom: 7,
  },
});
