import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import Info from "../components/DashboardComponents/Info.component";
import ContentCard from "../components/DashboardComponents/ContentCard.component";
import GlobalTitle from "../components/GlobalTexts/GlobalTitle";
import moment from "moment";
import { GlobalColors } from "../infrastructure/GlobalColors";
import DatePickerComponent from "../components/DashboardComponents/DatePickerComponent";
import PlaceRadioButton from "../components/DashboardComponents/PlaceRadioButton";
import { Divider, Text } from "react-native-paper";
import { GlobalFonts } from "../infrastructure/GlobalFonts";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTES_DATA } from "../data/Routes";

const BookTicketScreen = ({ route }) => {
  const [Diff, setDiff] = useState(0)
  // const [StartDate, setStartDate] = useState('')
  const [Price, setPrice] = useState('')
  const navigation = useNavigation();

 

  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const [range, setRange] = React.useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({ startDate: undefined, endDate: undefined });

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(!open);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  const openDateModal = () => {
    setOpen(!open);
  }
  var a = moment(range.startDate)
  var b = moment(range.endDate)
  var diff = 0;

  const [place1, setPlace1] = useState('')
  const [place2, setPlace2] = useState('')

  let price = 0;

  const placeFee =
    ROUTES_DATA.filter(element => element.place1 === place1 &&
      element.place2 === place2 || element.place2 === place1 &&
      element.place1 === place2).map(item => {
         price = item.price
        return (
          <View style={{ padding: 20 }} key={item.id}>
            <Text>Fee = {item.price}</Text>
          </View>
        )
      }
      );

  console.log(price)

  const onSetPlace1 = (text: any) => {
    setPlace1(text)
  }

  const onSetPlace2 = (text: any) => {
    setPlace2(text)
  }

  let toalAmount = price * diff;
  const onToPayment = () => {
    navigation.navigate('checkout',{totalAmount:price*diff})
  }
  return (
    <ScreenWrapper>
      <ScrollView style={styles.scroll}>
        <Info text="please choose your schedule for your ticket." />
        <ContentCard>
          <View>
            <View>
              <DatePickerComponent
                endD={range.endDate}
                startD={range.startDate}
                onConfirm={onConfirm}
                onDismiss={onDismiss}
                range={range}
                isOpen={open}
                openDateModal={openDateModal}
              />
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
              <PlaceRadioButton
                place_1={place1}
                place_2={place2}
                price={price}
                onSetPlace1={onSetPlace1}
                onSetPlace2={onSetPlace2}
                fee={placeFee}
              />
            </View>
          </View>
        </ContentCard>

        <ContentCard>
          <View>
            <GlobalTitle title="Ticket Details:" customStyle={styles.title} />
            <Divider />
            <View style={styles.res}>
              <Text style={styles.text}>Ticket Fee - {price}</Text>
              <Text style={styles.text}>Valid Days - {diff = (b.diff(a, 'days'))}</Text>
              <Text style={styles.text}>VAT amount - R15.89</Text>
              <Divider />

              <View style={styles.totCon}>
                <Text style={[styles.text, styles.tot]}>Total Amount</Text>
                <Text style={[styles.text, styles.tot]}>R{toalAmount.toFixed(2)}</Text>
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
  btn: {
    marginTop: 10,
    width: '100%',
    backgroundColor: GlobalColors.primary
  }
});
