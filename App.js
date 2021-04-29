import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Screen/Paypal';
import Payment from './app/Screen/Paypal/Payment';
import { NavigationContainer } from '@react-navigation/native';
import Success from './app/Screen/Paypal/Success';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}