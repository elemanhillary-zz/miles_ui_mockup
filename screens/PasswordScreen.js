import React, {Component} from 'react';
import Inputs from '../components/Inputs';

class PasswordScreen extends Component {
  render() {
    return (
      <>
        <Inputs
          header1="Enter your password"
          header2="Enter your password to ride with miles"
          socialOrPassword="Forgot password?"
          placeholder="Enter your password"
          keypadType="default"
          secureText={true}
        />
      </>
    );
  }
}

PasswordScreen.navigationOptions = {
  header: null,
};

export default PasswordScreen;
