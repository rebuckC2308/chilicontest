import React, { useState } from 'react';
import {
  View, Text,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/FontAwesome';
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
            <Input
              placeholder="Username"
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={(input) => {
                setUsername(input);
              }}
            />
            <Input
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
              autoComplete="off"
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
          </View>
        )}
      <View style={styles.buttons}>
        <View style={styles.buttonContainers}>
          <Button
            buttonStyle={styles.buttonBackgroundColor}
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
        <View style={styles.buttonContainers}>
          <Button
            buttonStyle={styles.buttonBackgroundColor}
            color={globalColors.ORANGE}
            title="Register"
            onPress={() => setView(views.REGISTER)}
          />
        </View>

      </View>
    </View>
  );
}
