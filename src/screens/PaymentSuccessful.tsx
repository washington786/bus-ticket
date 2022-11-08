import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import { GlobalColors } from "../infrastructure/GlobalColors";

import LottieView from "lottie-react-native";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import { useNavigation } from "@react-navigation/native";

const PaymentSuccessful = () => {
  const navigation = useNavigation();

  const transitTicket = () => {
    navigation.navigate("ticket");
    console.log("Clicked");
  };

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/success2.json")}
        />

        <View style={styles.btn}>
          <GlobalButton
            color={GlobalColors.primary}
            mode="contained"
            title="CONTINUE"
            onPress={transitTicket}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default PaymentSuccessful;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btn: {
    marginTop: 10,
    width: "100%",
    backgroundColor: GlobalColors.primary,
    elevation: 5,
  },
});
