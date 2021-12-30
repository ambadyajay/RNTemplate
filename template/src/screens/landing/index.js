import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Layout} from '@ui-kitten/components';

import AppColor from '../../constents/AppColor';

// import * as authActions from '../../redux/actions/auth';

const Screen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {}, 5000);
  }, [dispatch]);

  return (
    <Layout style={styles.screen}>
      <ActivityIndicator size="large" color={AppColor.WHITE} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen;
