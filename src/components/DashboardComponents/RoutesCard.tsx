import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Caption, Card, Paragraph, Title } from "react-native-paper";

import Icons from 'react-native-vector-icons/Ionicons';
import { GlobalColors } from "../../infrastructure/GlobalColors";

interface Cp {
  caption: string;
  style?: object;
  key?:number;
  capStyle:object;
  places:string;
  pStyle?:object;
}
const RoutesCard = (props: Cp) => {
  return (
    <TouchableOpacity>
      <Card style={[props.style, styles.con]}>
        <View style={styles.wrapper}>
          <Icons name="bus" size={20} color={GlobalColors.whites.l6}/>
        <Caption style={props.capStyle}>{props.caption}</Caption>
        <Paragraph style={props.pStyle}>Bus rank - {props.places}</Paragraph>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default RoutesCard;

const styles = StyleSheet.create({
    con:{
        maxHeight:150,
        minHeight:150,
        maxWidth:150,
        minWidth:150,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        overflow: 'hidden'
    },
    wrapper:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    }
});
