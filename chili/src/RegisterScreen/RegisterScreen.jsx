import React, { useState, useContext } from 'react';
import {
  View, Text, LogBox, KeyboardAvoidingView,
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
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { UserDetailsContext } from '../Contexts/UserContext';

LogBox.ignoreLogs(['Warning: ...', 'Animated: `useNativeDriver`']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

const MAX_LEN = 15;
const MIN_LEN = 6;
const PASS_LABELS = ['Too Short', 'Weak', 'Normal', 'Strong', 'Secure'];

// eslint-disable-next-line import/prefer-default-export
export function RegisterScreen({ setView, navigation }) {
  const { setGlobalUserName } = useContext(UserDetailsContext);

  const [localUsername, setLocalUsername] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isVerifyPasswordVisible, setIsVerifyPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [shouldDisplayErrorModal, setShouldDisplayErrorModal] = useState(false);
  const [errorModalText, setErrorModalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isRegisterDisabled = password !== verifyPassword || password.length < 3;

  return (
    <View style={styles.container}>
      <ErrorModal
        setShouldDisplayErrorModal={setShouldDisplayErrorModal}
        shouldDisplayErrorModal={shouldDisplayErrorModal}
        errorModalText={errorModalText}
      />
      <KeyboardAvoidingView behavior="position">

        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.titleText}>Chili Cookoff</Text>
          </View>
          <View style={styles.logo}>
            <SvgComponent />
          </View>
        </View>
        <View style={styles.inputContainer}>
          {isLoading
            ? (
              <View style={styles.spinner}>
                <LoadingSpinner />
              </View>
            )

            : (
              <>
                <Input
                  inputStyle={styles.input}
                  placeholder="Username"
                  onChangeText={(input) => {
                    setLocalUsername(input);
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
                  showLabels={false}
                  password={password}
                  maxLength={MAX_LEN}
                  minLength={MIN_LEN}
                  labels={PASS_LABELS}
                />

              </>
            )}
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttons}>
        <View style={styles.buttonContainers}>
          <Button
            title="Register"
            buttonStyle={styles.buttonBackgroundColor}
            disabled={isRegisterDisabled}
            onPress={() => {
              handleRegister(
                localUsername,
                password,
                navigation,
                setShouldDisplayErrorModal,
                setErrorModalText,
                setIsLoading,
                setGlobalUserName,
              );
            }}
          />
        </View>
        <View style={styles.buttonContainers}>
          <Button
            containerStyle={styles.buttonStyle}
            buttonStyle={styles.buttonBackgroundColor}
            title="Login"
            onPress={() => setView(views.HOME_SCREEN)}
          />
        </View>
      </View>
    </View>

  );
}
