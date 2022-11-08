import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Icons from 'react-native-vector-icons/Feather';
import { GlobalColors } from '../../infrastructure/GlobalColors';
import { Caption } from 'react-native-paper';

const Info = (props: any) => {
  return (
    <View style={[styles.con,props.style]}>
      <Icons name='info' size={20} color={GlobalColors.white}/>
      <Caption style={styles.cap}>{props.text}</Caption>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
    con:{
        flexDirection:'row',
        backgroundColor: GlobalColors.primary,
        elevation: 2,
        padding:8,
        alignItems: 'center',
        borderRadius:20,
        marginVertical:10
    },
    cap:{
        color: GlobalColors.white,
        paddingHorizontal:8
    }
})