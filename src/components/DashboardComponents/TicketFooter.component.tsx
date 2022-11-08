import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../infrastructure/GlobalColors'
import { Avatar, Text } from 'react-native-paper'
import { GlobalFonts } from '../../infrastructure/GlobalFonts'

const TicketFooter = () => {
  return (
    <View style={styles.con}>
      <View style={styles.content}>
        <Avatar.Text label='A' size={40} style={styles.avt}/>
        <Text style={styles.text}>10000001</Text>
      </View>
      <View style={styles.codeCon}>
        <Image source={require('../../assets/barcode.png')} style={styles.img}/>
        <Text style={styles.text}>#8182919102</Text>
      </View>
    </View>
  )
}

export default TicketFooter

const styles = StyleSheet.create({
    con:{
        width: '100%',
        maxWidth:300,
        minWidth:300,
        backgroundColor:GlobalColors.faded,
        alignItems:'flex-start',
        justifyContent:'center',
        padding:8
    },
    avt:{
        backgroundColor: GlobalColors.primary
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        letterSpacing:2,
        fontFamily: GlobalFonts.light,
        paddingHorizontal:15
    },
    img:{
        height:30,
        width: 200,
        resizeMode:'cover'
    },
    codeCon:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        paddingVertical:5
    }
})