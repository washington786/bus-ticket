import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../infrastructure/GlobalColors'

const Ticket = () => {
    const URI =
    "https://leetolapolokwane.co.za/wp-content/uploads/2019/01/logo.png";
  return (
    <View style={styles.con}>
      <Image source={{uri:URI}} style={styles.img}/>
    </View>
  )
}

export default Ticket

const styles = StyleSheet.create({
    con:{
        width: '100%',
        maxWidth:300,
        minWidth:300,
        backgroundColor:GlobalColors.faded,
        alignItems:'center',
        justifyContent:'center'
    },
    img: {
        maxHeight: 90,
        minHeight: 90,
        minWidth: 90,
        maxWidth: 90,
        resizeMode: "contain",
      },
})