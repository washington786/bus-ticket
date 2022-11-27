import { ScrollView, StyleSheet, Text, View,FlatList } from "react-native";
import React,{useEffect,useState} from 'react'
import Ticket from "../DashboardComponents/Ticket.component";
import TicketBody from "../DashboardComponents/TicketBody.component";
import TicketFooter from "../DashboardComponents/TicketFooter.component";
import TicketFooter2 from "../DashboardComponents/TicketFooter2.component";
import { db,auth } from "../../Firebase";
const TicketMainComponent = () => {
  const CurrentID = auth.currentUser.uid;
  const [Busticket, setBusticket] = useState([])
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
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={{ alignItems: "center", marginTop: 20 }}
    >
      
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
        <TicketFooter2 style={styles.con}/>
        </> 
                    }
                />
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
