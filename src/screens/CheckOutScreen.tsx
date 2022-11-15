import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import StripePayment from "../components/DashboardComponents/StripePayment";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import { GlobalColors } from "../infrastructure/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import StripePaymentScreen from "../components/DashboardComponents/PaymentScreenWithStripe";

const CheckOutScreen = () => {
  
  const navigation = useNavigation();

  const [cardInfo,setCardInfo] = useState({});

  const onChangeValue=(cardDetais:any)=>{
    setCardInfo(cardDetais)
  }

  const {expiryMonth,expiryYear,last4} = cardInfo;

  // console.log(expiryMonth,' ',expiryYear,' ',last4);

  const onSubmitCheckOut=()=>{
    if(!expiryMonth || !expiryYear || !last4){
      Alert.alert('Card Error','please enter valid card details!');
      return;
    }
    navigation.navigate('success');
  }

  return (
    <ScreenWrapper>
      <ScrollView style={styles.scroll}>
        <StripePayment onValuesChange={onChangeValue}/>
       
        <View style={styles.btn}>
          <GlobalButton
            color={GlobalColors.primary}
            mode="contained"
            title="SUBMIT"
            onPress={onSubmitCheckOut}
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
