import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance } from "react-native";
import { StatusBar } from "expo-status-bar";
// import * as SplashScreen from "expo-splash-screen";
// import { useFonts } from "expo-font";
import useFirebaseAuthService from "../services/firebase/useFirebaseAuthService";
import { useAppSelector } from "../store";
import { authUserStore } from "../store/slices/AuthUserSlice";
import { getCurrentTheme } from "../themes/theme";
import TabsNavigator from "./TabsNavigator";
import AuthNavigator from "./AuthNavigator";

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

  const [curTheme, setCurTheme] = React.useState(getCurrentTheme());

  React.useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      const scheme = Appearance.getColorScheme();
      setCurTheme(getCurrentTheme(scheme));
    });

    // Cleanup when the component unmounts
    return () => {
      subscription.remove();
    };
  }, []);

  if (!isAppReady) {
    console.log("app not ready getting user");
    return null;
  }

  console.log("app ready getting user", authUser?.email)

  return (
    <NavigationContainer theme={curTheme as any}>
      <StatusBar
        // style={curTheme?.dark ? "light" : "dark"}
        style={"auto"}
        animated
        networkActivityIndicatorVisible={true}
      />
 {/* <AuthNavigator /> */}
      {/* <TabsNavigator /> */}
      {authUser?.email ? <TabsNavigator /> : <AuthNavigator />}
      {/* {authUser?.email ? <DrawerNavigator /> : <AuthNavigator />} */}
      {/* <AppOfflineAlert /> */}
    </NavigationContainer>
  );
};

export default RootNavigator;
