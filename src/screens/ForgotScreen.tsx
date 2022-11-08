import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper/ScreenWrapper'
import AuthScreenWrapper from '../components/AuthScreens/AuthScreenWrapper'
import AuthCard from '../components/AuthScreens/AuthCard'
import AuthLogo from '../components/AuthScreens/AuthLogo'
import AuthResetInputs from '../components/AuthScreens/AuthResetInputs'

const ForgotScreen = () => {
  return (
    <ScreenWrapper>
      <AuthScreenWrapper>
        <AuthCard>
          <AuthLogo />
          <AuthResetInputs />
        </AuthCard>
      </AuthScreenWrapper>
    </ScreenWrapper>
  )
}

export default ForgotScreen

const styles = StyleSheet.create({})