import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/splash";
import { ROUTES_NAMES } from "./Routes";

const Stack = createStackNavigator();

const SplashNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerPressOpacity: 1,
        headerBackTitleStyle: false,
        gestureEnabled: true,
        presentation: "card",

        headerShown: false,
      }}
      initialRouteName={ROUTES_NAMES.SPLASH}
    >
      <Stack.Screen name={ROUTES_NAMES.SPLASH} component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default SplashNavigator;
