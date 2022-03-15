import React, { useState, useContext } from 'react';
import { Button } from 'react-native-elements';
import {
  View, Text, KeyboardAvoidingView, Platform, Keyboard,
} from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from './styles';
import SvgComponent from '../TestComponent';
import { views } from '../Constants/constants';
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { UserDetailsContext } from '../Contexts/UserContext';
import { handleLogin } from '../Helpers/login';

// eslint-disable-next-line import/prefer-default-export
export function HomeScreen({ setView, navigation }) {
  const { setGlobalUserName } = useContext(UserDetailsContext);

  const [localUsername, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shouldDisplayErrorModal, setShouldDisplayErrorModal] = useState(false);
  const [errorModalText, setErrorModalText] = useState('');
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

      <View style={styles.loginContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
          >
            <LoginScreen
              navigation={navigation}
              setLocalUsername={setLocalUsername}
              setPassword={setPassword}
              shouldDisplayErrorModal={shouldDisplayErrorModal}
              errorModalText={errorModalText}
              isLoading={isLoading}
              setShouldDisplayErrorModal={setShouldDisplayErrorModal}
            />
          </TouchableWithoutFeedback>
          <View style={styles.loginButtonContainer}>
            <Button
              icon={<MaterialCommunityIcons name="login" size={36} color="white" />}
              title="Log In"
              raised
              containerStyle={styles.loginButtonStyle}
              buttonStyle={styles.buttonBackgroundColor}
              titleStyle={styles.loginButtonTextStyles}
              onPress={() => handleLogin(
                localUsername,
                password,
                navigation,
                setShouldDisplayErrorModal,
                setErrorModalText,
                setIsLoading,
                setGlobalUserName,
              )}
            />
          </View>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.registerButtonContainer}>
        <Button
          icon={<Entypo name="bowl" size={24} color="white" />}
          title="Register"
          rasied
          containerStyle={styles.registerButtonStyle}
          buttonStyle={styles.buttonBackgroundColor}
          titleStyle={styles.registerButtonTextStyles}
          onPress={() => setView(views.REGISTER)}
        />
      </View>
    </View>
  );
}
