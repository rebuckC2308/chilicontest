import React, { useState, useContext, useEffect  } from 'react';
import {
  View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import { ErrorModal } from '../Modal/ErrorModal';
import SvgComponent from '../TestComponent';
import { styles } from './starterStyles';
import { globalColors } from '../styles';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { createContest } from '../Helpers/contest';
import { UserDetailsContext } from '../Contexts/UserContext';
import { getContestEntries } from '../Helpers/getContestEntries';
import { ContestContext } from '../Contexts/ContestContext';
import { ModalContext } from '../Contexts/ModalContext';
import { useHeaderHeight } from '@react-navigation/elements';


function MainContent({ setIsLoading, navigation }) {
  const { setCurrentContestID } = useContext(ContestContext);
  const {
    globalUserName, setCurrentContestAdmin,
  } = useContext(UserDetailsContext);
  const headerHeight = useHeaderHeight();
  const {
    shouldDisplayErrorModal, errorModalText,
    setShouldDisplayErrorModal, setErrorModalText,
  } = useContext(ModalContext);
  const [contestPIN, setContestPIN] = useState('');
  const [ keyboardOpen, setKeyboardOpen ] = useState(false)

  const joinContestDisabled = contestPIN.length === 0

  const CreateContestButton =  () => ( 
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
)

const JoinContestButton = () => ( 
  <TouchableOpacity
  onPress={() => getContestEntries({
    contestPIN,
    setCurrentContestID,
    navigation,
    setErrorModalText,
    setShouldDisplayErrorModal,
  })}
  >
  <View
    style={{
      backgroundColor: joinContestDisabled ? globalColors.LIGHT_GREY : globalColors.ORANGE,
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
        Join Contest
      </Text>
    </View>
  </View>
  </TouchableOpacity> 
)

useEffect(() => {
  const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardOpen(true);
  });
  const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardOpen(false);
    setContestPIN('')
  });

  return () => {
    showSubscription.remove();
    hideSubscription.remove();
  };
}, []);

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset = {headerHeight + 150 }
      >
          <ErrorModal
            setShouldDisplayErrorModal={setShouldDisplayErrorModal}
            shouldDisplayErrorModal={shouldDisplayErrorModal}
            errorModalText={errorModalText}
          />
          <View style={{ flex: 2, justifyContent: 'center' }}>
          {keyboardOpen ? <JoinContestButton joinContestDisabled={joinContestDisabled} /> : <CreateContestButton />}
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
              value={contestPIN}
              onChangeText={setContestPIN}
              onSubmitEditing={() => getContestEntries({
                contestPIN,
                setCurrentContestID,
                navigation,
              })}
            />
          </View>
      </KeyboardAvoidingView>
  );
}

// eslint-disable-next-line import/prefer-default-export
export function StarterScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
    </ TouchableWithoutFeedback>
  );
}
