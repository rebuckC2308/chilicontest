import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./stylesLogin";
import SvgComponent from "../TestComponent";
import { globalColors } from "../styles";
import { views } from "../Constants/constants";

export const LoginScreen = ({ setView }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>Chili Cookoff</Text>
        </View>
        <View style={styles.logo}>
          <SvgComponent />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          autoCapitalize="none"
          autoComplete="off"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          autoComplete="off"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.buttonStyle}
          color={globalColors.ORANGE}
          title={"Login"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.buttonStyle}
          color={globalColors.ORANGE}
          title={"Register"}
          onPress={() => setView(views.REGISTER)}
        />
      </View>
    </View>
  );
};
