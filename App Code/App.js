// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen4 from './Screen4';
import Screen3 from './Screen3';
import Screen5 from './Screen5';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="Log Up" component={Register} />
        <Stack.Screen name="Main Page" component={Main} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Water inventory" component={Screen2} />
        <Stack.Screen name="Add a Plant" component={Screen3} />
        <Stack.Screen name="My Plants" component={Screen5} />
        <Stack.Screen name="Weather" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
