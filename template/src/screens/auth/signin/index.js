import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';

import action from '../../../redux/thunks';

const Screen = ({navigation}) => {
  const dispatch = useDispatch();

  const userLogin = (userId, token) => {
    dispatch(action.login(userId, token));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="SignIn" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => navigation.navigate('SignUp')}>Signup</Button>
        <Layout style={{marginTop: 20}}>
          <Button onPress={() => userLogin({userId: 'userId', token: 'token'})}>
            Home
          </Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Screen;
