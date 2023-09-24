import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EmailScreen from "../screens/auth/EmailScreen";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import DrawerNavigator from "./DrawerNavigator";
import { ROUTES_NAMES } from "./Routes";
import TabsNavigator from "./TabsNavigator";

const Stack = createStackNavigator();

const AuthNavigator = ({ navigation }: any) => {
  const theme: any = useTheme();
  const styles = getDynamicStyles();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.text.medium,
        headerTitleAlign: "center",
        headerPressOpacity: 1,
        headerStyle: styles.headerBox,
        headerBackTitleStyle: styles.backArrow,
        headerShown: false,
        gestureEnabled: true,
        presentation: "card",
      }}
      initialRouteName={ROUTES_NAMES.WELCOME}
    >
      <Stack.Screen name={ROUTES_NAMES.WELCOME} component={WelcomeScreen} />
      <Stack.Screen
        name={ROUTES_NAMES.LOGIN}
        component={EmailScreen}
        options={{
          headerShown: true,
          presentation: "modal",
          headerTitle: "Step 1 of 3",
          headerTitleStyle: styles.headerText,
        }}
      />
      {/* <Stack.Screen name={ROUTES_NAMES.LOGIN} component={LoginScreen} /> */}
      {/* <Stack.Screen name={ROUTES_NAMES.SIGNUP} component={RegisterScreen} /> */}
      {/* <Stack.Screen name={ROUTES_NAMES.SIGNUP} component={AuthScreen} /> */}

      <Stack.Screen
        name={ROUTES_NAMES.TABS_NAVIGATOR}
        component={TabsNavigator}
      />
      <Stack.Screen
        name={ROUTES_NAMES.DRAWER_NAVIGATOR}
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    headerText: {
      fontSize: 14,
      textTransform: "capitalize",
      color: theme.colors.text.medium,
    },
    headerBox: {
      backgroundColor: theme.colors.background,
    },
    backArrow: {
      fontSize: 10,
      color: theme.colors.text.light,
    },
  });
};
