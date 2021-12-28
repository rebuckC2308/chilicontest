import { StyleSheet } from "react-native";
import { globalColors } from "../styles";

export const styles = StyleSheet.create({
  //   screenContainer: {
  //     flex: 1,
  //   },

  container: {
    backgroundColor: globalColors.DARK_GREY,
    flexGrow: 1,
    borderColor: "green",
    borderWidth: 10,
  },

  logo: {
    width: 60,
    height: 60,
    display: "flex",
    borderColor: "red",
    borderWidth: 4,
  },

  titleText: {
    fontSize: 50,
    display: "flex",
    justifyContent: "center",
    color: globalColors.LIGHT_GREY,
    fontFamily: "notoserif",
    borderColor: "blue",
    borderWidth: 4,
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 100,
    borderColor: "pink",
    borderWidth: 8,
  },

  input: {
    color: globalColors.LIGHT_GREY,
    borderColor: "purple",
    borderWidth: 2,
  },

  inputContainer: {
    marginTop: 75,
    borderColor: "purple",
    borderWidth: 8,
  },

  buttons: {
    display: "flex",
    alignSelf: "center",
    marginBottom: 30,
    width: 200,
    alignItems: "stretch",
    borderColor: "orange",
    borderWidth: 4,
  },

  buttonContainer: {
    borderColor: "orange",
    borderWidth: 2,
    marginBottom: 24.5,
  },

  buttonBackgroundColor: {
    backgroundColor: globalColors.ORANGE,
  },
});
