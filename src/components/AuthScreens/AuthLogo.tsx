import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AuthLogo = () => {
  const URI =
    "https://leetolapolokwane.co.za/wp-content/uploads/2019/01/logo.png";
  return (
    <View style={styles.con}>
      <Image source={{ uri: URI }} style={styles.img} />
    </View>
  );
};

export default AuthLogo;

const styles = StyleSheet.create({
    img:{
        resizeMode:"contain",
        maxHeight: 120,
        maxWidth: 120,
        minHeight: 120,
        minWidth: 120
    },
    con:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    }
});
