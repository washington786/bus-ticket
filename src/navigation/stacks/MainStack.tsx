import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AuthStack from './AuthStack';
import BottomTabsStack from './BottomTabsStack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
        <Stack.Screen name='auth' component={AuthStack}/>
        <Stack.Screen name='main' component={BottomTabsStack}/>
    </Stack.Navigator>
  )
}

export default MainStack