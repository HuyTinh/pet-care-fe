import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Image, Text, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const theme = {
  ...DefaultTheme,
};

export default function RootLayout() {
  const [loaded] = useFonts({
    kodchasan: require("../assets/fonts/Kodchasan-SemiBold.ttf"),
  });
  const [fetchToken, setFetchToken] = useState(true);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded
    }
  }, [loaded]);

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync('token');

      if (token) {
        router.replace("/(tabs)/list");
      }
    };

    checkToken(); // Check token on component mount
  }, []);

  return (
    <React.Fragment>
      <PaperProvider theme={theme}>
        <BottomSheetModalProvider>
          <ThemeProvider value={DefaultTheme as any}>
            <Provider store={store}>
              <Stack>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(medicine)" options={{ headerShown: false }} />
                <Stack.Screen name="(profile)" options={{ headerShown: false }} />
                <Stack.Screen name="(changepassword)" options={{ headerShown: false }} />
                <Stack.Screen name="(forgotpassword)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
            </Provider>
          </ThemeProvider>
        </BottomSheetModalProvider>
      </PaperProvider>
    </React.Fragment>
  );
}
