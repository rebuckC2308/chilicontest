import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Button, TextInput,
} from 'react-native';
import SvgComponent from '../TestComponent';
import { styles } from './contestStyles';
import { globalColors } from '../styles';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { createContest } from '../Helpers/contest';

function MainContent({ setIsLoading }) {
  return (
    <View>
      <Button
        containerStyle={styles.buttonStyle}
        color={globalColors.ORANGE}
        title="Create A Contest"
        onPress={() => { createContest({ setIsLoading, username: 'Test1' }); }}
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
  );
}

// eslint-disable-next-line import/prefer-default-export
export function StarterScreen() {
  const [isLoading, setIsLoading] = useState(false);
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
        {isLoading ? <LoadingSpinner /> : <MainContent setIsLoading={setIsLoading} />}
      </View>
    </View>
  );
}

// eslint-disable-next-line no-unused-vars
const style = StyleSheet.create({});
