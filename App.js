import React from 'react';
import {Text, View, Button} from 'react-native';
import {Login} from './Components/Login';

const App = () => {
  function lg() {
    <Login />;
  }
  return (
    <View>
      <Text>Please login to see the details of project.</Text>
      <Button title="Login" onPress={lg} />
    </View>
  );
};
export default App;
