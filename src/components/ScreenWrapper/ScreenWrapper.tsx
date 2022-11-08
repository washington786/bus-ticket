import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../infrastructure/GlobalColors'

const ScreenWrapper = (props: any) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    con:{
        flex:1,
        backgroundColor:GlobalColors.white
    }
})