import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper/ScreenWrapper'
import Header from '../components/DashboardComponents/Header.component'
import ContentDash from '../components/DashboardComponents/ContentDash.component'

const Dashboard = () => {
  return (
    <ScreenWrapper>
      <Header/>
      <ContentDash/>
    </ScreenWrapper>
  )
}

export default Dashboard

const styles = StyleSheet.create({})