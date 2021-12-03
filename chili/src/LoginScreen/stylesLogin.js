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
    fontFamily: "notoserif",
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: globalColors.LIGHT_GREY,
  },

  inputContainer: {
    flexGrow: 1,
  },

  loginButton: {
    marginTop: 50,
  },

  buttonContainer: {
    display: "flex",
    alignSelf: "center",
    marginHorizontal: 16,
    marginBottom: 30,
    width: 200,
    alignItems: "stretch",
  },

  buttons: {
    marginBottom: 100,
  },
});
