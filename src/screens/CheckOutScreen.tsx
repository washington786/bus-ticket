import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import StripePayment from "../components/DashboardComponents/StripePayment";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import { GlobalColors } from "../infrastructure/GlobalColors";
import { useNavigation } from "@react-navigation/native";

const CheckOutScreen = () => {
  
  const navigation = useNavigation();

  const transitToSuccess=()=>{
    navigation.navigate('success');
  }

  return (
    <ScreenWrapper>
      <ScrollView style={styles.scroll}>
        <StripePayment/>
        <View style={styles.btn}>
          <GlobalButton
            color={GlobalColors.primary}
            mode="contained"
            title="SUBMIT"
            onPress={transitToSuccess}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btn:{
    marginTop:10,
    width:'100%',
    backgroundColor:GlobalColors.primary,
    elevation:5
  }
});
