import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';

import AppColor from '../constants';

import AppScreens from '../screens/app';

import AuthScreens from '../screens/auth';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? AppColor.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : AppColor.primary,
  headerShown: false,
};

const AuthStackNavigator = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen name="SignIn" component={AuthScreens.SignIn} />
      <AuthStackNavigator.Screen name="SignUp" component={AuthScreens.SignUp} />
    </AuthStackNavigator.Navigator>
  );
};

const AppStackNavigator = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen name="Home" component={AppScreens.Home} />
    </AppStackNavigator.Navigator>
  );
};
