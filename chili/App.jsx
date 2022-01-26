import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserStateProvider } from './src/Contexts/UserContext';
import { LandingScreen } from './src/HomeScreen';
import { StarterScreen } from './src/Contests/StarterScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <UserStateProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Chili Cook Off" component={LandingScreen} />
          <Stack.Screen name="Starter Screen" component={StarterScreen} />
        </Stack.Navigator>
      </UserStateProvider>
    </NavigationContainer>
  );
}

export default App;
