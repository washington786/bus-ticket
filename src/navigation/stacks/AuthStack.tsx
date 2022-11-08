import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import React from 'react'

import ForgotScreen from '../../screens/ForgotScreen';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
    }} initialRouteName='welcome' {...TransitionPresets.ModalFadeTransition}>

        <Stack.Screen name='welcome' component={WelcomeScreen}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='register' component={RegisterScreen}/>
        <Stack.Screen name='reset' component={ForgotScreen}/>
        
    </Stack.Navigator>
  )
}

export default AuthStack