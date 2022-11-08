import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalInput from "../TextInput/GlobalInput";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import { Button, Modal, Portal, Provider } from "react-native-paper";

import LottieView from "lottie-react-native";
import { GlobalFonts } from "../../infrastructure/GlobalFonts";

const AuthResetInputs = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <GlobalInput
        config={{
          placeholder: "Email address",
        }}
        customStyle={styles.input}
        icon="email"
      />
      <Button
        onPress={showModal}
        color={GlobalColors.primary}
        mode="contained"
        style={styles.btn}
      >
        submit
      </Button>
      <Button
        onPress={() => navigation.navigate("login")}
        color={GlobalColors.primary}
        mode="outlined"
        style={styles.btn}
      >
        go to login
      </Button>

      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <LottieView
              autoPlay
              style={{
                width: 200,
                height: 200,
              }}
              source={require("../../assets/success2.json")}
            />
            <Text style={styles.text}>
              Email reset link has been sent to your mails. please visit your
              mails to reset your password.
            </Text>

            <Button
              onPress={() => navigation.navigate("login")}
              color={GlobalColors.primary}
              mode="outlined"
              style={styles.btn}
            >
              done
            </Button>

          </Modal>
        </Portal>
      </Provider>
    </>
  );
};

export default AuthResetInputs;

const styles = StyleSheet.create({
  input: {
    backgroundColor: GlobalColors.whites.l1,
    borderWidth: 0.2,
    borderColor: GlobalColors.grey.l2,
    marginTop: 12,
  },
  btn: {
    padding: 5,
    marginVertical: 8,
    width:'100%'
  },
  text:{
    fontFamily: GlobalFonts.extraLight,
    color: GlobalColors.grey.l4
  }
});
