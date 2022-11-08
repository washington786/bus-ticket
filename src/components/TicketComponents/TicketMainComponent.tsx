import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ticket from "../DashboardComponents/Ticket.component";
import TicketBody from "../DashboardComponents/TicketBody.component";
import TicketFooter from "../DashboardComponents/TicketFooter.component";
import TicketFooter2 from "../DashboardComponents/TicketFooter2.component";

const TicketMainComponent = () => {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={{ alignItems: "center", marginTop: 20 }}
    >
      <Ticket />
      <TicketBody />
      <TicketFooter />
      <TicketFooter2 style={styles.con} />
    </ScrollView>
  );
};

export default TicketMainComponent;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  con: {
    maxHeight: 250,
    minHeight: 250,
  },
});
