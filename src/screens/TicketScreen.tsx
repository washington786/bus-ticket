import { ScrollView, StyleSheet, Text, View,FlatList } from "react-native";
import React,{useEffect,useState} from 'react'
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import Ticket from "../components/DashboardComponents/Ticket.component";
import TicketBody from "../components/DashboardComponents/TicketBody.component";
import TicketFooter from "../components/DashboardComponents/TicketFooter.component";
import TicketFooter2 from "../components/DashboardComponents/TicketFooter2.component";
import { Button } from "react-native-paper";
import { GlobalColors } from "../infrastructure/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import { db,auth } from "../Firebase";
const TicketScreen = () => {
  const CurrentID = auth.currentUser.uid;
  const [Busticket, setBusticket] = useState([])
  const navigation = useNavigation();
  useEffect(() => {
    db.ref('/BusPayment').on('value', snap => {

        const Busticket = []
        snap.forEach(action => {
            const key = action.key
            const data = action.val()
            Busticket.push({
                key:key,diff:data.diff,place1:data.place1,place2:data.place2,
                totalAmount:data.totalAmount,user:data.user
            })
            
            const text=CurrentID
            if(text){
             const newData = Busticket.filter(function(item){
                 const itemData = item.user ? item.user
                 :'';
                 const textData = text;
                 return itemData.indexOf( textData)>-1;
 
             })
             setBusticket(newData)
            
           }


        })
    })
 
}, [])
  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ alignItems: "center", marginTop: 15 }}
      >
        {/* <Ticket />
        <TicketBody />
        <TicketFooter />
        <TicketFooter2 /> */}
        <FlatList
                    keyExtractor={(_, key) => key.toString()}
                  //  horizontal
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 10 }}
                    data={Busticket}
                    renderItem={({ item, index }) =><>
                    <Ticket />
        <TicketBody element={item} index={index} />
        <TicketFooter element={item} index={index} />
        <TicketFooter2 />
        </> 
                    }
                />
        {/* <Button
          mode="contained"
          color={GlobalColors.primary}
          style={styles.btn}
          onPress={()=>navigation.navigate()}
        >
          continue
        </Button> */}
        
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
