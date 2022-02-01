import React, { useState, useContext } from 'react';
import {
  View, Text, StyleSheet, Button, TextInput,
} from 'react-native';
import { ErrorModal } from '../Modal/ErrorModal';
import SvgComponent from '../TestComponent';
import { styles } from './contestStyles';
import { globalColors } from '../styles';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { createContest } from '../Helpers/contest';
import { UserDetailsContext } from '../Contexts/UserContext';

function MainContent({ setIsLoading, navigation }) {
  const {
    globalUserName, shouldDisplayErrorModal, errorModalText, isLoading,
    setShouldDisplayErrorModal, setErrorModalText, setCurrentContestAdmin,
    setCurrentContestID, currentContestAdmin, currentContestID,
  } = useContext(UserDetailsContext);
  console.log({
    globalUserName,
    shouldDisplayErrorModal,
    errorModalText,
    isLoading,
    currentContestAdmin,
    currentContestID,
  });

  return (
    <View>
      <ErrorModal
        setShouldDisplayErrorModal={setShouldDisplayErrorModal}
        shouldDisplayErrorModal={shouldDisplayErrorModal}
        errorModalText={errorModalText}
      />
      <Button
        containerStyle={styles.buttonStyle}
        color={globalColors.ORANGE}
        title="Create A Contest"
        onPress={() => {
          createContest({
            setIsLoading,
            globalUserName,
            navigation,
            setShouldDisplayErrorModal,
            setErrorModalText,
            setCurrentContestAdmin,
            setCurrentContestID,
          });
        }}
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
export function StarterScreen({ navigation }) {
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
        {isLoading ? <LoadingSpinner /> : (
          <MainContent
            navigation={navigation}
            setIsLoading={setIsLoading}
          />
        )}
      </View>
    </View>
  );
}

// eslint-disable-next-line no-unused-vars
const style = StyleSheet.create({});
