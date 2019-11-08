/* eslint-disable no-unused-vars */
import React from 'react';
import {createStackNavigator} from 'react-navigation';
import PhoneScreen from '../screens/PhoneScreen';
import PasswordScreen from '../screens/PasswordScreen';
import SociaLoginScreen from '../screens/socialScreen';
import ForgotScreen from '../screens/ForgotScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import GetRideScreen from '../screens/GetRideScreen';
import PickUpScreen from '../screens/PickUpScreen';
import DropOffScreen from '../screens/DropOffScreen'

const AppNavigator = createStackNavigator({
  Phone: {screen: PhoneScreen},
  Password: {screen: PasswordScreen},
  Confirm: {screen: ConfirmScreen},
  SociaLogin: {screen: SociaLoginScreen},
  Reset: {screen: ForgotScreen},
  GetRide: {screen: GetRideScreen},
  PickUp: {screen: PickUpScreen},
  DropOff: {screen: DropOffScreen}
});

export default AppNavigator;
