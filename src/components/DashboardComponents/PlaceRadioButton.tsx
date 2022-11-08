import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import { RadioButton, Text } from 'react-native-paper';
import { GlobalColors } from '../../infrastructure/GlobalColors';

const PlaceRadioButton = () => {
    const [place,setPlace] = useState('Seshego')
  return (
    <RadioButton.Group onValueChange={newPlace => setPlace(newPlace)} value={place}>
      <View style={styles.rad}>
        <RadioButton value="seshego" color={'#0DB63C'}/>
        <Text>Seshego(zone 2 & 3)</Text>
      </View>
      <View style={styles.rad}>
        <RadioButton value="seshego2" color={'#0DB63C'}/>
        <Text>Seshego(zone 1 & madiba park)</Text>
      </View>
      <View style={styles.rad}>
        <RadioButton value="flora-park" color={'#0DB63C'}/>
        <Text>Flora Park</Text>
      </View>
      <View style={styles.rad}>
        <RadioButton value="nirvhana" color={'#0DB63C'}/>
        <Text>Nirvhana</Text>
      </View>
    </RadioButton.Group>
  )
}

export default PlaceRadioButton

const styles = StyleSheet.create({
    rad:{
        flexDirection:'row',
        alignItems:'center'
    },
    r:{
        color: GlobalColors.primary
    }
})