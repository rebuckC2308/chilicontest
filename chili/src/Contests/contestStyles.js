import { StyleSheet } from 'react-native';
import { globalColors } from '../styles';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: globalColors.DARK_GREY,
    paddingTop: 15,
    justifyContent: 'center',
  },

  buttonContainer: { flex: 1, alignItems: 'center' },

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
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.25,
    width: '100%',
    marginBottom: 25,
    marginTop: 50,
  },

  textContainer: {
    alignItems: 'center',
    width: '100%',
  },

  text: {
    color: globalColors.LIGHT_GREY,
    fontSize: 23,
    marginBottom: 7,
  },

  mainContent: { flex: 4, justifyContent: 'center', alignItems: 'center' },

  addEntryButton: {
    backgroundColor: globalColors.ORANGE,
    height: 75,
    width: 250,
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  cancelButton: {
    backgroundColor: globalColors.ORANGE,
    height: 50,
    width: 150,
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
