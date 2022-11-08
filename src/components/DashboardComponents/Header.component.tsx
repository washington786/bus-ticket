import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { Avatar } from "react-native-paper";
import GlobalTitle from "../GlobalTexts/GlobalTitle";
import GlobalParagraph from "../GlobalTexts/GlobalParagraph";

const Header = () => {
  const sub_title =
    "let's get you started on your journey of booking tickets online. We have easy ways for you to purchase tickets online.";
  const URI =
    "https://leetolapolokwane.co.za/wp-content/uploads/2019/01/logo.png";
  return (
    <View style={styles.con}>
      <View style={styles.prof}>
        <Avatar.Icon
          icon={"account"}
          size={60}
          style={styles.Avatar}
          color={GlobalColors.primary}
        />
      </View>

      <View style={styles.textsCon}>
        <GlobalTitle
          title="Welcome To Leeto la Polokwane Buses"
          customStyle={styles.title}
        />
        <GlobalParagraph paragraph={`${sub_title}`} />
      </View>

      {/* <View style={styles.imgCon}>
        <View style={styles.imgInCon}>
          <Image source={{ uri: `${URI}` }} style={styles.img} />
        </View>
      </View> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  con: {
    height: 270,
    backgroundColor: GlobalColors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomRightRadius: 120,
    overflow:'hidden'
  },
  prof: {
    width: "100%",
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  Avatar: {
    backgroundColor: GlobalColors.white,
  },
  textsCon: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 30,
    color: GlobalColors.white,
    paddingBottom: 5,
    paddingTop:10
  },
  img: {
    maxHeight: 70,
    minHeight: 70,
    minWidth: 70,
    maxWidth: 70,
    resizeMode: "contain",
  },
  imgCon: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imgInCon:{
    backgroundColor:GlobalColors.whites.l9,
    borderTopLeftRadius:20,
    borderBottomRightRadius: 20,
    padding:5,
    marginHorizontal:30,

  }
});
