import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import AuthScreenWrapper from "../components/AuthScreens/AuthScreenWrapper";
import AuthCard from "../components/AuthScreens/AuthCard";
import AuthLogo from "../components/AuthScreens/AuthLogo";
import { Button } from "react-native-paper";
import { GlobalColors } from "../infrastructure/GlobalColors";
import { GlobalFonts } from "../infrastructure/GlobalFonts";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <AuthScreenWrapper>
        <AuthCard>
          <AuthLogo />
          <View>
            <Image
              source={require("../assets/welcome.png")}
              style={styles.img}
            />
            <Text style={styles.text}>
              let's help you get a comfortable way to book your bus ticket
              online with ease & locate your bus stop.
            </Text>
          </View>
          <Button
            mode="outlined"
            color={GlobalColors.primary}
            style={styles.btn}
            onPress={()=>navigation.navigate('register')}
          >
            Get started Now
          </Button>

          <Button
            mode="outlined"
            icon={'account-lock-open'}
            color={GlobalColors.bg}
            style={styles.btn}
            onPress={()=>navigation.navigate('admin')}
          >
            Admin
          </Button>
        </AuthCard>
      </AuthScreenWrapper>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  img: {
    maxHeight: 200,
    minHeight: 200,
    maxWidth: 300,
    minWidth: 300,
    resizeMode: "contain",
  },
  text: {
    fontFamily: GlobalFonts.extraLight,
    paddingVertical: 10,
    paddingHorizontal:5,
    letterSpacing:0.4
  },
  btn: {
    marginTop: 10,
  },
});
