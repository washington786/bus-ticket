import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  Avatar,
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
  Snackbar,
} from "react-native-paper";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import GlobalInput from "../components/TextInput/GlobalInput";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import { GlobalColors } from "../infrastructure/GlobalColors";
import { db, auth } from "../Firebase";
const SettingScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Email, setemail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [Fullname, setFullname] = useState("");
  const [Phonenumber, setphonenumber] = useState("");
  const [uid, setUid] = useState("");
  const user = auth.currentUser.uid;
  useEffect(() => {
    db.ref(`/Bususers/` + user).on("value", (snap) => {
      setName(snap.val() && snap.val().name);
      setEmail(snap.val().email);
      setPhonenumber(snap.val().phonenumber);

      setUid(snap.val().uid);
    });
  }, []);
  const editprofile = () => {
    db.ref("Bususers")
      .child(user)
      .update({ name: Fullname, email: Email, phonenumber: Phonenumber })
      .then(() => db.ref("Bususers").once("value"))
      .then((snapshot) => snapshot.val())
      .catch((error) => ({
        errorCode: error.code,
        errorMessage: error.message,
      }));
    // setIsSnackBarVisible(!isSnackBarVisible);
  };
  const navigation = useNavigation();

  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const onUpdateProfile = () => {
    setIsSnackBarVisible(!isSnackBarVisible);
  };

  const [dialogVisible, setDialogVisible] = useState(false);

  const [isLoading,setIsLoading] = useState(false);

  if(isLoading){
    return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator size={'large'} color={GlobalColors.green}/>
      <Paragraph>Signing off...</Paragraph>
    </View>
  }

  const onShow=()=>{
    setDialogVisible(true);
  }
  const onDismiss=()=>{
    setDialogVisible(false);
  }

  const onLogoutUser=()=>{
    setIsLoading(true)
    setDialogVisible(false);
    auth.signOut();
    navigation.navigate('login');
    setIsLoading(false);
    setDialogVisible(false);
  }


  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
          flex: 1,
          marginTop: 60,
        }}
      >
        <View style={styles.avatar}>
          <Avatar.Icon icon={"account"} size={80} style={styles.avtBg} />
        </View>

        <InputWrapper>
          <GlobalInput
            config={{
              placeholder: "Karabo Daniel",

              onChangeText: (name) => setFullname(name),
              value: name,
            }}
            customStyle={styles.input}
            icon="account"
          />
          <GlobalInput
            config={{
              placeholder: "Mawasha",
              value: uid,
            }}
            customStyle={styles.input}
            icon="account"
          />
          <GlobalInput
            config={{
              placeholder: "dkmawasha@gmail.com",
              onChangeText: (email) => setemail(email),
              value: email,
            }}
            customStyle={styles.input}
            icon="email"
          />
          <GlobalInput
            config={{
              placeholder: "+27817263718",
              onChangeText: (phonenumber) => setphonenumber(phonenumber),
              value: phonenumber,
            }}
            customStyle={styles.input}
            icon="phone"
          />

          <Button
            style={styles.button}
            mode="contained"
            color={GlobalColors.primary}
            // onPress={onUpdateProfile}
            onPress={editprofile()}
          >
            UPDATE
          </Button>

          <Button
            style={styles.button}
            mode="outlined"
            color={GlobalColors.bg}
            onPress={onShow}
            icon={"exit-to-app"}
          >
            Logout
          </Button>

          <Provider>
            <View>
              <Portal>
                <Dialog visible={dialogVisible} onDismiss={onDismiss}>
                  <Dialog.Title>Logout Account</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>
                      Are you sure you want to logout your account?
                    </Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={onDismiss}>Cancel</Button>
                    <Button onPress={onLogoutUser}>Logout</Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </View>
          </Provider>
        </InputWrapper>

        <Snackbar
          style={styles.snack}
          visible={isSnackBarVisible}
          onDismiss={onUpdateProfile}
          duration={3000}
          action={{
            label: "dismiss",
            onPress: onUpdateProfile,
          }}
        >
          account details updated successfully.
        </Snackbar>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  avatar: {
    alignItems: "center",
    marginVertical: 20,
  },
  avtBg: {
    backgroundColor: GlobalColors.primary,
  },
  input: {
    backgroundColor: GlobalColors.whites.l1,
    borderWidth: 0.2,
    borderColor: GlobalColors.grey.l2,
    marginTop: 12,
  },
  button: {
    padding: 8,
    marginTop: 20,
  },
  snack: {
    backgroundColor: GlobalColors.green,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
