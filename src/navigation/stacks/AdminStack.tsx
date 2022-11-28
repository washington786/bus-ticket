import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AdminLoginScreen from '../../Admin/AdminSignIn';
import AdminDashboard from '../../Admin/AdminDashboard';
import AdminScanner from '../../Admin/AdminScanner';

const Stack = createStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
      }} initialRouteName='adLogin' {...TransitionPresets.ModalFadeTransition}>
  
          <Stack.Screen name='adLogin' component={AdminLoginScreen}/>
          <Stack.Screen name='adDashboard' component={AdminDashboard}/>
          <Stack.Screen name='adScanner' component={AdminScanner}/>
          
      </Stack.Navigator>
  )
}

export default AdminStack