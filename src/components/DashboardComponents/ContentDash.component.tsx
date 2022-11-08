import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import { ROUTES_DATA } from "../../data/Routes";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import RoutesCard from "./RoutesCard";

import { GlobalFonts } from "../../infrastructure/GlobalFonts";
import GlobalButton from "../GlobalButton/GlobalButton";
import { useNavigation } from "@react-navigation/native";

const ContentDash = () => {
  const navigation = useNavigation();

  const onTransitTicket=()=>{
    navigation.navigate('book');
  }

  return (
    <ScrollView style={styles.con}>
      {/* <Caption style={styles.title}>View Our Routes</Caption> */}
      <View style={styles.cardsCon}>
        <RoutesCard
          caption={ROUTES_DATA[0].name}
          style={styles.card1}
          places={ROUTES_DATA[0].route}
          capStyle={styles.paragraph}
          pStyle={styles.p}
        />
        <RoutesCard
          caption={ROUTES_DATA[1].name}
          style={styles.card2}
          places={ROUTES_DATA[1].route}
          capStyle={styles.paragraph}
          pStyle={styles.p}
        />
        <RoutesCard
          caption={ROUTES_DATA[2].name}
          style={styles.card3}
          places={ROUTES_DATA[2].route}
          capStyle={styles.paragraph}
          pStyle={styles.p}
        />
        <RoutesCard
          caption={ROUTES_DATA[3].name}
          style={styles.card4}
          places={ROUTES_DATA[3].route}
          capStyle={styles.paragraph}
          pStyle={styles.p}
        />
      </View>

      <GlobalButton
        color={GlobalColors.primary}
        mode="contained"
        title="Book Ticket"
        style={styles.btn}
        onPress={onTransitTicket}
      />
      
    </ScrollView>
  );
};

export default ContentDash;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    marginTop: 25,
  },
  card1: {
    backgroundColor: GlobalColors.bg,
  },
  card2: {
    backgroundColor: GlobalColors.blue,
  },
  card3: {
    backgroundColor: GlobalColors.primary,
  },
  card4: {
    backgroundColor: GlobalColors.grey.l8,
  },
  paragraph: {
    color: GlobalColors.white,
    fontSize: 16,
    paddingVertical: 10,
    textAlign: "center",
  },
  p: {
    color: GlobalColors.whites.l5,
  },
  cardsCon: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 14,
    fontFamily: GlobalFonts.extraBold,
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
  btn: {
    marginTop: 45,
  },
});
