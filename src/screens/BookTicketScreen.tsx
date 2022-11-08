import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import Info from "../components/DashboardComponents/Info.component";
import ContentCard from "../components/DashboardComponents/ContentCard.component";
import GlobalTitle from "../components/GlobalTexts/GlobalTitle";

import { GlobalColors } from "../infrastructure/GlobalColors";
import DatePickerComponent from "../components/DashboardComponents/DatePickerComponent";
import PlaceRadioButton from "../components/DashboardComponents/PlaceRadioButton";
import { Divider, Text } from "react-native-paper";
import { GlobalFonts } from "../infrastructure/GlobalFonts";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import { useNavigation } from "@react-navigation/native";

const BookTicketScreen = () => {

  const navigation = useNavigation();

  const onToPayment=()=>{
    navigation.navigate('checkout')
  }

  return (
    <ScreenWrapper>
      <ScrollView style={styles.scroll}>
        <Info text="please choose your schedule for your ticket." />
        <ContentCard>
          <View>
            <View>
              <DatePickerComponent />
            </View>
          </View>
        </ContentCard>

        <ContentCard>
          <View>
            <View>
              <GlobalTitle
                title="Ticket location:"
                customStyle={styles.title}
              />
              <PlaceRadioButton />
            </View>
          </View>
        </ContentCard>

        <ContentCard>
          <View>
            <GlobalTitle title="Ticket Details:" customStyle={styles.title} />
            <Divider />
            <View style={styles.res}>
              <Text style={styles.text}>Ticket Fee - R23.00</Text>
              <Text style={styles.text}>Valid Days - 4</Text>
              <Text style={styles.text}>VAT amount - R15.89</Text>
              <Divider />

              <View style={styles.totCon}>
                <Text style={[styles.text, styles.tot]}>Total Amount</Text>
                <Text style={[styles.text, styles.tot]}>R120.00</Text>
              </View>
              <Divider />
              <View style={styles.totCon}>
                <Text style={[styles.text, styles.tot]}>Total Amount(VAT)</Text>
                <Text style={[styles.text, styles.tot]}>R135.89</Text>
              </View>
            </View>
          </View>
        </ContentCard>

        <View style={styles.btn}>
          <GlobalButton
            color={GlobalColors.primary}
            mode="contained"
            title="CONTINUE"
            onPress={onToPayment}
          />
        </View>

      </ScrollView>
    </ScreenWrapper>
  );
};

export default BookTicketScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
  },
  res: {
    marginTop: 8,
  },
  text: {
    color: GlobalColors.primary,
    paddingBottom: 8,
  },
  totCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tot: {
    fontSize: 16,
    fontFamily: GlobalFonts.medium,
    paddingVertical: 8,
  },
  btn:{
    marginTop:10,
    width:'100%',
    backgroundColor:GlobalColors.primary
  }
});
