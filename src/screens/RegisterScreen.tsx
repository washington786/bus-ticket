import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper/ScreenWrapper'
import AuthScreenWrapper from '../components/AuthScreens/AuthScreenWrapper'
import AuthCard from '../components/AuthScreens/AuthCard'
import AuthLogo from '../components/AuthScreens/AuthLogo'
import AuthRegInputs from '../components/AuthScreens/AuthRegInputs'

const RegisterScreen = () => {
  return (
    <ScreenWrapper>
      <AuthScreenWrapper>
        <AuthCard>
          <AuthLogo />
          <AuthRegInputs />
        </AuthCard>
      </AuthScreenWrapper>
    </ScreenWrapper>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})