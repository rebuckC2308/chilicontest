import * as React from "react";
import { Button } from "react-native-elements";
import { View, Text } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import SvgComponent from "../TestComponent";
import { views } from "./index";

export const HomeScreen = ({ setView }) => {
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

      <View style={styles.buttonContainer}>
        <Button
          icon={<MaterialCommunityIcons name="login" size={24} color="white" />}
          title={"Log In"}
          raised={true}
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonBackgroundColor}
          titleStyle={styles.gapIcon}
          onPress={() => setView(views.LOGIN)}
        />
        <Button
          icon={<Entypo name="bowl" size={24} color="white" />}
          title={"Register"}
          rasied={true}
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonBackgroundColor}
          titleStyle={styles.gapIcon}
          onPress={() => setView(views.REGISTER)}
        />
      </View>
    </View>
  );
};
