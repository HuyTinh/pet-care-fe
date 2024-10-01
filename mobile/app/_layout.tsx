import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useEffect } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "@/pharmacist/store";
import { SafeAreaView } from "react-native";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const fontConfig = {
  web: {
    regular: {
      fontFamily: "Kodchasan",
      fontWeight: "normal",
    },
  },
  ios: {
    regular: {
      fontFamily: "Kodchasan",
      fontWeight: "normal",
    },
  },
  android: {
    regular: {
      fontFamily: "Kodchasan",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Kodchasan: require("../assets/fonts/Kodchasan-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <BottomSheetModalProvider>
      <ThemeProvider value={DefaultTheme}>
        <Provider store={store}>
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(medicine)" options={{ headerShown: false }} />
            <Stack.Screen name="(profile)" options={{ headerShown: false }} />
            <Stack.Screen
              name="(changepassword)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(forgotpassword)"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </Provider>
      </ThemeProvider>
    </BottomSheetModalProvider>
  );
}
function configureFonts(fontConfig: {
  web: { regular: { fontFamily: string; fontWeight: string } };
  ios: { regular: { fontFamily: string; fontWeight: string } };
  android: { regular: { fontFamily: string; fontWeight: string } };
}) {
  throw new Error("Function not implemented.");
}
