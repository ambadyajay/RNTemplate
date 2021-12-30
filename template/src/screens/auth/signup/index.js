import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

const Screen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="SignUp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => navigation.navigate('SignIn')}>Signin</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default Screen;
