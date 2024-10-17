import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useEffect, useState } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "@/pharmacist/store";
import { Image, SafeAreaView, Text, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
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
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    blod: require("../assets/fonts/Kodchasan-SemiBold.ttf")
    // Kodchasan: require("../assets/fonts/Kodchasan-Regular.ttf"),
  });
  const [fetchToken, setFetchToken] = useState(true)
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  (async () => {
    await SecureStore.getItemAsync('token')
      .then((resp) => {
        if (resp) {
          router.replace("./(tabs)/list")
        }
      })
      .finally(() => {
        setTimeout(() => {
          setFetchToken(false)
        }, 1000)
      })
  })()
  return (
    <>
      {
        fetchToken
          ?
          <View className="flex flex-1 justify-center items-center h-screen bg-[#65d2f9]">
            <View className="rounded-full bg-white pt-5">
              <Image className="w-60 h-24" source={require("@/assets/images/loading.gif")} />
            </View>
            <Text className="text-white font-bold text-xl">Loading...</Text>
          </View>
          :
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

      }
    </>
  );
}
