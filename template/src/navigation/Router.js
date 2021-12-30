import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {AuthNavigator, AppNavigator} from './NavigationTree';

import StartupScreen from '../screens/landing';

const RootNavigator = props => {
  const isAuth = useSelector(state => state.auth);

  console.log('isAuth ', isAuth);

  SplashScreen.hide();

  return (
    <NavigationContainer>
      {isAuth.token && <AppNavigator />}
      {!isAuth.token && isAuth.didTryAutoLogin && <AuthNavigator />}
      {!isAuth.token && !isAuth.didTryAutoLogin && <AuthNavigator />}
      {/* {!isAuth.token && !isAuth.didTryAutoLogin && <StartupScreen />} */}
    </NavigationContainer>
  );
};

export default RootNavigator;
