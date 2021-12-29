import React, { useState } from 'react';
import {
  View, Text, LogBox,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/FontAwesome';
import PassMeter from 'react-native-passmeter';
import { styles } from './stylesRegister';
import SvgComponent from '../TestComponent';
import { handleRegister } from '../Helpers/register';
import { views } from '../Constants/constants';
import { ErrorModal } from '../Modal/ErrorModal';

LogBox.ignoreLogs(['Warning: ...', 'Animated: `useNativeDriver`']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

const MAX_LEN = 15;
const MIN_LEN = 6;
const PASS_LABELS = ['Too Short', 'Weak', 'Normal', 'Strong', 'Secure'];

// eslint-disable-next-line import/prefer-default-export
export function RegisterScreen({ setView, navigation }) {
  const [username, setUsername] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isVerifyPasswordVisible, setIsVerifyPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [shouldDisplayErrorModal, setShouldDisplayErrorModal] = useState(false);
  const [errorModalText, setErrorModalText] = useState('');

  const isRegisterDisabled = password !== verifyPassword || password.length < 3;

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
          rightIcon={(
            <Icon
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
              size={24}
              color="white"
              onPress={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            />
          )}
        />
        <Input
          style={styles.input}
          placeholder="Verify Password"
          secureTextEntry={!isVerifyPasswordVisible}
          onChangeText={(input) => {
            setVerifyPassword(input);
          }}
          rightIcon={(
            <Icon
              name={isVerifyPasswordVisible ? 'eye-slash' : 'eye'}
              size={24}
              color="white"
              onPress={() => {
                setIsVerifyPasswordVisible(!isVerifyPasswordVisible);
              }}
            />
          )}
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
              title="Register"
              buttonStyle={styles.buttonBackgroundColor}
              disabled={isRegisterDisabled}
              onPress={() => {
                handleRegister(
                  username,
                  password,
                  navigation,
                  setShouldDisplayErrorModal,
                  setErrorModalText,
                );
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              containerStyle={styles.buttonStyle}
              buttonStyle={styles.buttonBackgroundColor}
              title="Home"
              onPress={() => setView(views.HOME_SCREEN)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
