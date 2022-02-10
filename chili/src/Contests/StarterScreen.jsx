import React, { useState, useContext } from 'react';
import {
  View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { ErrorModal } from '../Modal/ErrorModal';
import SvgComponent from '../TestComponent';
import { styles } from './starterStyles';
import { globalColors } from '../styles';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { createContest } from '../Helpers/contest';
import { UserDetailsContext } from '../Contexts/UserContext';
import { getContestEntries } from '../Helpers/getContestEntries';

function MainContent({ setIsLoading, navigation }) {
  const {
    globalUserName, shouldDisplayErrorModal, errorModalText,
    setShouldDisplayErrorModal, setErrorModalText, setCurrentContestAdmin,
    setCurrentContestID,
  } = useContext(UserDetailsContext);

  const [contestPIN, setContestPIN] = useState('');

  return (
    <View>
      <ErrorModal
        setShouldDisplayErrorModal={setShouldDisplayErrorModal}
        shouldDisplayErrorModal={shouldDisplayErrorModal}
        errorModalText={errorModalText}
      />
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <TouchableOpacity
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
        >
          <View
            style={{
              backgroundColor: globalColors.ORANGE,
              height: 75,
              width: 250,
              borderRadius: 50,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000000',
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>
                Create a New Contest
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3 }}>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.text}> Join A Contest</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Contest PIN"
          autoComplete="off"
          keyboardType="numeric"
          maxLength={5}
          onChangeText={setContestPIN}
          onSubmitEditing={() => getContestEntries({
            contestPIN,
            setCurrentContestID,
            navigation,
          })}
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
