import React, { useState } from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { styles } from './stylesLogin';
import SvgComponent from '../TestComponent';
import { globalColors } from '../styles';
import { views } from '../Constants/constants';
import { handleLogin } from '../Helpers/login';
import { ErrorModal } from '../Modal/ErrorModal';
import { LoadingSpinner } from '../Components/LoadingSpinner';

// eslint-disable-next-line import/prefer-default-export
export function LoginScreen({ setView, navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shouldDisplayErrorModal, setShouldDisplayErrorModal] = useState(false);
  const [errorModalText, setErrorModalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <ErrorModal
        setShouldDisplayErrorModal={setShouldDisplayErrorModal}
        shouldDisplayErrorModal={shouldDisplayErrorModal}
        errorModalText={errorModalText}
      />
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>Chili Cookoff</Text>
        </View>
        <View style={styles.logo}>
          <SvgComponent />
        </View>
      </View>

      {isLoading ? (
        <View style={styles.spinner}>
          <LoadingSpinner />
        </View>
      )
        : (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username or Email"
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={(input) => {
                setUsername(input);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={(input) => {
                setPassword(input);
              }}
            />
          </View>
        )}

      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.buttonStyle}
          color={globalColors.ORANGE}
          title="Login"
          onPress={() => handleLogin(
            username,
            password,
            navigation,
            setShouldDisplayErrorModal,
            setErrorModalText,
            setIsLoading,
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.buttonStyle}
          color={globalColors.ORANGE}
          title="Register"
          onPress={() => setView(views.REGISTER)}
        />
      </View>
    </View>
  );
}
