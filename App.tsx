import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// fonts
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import SafeAreaWrapper from './src/components/SafeAreaWrapper/SafeAreaWrapper';
import MainNavigation from './src/navigation/navs/MainNavigation';

import {
  en,
  registerTranslation,
} from 'react-native-paper-dates';

registerTranslation('en', en)

export default function App() {
  let [fonts] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fonts) {
    return null;
  }

  return (
    <>
      <SafeAreaWrapper>
        <MainNavigation/>
      </SafeAreaWrapper>
    </>
  );
}

