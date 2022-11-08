import { StyleSheet, View } from 'react-native'
import React from 'react';
import { GlobalColors } from '../../infrastructure/GlobalColors';

const AuthCard = (props: any) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  )
}

export default AuthCard

const styles = StyleSheet.create({
    con:{
        width:'90%',
        marginHorizontal:15,
        padding:8,
        backgroundColor: GlobalColors.white,
        borderRadius:5
    }
})