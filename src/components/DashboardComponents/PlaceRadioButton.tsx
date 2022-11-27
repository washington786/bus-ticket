import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { ROUTES_DATA } from "../../data/Routes";
import { RadioButton, Text } from 'react-native-paper';
import { GlobalColors } from '../../infrastructure/GlobalColors';
import { Picker } from '@react-native-picker/picker';

const PlaceRadioButton = ({place_1,place_2,price,onSetPlace1,onSetPlace2,fee}) => {

  return (<>
    <View style={{ backgroundColor: '#fff', justifyContent: 'flex-start', flexDirection: 'row', padding: 8, alignItems: 'center' }}>
      <View>
        <Text style={styles.titles}>From:</Text>

        <Picker
          selectedValue={place_1}
          style={{ width: 160, height: 50, backgroundColor: '#eee' }}
          onValueChange={onSetPlace1}   >
          <Picker.Item label="select" value="" />
          <Picker.Item label="Seshego(zone2 N zone3)" value="Seshego" />
          <Picker.Item label="Seshego(zone1 N madiba)" value="SeshegoMadiba" />
          <Picker.Item label="Polokwane" value="CBD" />
          <Picker.Item label="Nirvhana" value="Nirvhana" />
          <Picker.Item label="Flora Park" value="Flora" />

        </Picker>
      </View>
      <View>
        <Text style={styles.titles}>To:</Text>

        <Picker
          selectedValue={place_2}
          style={{ width: 160, height: 50, backgroundColor: '#eee' }}
          onValueChange={onSetPlace2}>
          <Picker.Item label="select" value="" />
          <Picker.Item label="Seshego(zone2 N zone3)" value="Seshego" />
          <Picker.Item label="Seshego(zone1 N madiba)" value="SeshegoMadiba" />
          <Picker.Item label="Polokwane" value="CBD" />
          <Picker.Item label="Nirvhana" value="Nirvhana" />
          <Picker.Item label="Flora Park" value="Flora" />
        </Picker>
      </View>
    </View>
    {/* {
      ROUTES_DATA.filter(element => element.place1 === place1 &&
        element.place2 === place2 || element.place2 === place1 &&
        element.place1 === place2).map(item => (
          <View style={{ padding: 20 }} key={item.id}>
            <Text>Fee = {item.price}</Text>
          </View>
        ))
    } */}
   
         {fee}
    
  </>
    // <RadioButton.Group onValueChange={newPlace => setPlace(newPlace)} value={place}>
    //   <View style={styles.rad}>
    //     <RadioButton value="seshego" color={'#0DB63C'}/>
    //     <Text>Seshego(zone 2 & 3)</Text>
    //   </View>
    //   <View style={styles.rad}>
    //     <RadioButton value="seshego2" color={'#0DB63C'}/>
    //     <Text>Seshego(zone 1 & madiba park)</Text>
    //   </View>
    //   <View style={styles.rad}>
    //     <RadioButton value="flora-park" color={'#0DB63C'}/>
    //     <Text>Flora Park</Text>
    //   </View>
    //   <View style={styles.rad}>
    //     <RadioButton value="nirvhana" color={'#0DB63C'}/>
    //     <Text>Nirvhana</Text>
    //   </View>
    // </RadioButton.Group>
  )
}

export default PlaceRadioButton

const styles = StyleSheet.create({
  rad: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  r: {
    color: GlobalColors.primary
  }
})