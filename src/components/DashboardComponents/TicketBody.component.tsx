import { StyleSheet, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../infrastructure/GlobalColors";

import Icon from "react-native-vector-icons/AntDesign";
import { Paragraph, Text } from "react-native-paper";
import { GlobalFonts } from "../../infrastructure/GlobalFonts";

const TicketBody = ({ element, index }) => {
  return (
    <View style={styles.con}>
      <View style={styles.route}>
        <Text>{element.place1} - {element.place2}</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="staro" size={60} color={GlobalColors.white} />
      </View>

      <View style={styles.right}>
        <View style={styles.content}>
          <Text style={styles.price}>R{element.totalAmount}</Text>
          <Paragraph style={styles.Paragraph}>Online Purchase</Paragraph>
        </View>

        <View style={[styles.content,styles.cont]}>
          <Text style={styles.price}>Multiple Trip</Text>
          <Paragraph style={styles.Paragraph}>
            ticket valid for {element.diff}-days.
          </Paragraph>
        </View>

      </View>
    </View>
  );
};

export default TicketBody;

const styles = StyleSheet.create({
  con: {
    width: "100%",
    maxWidth: 300,
    minWidth: 300,
    minHeight: 170,
    maxHeight: 170,
    backgroundColor: GlobalColors.primary,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 8,
    position: "relative",
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: -15,
    top: 25,
  },
  route: {
    position: "absolute",
    left: 35,
    top: 0,
    backgroundColor: GlobalColors.white,
    padding: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  right: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  price: {
    color: GlobalColors.white,
    fontFamily: GlobalFonts.semiBold,
    fontSize: 20,
    letterSpacing:3
  },
  Paragraph: {
    color: GlobalColors.white,
    fontFamily: GlobalFonts.extraLight,
  },
  content:{
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  cont:{
    marginTop:12
  }
});
