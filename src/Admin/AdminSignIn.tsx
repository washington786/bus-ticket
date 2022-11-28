import { StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import AuthScreenWrapper from "../components/AuthScreens/AuthScreenWrapper";
import AuthCard from "../components/AuthScreens/AuthCard";
import AuthLogo from "../components/AuthScreens/AuthLogo";
import AuthInputs from "../components/AuthScreens/AuthInputs";
import AdminAuthInputs from "../components/AuthScreens/AdminAuthInputs";


const AdminLoginScreen = () => {
  return (
    <ScreenWrapper>
      <AuthScreenWrapper>
        <AuthCard>
          <AuthLogo />
          <AdminAuthInputs/>
        </AuthCard>
      </AuthScreenWrapper>
    </ScreenWrapper>
  );
};

export default AdminLoginScreen;

const styles = StyleSheet.create({});
