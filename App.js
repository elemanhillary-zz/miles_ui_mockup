/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, View, StatusBar} from 'react-native';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';

import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <AppNavigator />
        </ApplicationProvider>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
