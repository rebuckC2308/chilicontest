import { StyleSheet } from "react-native";
import { globalColors } from "../styles";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: globalColors.DARK_GREY,
    justifyContent: "space-around",
    display: "flex",
  },

  gapIcon: {
    marginLeft: 10,
  },

  logo: {
    width: 60,
    height: 60,

    display: "flex",
  },

  titleText: {
    fontSize: 50,
    display: "flex",
    justifyContent: "center",
    color: globalColors.LIGHT_GREY,
    // fontFamily: "notoserif",
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    marginTop: 100,
  },

  input: {
    color: globalColors.LIGHT_GREY,
  },

  inputContainer: {
    flexGrow: 1,
    marginTop: 75,
  },

  buttonContainer: {
    display: "flex",
    alignSelf: "center",
    marginBottom: 30,
    width: 200,
    alignItems: "stretch",
  },

  buttons: {
    marginTop: 50,
  },

  buttonBackgroundColor: {
    backgroundColor: globalColors.ORANGE,
  },
});
