import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import SvgComponent from "../TestComponent";
import { styles } from "./contestStyles";
import { globalColors } from "../styles";

export const StarterScreen = () => {
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
          containerStyle={styles.buttonStyle}
          color={globalColors.ORANGE}
          title={"Create A Contest"}
        />
        <View style={styles.join}>
          <Text style={styles.text}> Or Join A Contest</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Contest PIN"
            autoComplete="off"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});
