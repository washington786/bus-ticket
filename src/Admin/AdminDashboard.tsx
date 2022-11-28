import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdminScanner from './AdminScanner'

const AdminDashboard = () => {
  return (
    <View style={{flex:1,}}>
      <AdminScanner/>
    </View>
  )
}

export default AdminDashboard

const styles = StyleSheet.create({})