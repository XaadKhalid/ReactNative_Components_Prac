import React from 'react';
import {Text, View, Button} from 'react-native';
import Login from './Components/Login';

const App = () => {
  return (
    <View>
      <Text>Please login to see the details of project.</Text>
      <Button
        title="Login"
        onPress={() => {
          alert('Press Ok to Close the Alert box!');
        }}
      />
      <Login />
    </View>
  );
};
export default App;
