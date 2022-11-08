import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper/ScreenWrapper'
import TicketMainComponent from '../components/TicketComponents/TicketMainComponent'
import Info from '../components/DashboardComponents/Info.component'

const ScheduleScreen = () => {
  return (
    <ScreenWrapper>
      <Info text='please use this ticket to access the bus for your trip' style={styles.info}/>
      <TicketMainComponent/>
    </ScreenWrapper>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({
  info:{
    marginHorizontal:25,
    marginTop:15
  }
})