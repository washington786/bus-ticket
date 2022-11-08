import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import AuthScreenWrapper from "../components/AuthScreens/AuthScreenWrapper";
import AuthCard from "../components/AuthScreens/AuthCard";
import AuthLogo from "../components/AuthScreens/AuthLogo";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import GlobalInput from "../components/TextInput/GlobalInput";
import { GlobalColors } from "../infrastructure/GlobalColors";
import AuthInputs from "../components/AuthScreens/AuthInputs";

const LoginScreen = () => {
  return (
    <ScreenWrapper>
      <AuthScreenWrapper>
        <AuthCard>
          <AuthLogo />
          <AuthInputs />
        </AuthCard>
      </AuthScreenWrapper>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
