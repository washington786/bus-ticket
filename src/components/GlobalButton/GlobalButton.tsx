import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

interface B {
  onPress?(): {};
  title: string;
  color: string;
  style?: object;
  mode: string;
}
const GlobalButton = (props: B) => {
  return (
    <View style={styles.con}>
      <Button color={props.color} style={[props.style,styles.btn]} mode={props.mode} onPress={props.onPress}>
        {props.title}
      </Button>
    </View>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
    con:{
        width:'100%',
        paddingHorizontal:25,
        zIndex:100
    },
    btn:{
        padding:5
    }
});
