import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserStateProvider } from './src/Contexts/UserContext';
import { LandingScreen } from './src/HomeScreen';
import { StarterScreen } from './src/Contests/StarterScreen';
import { ContestScreen } from './src/Contests/ContestScreen';
import { globalColors } from './src/styles';
import { ContestStateProvider } from './src/Contexts/EntriesContext';
import { ModalStateProvider } from './src/Contexts/ModalContext';

const Stack = createNativeStackNavigator();
const defaultOptions = {
  title: '',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: globalColors.DARK_GREY,
  },
  headerBackTitleStyle: {

  },
};

function App() {
  return (
    <NavigationContainer>
      <UserStateProvider>
        <ModalStateProvider>
          <ContestStateProvider>
            <Stack.Navigator
              screenOptions={{ ...defaultOptions, headerShown: true }}
            >
              <Stack.Screen
                name="Starter Screen"
                component={StarterScreen}
              />

              <Stack.Screen
                name="Contest Screen"
                component={ContestScreen}
              />

              <Stack.Screen
                name="Chili Cook Off"
                component={LandingScreen}
              />
            </Stack.Navigator>
          </ContestStateProvider>
        </ModalStateProvider>
      </UserStateProvider>
    </NavigationContainer>
  );
}

export default App;
