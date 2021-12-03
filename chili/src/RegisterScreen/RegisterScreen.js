import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { styles } from "./stylesRegister";
import SvgComponent from "../TestComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import PassMeter from "react-native-passmeter";
import { LogBox } from "react-native";
import { globalColors } from "../styles";
import { handleRegister } from "../Helpers/register";
import { views } from "../Constants/constants";

LogBox.ignoreLogs(["Warning: ...", "Animated: `useNativeDriver`"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

export const RegisterScreen = ({ setView }) => {
  const [username, setUsername] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isVerifyPasswordVisible, setIsVerifyPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const isRegisterDisabled = password !== verifyPassword || password.length < 3;

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
        <Input
          inputStyle={styles.input}
          placeholder="Username"
          onChangeText={(input) => {
            setUsername(input);
          }}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={(input) => {
            setPassword(input);
          }}
          rightIcon={
            <Icon
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={24}
              color="white"
              onPress={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            />
          }
        />
        <Input
          style={styles.input}
          placeholder="Verify Password"
          secureTextEntry={!isVerifyPasswordVisible}
          onChangeText={(input) => {
            setVerifyPassword(input);
          }}
          rightIcon={
            <Icon
              name={isVerifyPasswordVisible ? "eye-slash" : "eye"}
              size={24}
              color="white"
              onPress={() => {
                setIsVerifyPasswordVisible(!isVerifyPasswordVisible);
              }}
            />
          }
        />
        <PassMeter
          showLabels
          password={password}
          maxLength={MAX_LEN}
          minLength={MIN_LEN}
          labels={PASS_LABELS}
        />

        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <Button
              title={"Register"}
              buttonStyle={styles.buttonBackgroundColor}
              disabled={isRegisterDisabled}
              onPress={() => handleRegister(username, password)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              containerStyle={styles.buttonStyle}
              buttonStyle={styles.buttonBackgroundColor}
              title={"Home"}
              onPress={() => setView(views.HOME_SCREEN)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
