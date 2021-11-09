//core logic to determine what component is rendered
import React, { useState } from "react";
import { View, Text } from "react-native";
import { HomeScreen } from "./HomeScreen";
import { RegisterScreen } from "../RegisterScreen/RegisterScreen";

export const LandingScreen = () => {
  const [view, setView] = useState(views.HOME_SCREEN);

  switch (view) {
    case views.HOME_SCREEN:
      return <HomeScreen setView={setView} />;

    case views.LOGIN:
      return <Text>Login</Text>;

    case views.REGISTER:
      return <RegisterScreen />;

    default:
      return null;
  }
};

//represents the three views potnetially to be on
export const views = {
  HOME_SCREEN: "HomeScreen",
  LOGIN: "Login",
  REGISTER: "Register",
};
