/* eslint-disable no-unused-vars */
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: AppNavigator,
  }),
);
