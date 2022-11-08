import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Snackbar } from "react-native-paper";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import GlobalInput from "../components/TextInput/GlobalInput";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import { GlobalColors } from "../infrastructure/GlobalColors";

const SettingScreen = () => {
  const navigation = useNavigation();

  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const onUpdateProfile = () => {
    setIsSnackBarVisible(!isSnackBarVisible);
  };

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
          flex:1,
          marginTop:60
        }}
      >
        <View style={styles.avatar}>
          <Avatar.Icon icon={"account"} size={80} style={styles.avtBg} />
        </View>

        <InputWrapper>
          <GlobalInput
            config={{
              placeholder: "Karabo Daniel",
            }}
            customStyle={styles.input}
            icon="account"
          />
          <GlobalInput
            config={{
              placeholder: "Mawasha",
            }}
            customStyle={styles.input}
            icon="account"
          />
          <GlobalInput
            config={{
              placeholder: "dkmawasha@gmail.com",
            }}
            customStyle={styles.input}
            icon="email"
          />
          <GlobalInput
            config={{
              placeholder: "+27817263718",
            }}
            customStyle={styles.input}
            icon="phone"
          />

          <Button
            style={styles.button}
            mode="contained"
            color={GlobalColors.primary}
            onPress={onUpdateProfile}
          >
            UPDATE
          </Button>
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
