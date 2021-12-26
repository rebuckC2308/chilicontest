import { StyleSheet } from "react-native";
import { globalColors } from "../styles";

export const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    marginVertical: 10,
  },

  buttonBackgroundColor: {
    backgroundColor: globalColors.ORANGE,
  },

  container: {
    height: "100%",
    display: "flex",
    backgroundColor: globalColors.DARK_GREY,
    justifyContent: "flex-end",
  },

  buttonContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 100,
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
    color: globalColors.LIGHT_GREY,
    // fontFamily: "notoserif",
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 250,
  },
});
