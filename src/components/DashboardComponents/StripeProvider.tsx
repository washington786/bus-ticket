import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { CardField, useStripe } from '@stripe/stripe-react-native';
import { useState } from 'react';

const StripeProviderComponent = ({onChangeMethod}) => {
    const { confirmPayment } = useStripe();
    
  return (
    <CardField
      postalCodeEnabled={false}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={onChangeMethod}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
  )
}

export default StripeProviderComponent

const styles = StyleSheet.create({})