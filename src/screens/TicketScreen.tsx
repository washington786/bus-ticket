import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import Ticket from "../components/DashboardComponents/Ticket.component";
import TicketBody from "../components/DashboardComponents/TicketBody.component";
import TicketFooter from "../components/DashboardComponents/TicketFooter.component";
import TicketFooter2 from "../components/DashboardComponents/TicketFooter2.component";
import { Button } from "react-native-paper";
import { GlobalColors } from "../infrastructure/GlobalColors";
import { useNavigation } from "@react-navigation/native";

const TicketScreen = () => {

  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ alignItems: "center", marginTop: 15 }}
      >
        <Ticket />
        <TicketBody />
        <TicketFooter />
        <TicketFooter2 />

        <Button
          mode="contained"
          color={GlobalColors.primary}
          style={styles.btn}
          onPress={()=>navigation.navigate()}
        >
          continue
        </Button>
        
      </ScrollView>
    </ScreenWrapper>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btn: {
    width: "80%",
    padding: 5,
    marginVertical: 10,
  },
});
