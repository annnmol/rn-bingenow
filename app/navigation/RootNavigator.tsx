import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
// import { useFonts } from "expo-font";
import * as Font from "expo-font";
import React from "react";
import { StatusBar } from "react-native";
import useFirebaseAuthService from "../services/firebase/useFirebaseAuthService";
import { useAppSelector } from "../store";
import { authUserStore } from "../store/slices/AuthUserSlice";
import { theme } from "../themes";

import TabsNavigator from "./TabsNavigator";

// SplashScreen.preventAutoHideAsync();

// let customFonts = {
//   Inter: require("../assets/fonts/Inter-Regular.ttf"),
//   "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
// };

// const loadFontsAsync = async () => {
//   await Font.loadAsync(customFonts);
//   await SplashScreen.hideAsync();
// };

// React.useLayoutEffect(() => {
//   loadFontsAsync();
// }, []);

const RootNavigator = () => {
  const { isAppReady } = useFirebaseAuthService();
  const { authUser } = useAppSelector(authUserStore);

  // const onLayoutRootView = useCallback(async () => {
  //   // if (isAppReady) {
  //     await SplashScreen.hideAsync();
  //   // }
  // }, [authUser]);

  // useLayoutEffect(() => {
  //   onLayoutRootView();
  // }, [authUser]);

  if (!isAppReady) {
    console.log("app not ready getting user");
    return null;
  }

  return (
    <>
      {/* <StatusBar barStyle="light-content" backgroundColor={colors.bgColor} /> */}
      <StatusBar />
      <NavigationContainer theme={theme as any}>
        <TabsNavigator />
        {/* <AuthNavigator /> */}
        {/* {authUser?.email ? <TabsNavigator /> : <AuthNavigator />} */}
        {/* {authUser?.email ? <DrawerNavigator /> : <AuthNavigator />} */}
        {/* <AppOfflineAlert /> */}
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
