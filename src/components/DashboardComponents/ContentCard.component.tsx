import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../infrastructure/GlobalColors'

const ContentCard = (props: any) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  )
}

export default ContentCard

const styles = StyleSheet.create({
    con:{
        backgroundColor: GlobalColors.faded,
        marginTop:15,
        padding:8
    }
})