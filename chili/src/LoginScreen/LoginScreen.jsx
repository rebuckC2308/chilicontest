import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
// eslint-disable-next-line import/no-extraneous-dependencies
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './stylesLogin';
import { ErrorModal } from '../Modal/ErrorModal';
import { LoadingSpinner } from '../Components/LoadingSpinner';

// eslint-disable-next-line import/prefer-default-export
export function LoginScreen({
  setLocalUsername,
  setPassword,
  shouldDisplayErrorModal,
  errorModalText,
  isLoading,
  setShouldDisplayErrorModal,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View>
      <ErrorModal
        setShouldDisplayErrorModal={setShouldDisplayErrorModal}
        shouldDisplayErrorModal={shouldDisplayErrorModal}
        errorModalText={errorModalText}
      />
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
                setLocalUsername(input);
              }}
              style={{ color: 'white' }}
            />
            <Input
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={(input) => {
                setPassword(input);
              }}
              style={{ color: 'white' }}
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
    </View>
  );
}
