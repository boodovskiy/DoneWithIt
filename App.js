import React, { useState, useEffect, useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import navigationTheme from "./app/navigation/navigationTheme";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        const storedUser = await authStorage.getUser();
        if (storedUser) setUser(storedUser);
      } catch (e) {
        console.warn("Error restoring user:", e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Or a fallback loader if you prefer
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme} onReady={onLayoutRootView}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}
