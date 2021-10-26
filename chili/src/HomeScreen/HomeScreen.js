import * as React from "react";
import { Button } from "react-native-elements";
import { View } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { styles } from "./styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          icon={<MaterialCommunityIcons name="login" size={24} color="white" />}
          title={"Log In"}
          raised={true}
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonBackgroundColor}
          titleStyle={styles.gapIcon}
        />
        <Button
          icon={<Entypo name="bowl" size={24} color="white" />}
          title={"Register"}
          rasied={true}
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonBackgroundColor}
          titleStyle={styles.gapIcon}
        />
      </View>
    </View>
  );
};
