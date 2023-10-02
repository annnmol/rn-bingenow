import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import LoginScreen from "../screens/auth/LoginScreen";
import UpdateNameScreen from "../screens/auth/UpdateNameScreen";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import DrawerNavigator from "./DrawerNavigator";
import { ROUTES_NAMES } from "./Routes";
import TabsNavigator from "./TabsNavigator";
import RegisterScreen from "../screens/auth/RegisterScreen";

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
        presentation: "modal",
      }}
      initialRouteName={ROUTES_NAMES.WELCOME}
    >
      <Stack.Screen name={ROUTES_NAMES.WELCOME} component={WelcomeScreen} />
      <Stack.Screen
        name={ROUTES_NAMES.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: true,
          presentation: "modal",
          headerTitle: "LOGIN",
          headerTitleStyle: styles.headerText,
        }}
      />
      <Stack.Screen
        name={ROUTES_NAMES.SIGNUP}
        component={RegisterScreen}
        options={{
          headerShown: true,
          presentation: "modal",
          headerTitle: "STEP 1 OF 2",
          headerTitleStyle: styles.headerText,
        }}
      />
      <Stack.Screen
        name={ROUTES_NAMES.UPDATE_NAME}
        component={UpdateNameScreen}
        options={{
          headerShown: true,
          presentation: "transparentModal",
          headerTitle: "STEP 2 OF 2",
          headerTitleStyle: styles.headerText,
        }}
      />

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
      // fontSize: 14,
      ...theme.typography.H5,
      letterSpacing: 1,
      color: theme.colors.text.medium,
      // textTransform: "uppercase",
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
