import {Dimensions} from 'react-native';
export const getWidth = (percentage) => {
    if (Dimensions.get('window').width > Dimensions.get('window').height) {
      return (Dimensions.get('window').height * percentage) / 100;
    }
    return (Dimensions.get('window').width * percentage) / 100;
  };