import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainStack from '../stacks/MainStack'

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <MainStack/>
    </NavigationContainer>
  )
}

export default MainNavigation