import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import BookTicketScreen from '../../screens/BookTicketScreen';
import CheckOutScreen from '../../screens/CheckOutScreen';
import Dashboard from '../../screens/DashboardScreen';
import PaymentSuccessful from '../../screens/PaymentSuccessful';
import TicketScreen from '../../screens/TicketScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
    }} initialRouteName='dashboard' {...TransitionPresets.ModalFadeTransition}>
        <Stack.Screen name='dashboard' component={Dashboard}/>
        <Stack.Screen name='book' component={BookTicketScreen}/>
        <Stack.Screen name='checkout' component={CheckOutScreen}/>
        <Stack.Screen name='success' component={PaymentSuccessful}/>
        <Stack.Screen name='ticket' component={TicketScreen}/>
    </Stack.Navigator>
  )
}

export default HomeStack