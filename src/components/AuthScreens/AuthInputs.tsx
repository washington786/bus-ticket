import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalInput from "../TextInput/GlobalInput";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const AuthInputs = () => {

  const navigation = useNavigation();

  return (
    <>
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
        onPress={() => navigation.navigate('reset')}
        color={GlobalColors.primary}
        mode="text"
        style={[styles.btn, styles.f]}
      >
        forgot your password?
      </Button>

      <Button
        onPress={() => navigation.navigate('main')}
        color={GlobalColors.primary}
        mode="contained"
        style={styles.btn}
      >
        Login
      </Button>

      <Button
        onPress={() => navigation.navigate('register')}
        color={GlobalColors.primary}
        mode="outlined"
        style={styles.btn}
      >
        create account
      </Button>
    </>
  );
};

export default AuthInputs;

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
