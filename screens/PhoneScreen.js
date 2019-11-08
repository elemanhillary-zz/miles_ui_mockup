import React, {Component} from 'react';
// import VirtualKeyboard from 'react-native-virtual-keyboard';
// import {Dimensions} from 'react-native';
import Inputs from '../components/Inputs';

class PhoneScreen extends Component {
  render() {
    return (
      <>
        <Inputs
          header1="Ride with miles"
          header2="Enter your phone number to register"
          socialOrPassword="Or connect with social account"
          placeholder="Phone number"
          screenName="Password"
          keypadType="phone-pad"
          secureText={false}
        />
      </>
    );
  }
}

PhoneScreen.navigationOptions = {
  header: null,
};

export default PhoneScreen;
