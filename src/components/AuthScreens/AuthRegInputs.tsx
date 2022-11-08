import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalInput from "../TextInput/GlobalInput";
import { Button } from "react-native-paper";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { useNavigation } from "@react-navigation/native";

const AuthRegInputs = () => {
  const navigation = useNavigation();

  return (
    <>
      <GlobalInput
        config={{
          placeholder: "Full Names",
        }}
        customStyle={styles.input}
        icon="account"
      />
      <GlobalInput
        config={{
          placeholder: "Phone number",
        }}
        customStyle={styles.input}
        icon="phone"
      />
      <GlobalInput
        config={{
          placeholder: "Email address",
        }}
        customStyle={styles.input}
        icon="email"
      />
      <GlobalInput
        config={{
          placeholder: "Password",
        }}
        customStyle={styles.input}
        icon="lock"
      />
      <Button
        onPress={() => navigation.navigate("main")}
        color={GlobalColors.primary}
        mode="contained"
        style={styles.btn}
      >
        Register
      </Button>
      <Button
        onPress={() => navigation.navigate('login')}
        color={GlobalColors.primary}
        mode="outlined"
        style={styles.btn}
      >
        login
      </Button>
    </>
  );
};

export default AuthRegInputs;

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
  },
  f: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
