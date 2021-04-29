import React from 'react';
import { View, Text, Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

export default function App() {

  const makePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://raw.githubusercontent.com/mdrajibsk8/React-Native-Push-Notification-Firebase7/mdrajibsk8-logo/logo.png',
      currency: 'INR',
      key: 'your api key', // Your api key
      amount: '100',
      name: 'Developers Sin',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: {color: '#000000'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button 
      title="Make a Payment"
      onPress={makePayment}
      />
     </View>
  );
}
