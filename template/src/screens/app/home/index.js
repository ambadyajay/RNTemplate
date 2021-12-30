import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';

import {ThemeContext} from '../../../theme/theme-context';

import action from '../../../redux/thunks';

const Screen = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const themeContext = React.useContext(ThemeContext);

  const userLogout = () => {
    dispatch(action.logout());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        style={{backgroundColor: theme['color-primary-default']}}
        title="Home"
        alignment="center"
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => userLogout()}>Logout</Button>
        <Layout style={{marginTop: 20}}>
          <Button onPress={themeContext.toggleTheme}>Switch Mode</Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Screen;
