// core logic to determine what component is rendered
import React, { useState } from 'react';
import { HomeScreen } from './HomeScreen';
import { RegisterScreen } from '../RegisterScreen/RegisterScreen';
import { views } from '../Constants/constants';
import { LoginScreen } from '../LoginScreen/LoginScreen';

// eslint-disable-next-line import/prefer-default-export
export function LandingScreen(navigation) {
  const [view, setView] = useState(views.HOME_SCREEN);

  switch (view) {
    case views.HOME_SCREEN:
      return <HomeScreen setView={setView} />;

    case views.LOGIN:
      return <LoginScreen setView={setView} navigation={navigation} />;

    case views.REGISTER:
      return <RegisterScreen setView={setView} navigation={navigation} />;

    default:
      return null;
  }
}
