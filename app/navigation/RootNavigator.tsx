import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { StatusBar } from "react-native";
import useFirebaseAuthService from "../services/firebase/useFirebaseAuthService";
import { useAppSelector } from "../store";
import { authUserStore } from "../store/slices/AuthUserSlice";
import { theme } from "../themes";

import TabsNavigator from "./TabsNavigator";

// SplashScreen.preventAutoHideAsync();

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

  // const [fontsLoaded] = useFonts({
  //   'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  //   'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  //   'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  //   'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {

  //   if (fontsLoaded) {
  //      console.log("fonts loaded")
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // useLayoutEffect(() => {
  //    onLayoutRootView()
  // }, [])

  // if (!fontsLoaded) {
  //    console.log("fonts not found")
  //   return null;
  // }

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
