import React, {Component} from 'react';
import Inputs from '../components/Inputs';

class ForgotScreen extends Component {
  render() {
    return (
      <>
        <Inputs
          header1="Enter your phone number"
          header2="Enter your phone number to get the reset code"
          socialOrPassword=""
          placeholder="Enter your phone number"
          keypadType="phone-pad"
          secureText={false}
        />
      </>
    );
  }
}

ForgotScreen.navigationOptions = {
  header: null,
};

export default ForgotScreen;
