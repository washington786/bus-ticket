import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { GlobalFonts } from "../../infrastructure/GlobalFonts";

import Icon from "react-native-vector-icons/AntDesign";

interface T{
  style?:Object;
}
const TicketFooter2 = (props: T) => {
  return (
    <View style={[styles.con,props.style]}>
      <Icon name="staro" size={50} color={GlobalColors.white} />
      <Text style={styles.text}>Journey with us.</Text>
    </View>
  );
};

export default TicketFooter2;

const styles = StyleSheet.create({
  con: {
    width: "100%",
    maxWidth: 300,
    minWidth: 300,
    height: "100%",
    maxHeight: 250,
    minHeight: 250,
    backgroundColor: GlobalColors.primary2,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderBottomRightRadius: 150,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: GlobalFonts.extraLight,
    paddingHorizontal: 15,
    color: GlobalColors.white
  },
});
