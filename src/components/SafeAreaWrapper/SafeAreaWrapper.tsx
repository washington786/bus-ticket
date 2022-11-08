import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeAreaWrapper = (props: any) => {
  return <SafeAreaView style={styles.con}>{props.children}</SafeAreaView>;
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
});
