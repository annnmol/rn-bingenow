import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { ROUTES_NAMES } from "./Routes";
import HomeNavigator from "./HomeNavigator";
import { AppExpoIcons } from "../appComponents/icons";
import SearchScreen from "../screens/search";
import MyListScreen from "../screens/myList";
import UserScreen from "../screens/user";
import { useTheme } from "@react-navigation/native";
import { AppAvatar } from "../appComponents/images";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  const theme: any = useTheme();
  const styles = getDynamicStyles();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerPressOpacity: 1,
        headerStyle: {
          backgroundColor: "green",
        },
        headerShown: false,
        tabBarActiveBackgroundColor: "transparent",
        tabBarActiveTintColor: theme.colors.text.main,
        tabBarInactiveBackgroundColor: "transparent",
        tabBarInactiveTintColor: theme.colors.text.light,
        tabBarShowLabel: true,
        tabBarStyle: styles.customTabBarStyle,
        tabBarLabelStyle: styles.customTabBarLabelStyle,
      }}
      initialRouteName={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
    >
      {/* <Tab.Screen
        name={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => <AppIcon name={focused ? 'home' : "home-outline"} size={size} color={color} />,
          tabBarLabel:'Home'
        }}
      /> */}
      <Tab.Screen
        name={ROUTES_NAMES.HOMESCREEN_NAVIGATOR}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AppExpoIcons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={color}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name={ROUTES_NAMES.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AppExpoIcons
                name={focused ? "explore" : "explore"}
                size={20}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES_NAMES.MY_LIST}
        component={MyListScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AppExpoIcons
              name={focused ? "favorite" : "favorite-outline"}
              size={20}
              color={color}
            />
          ),
          tabBarLabel: "My List",
        }}
      />
      <Tab.Screen
        name={ROUTES_NAMES.ACCOUNT}
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AppAvatar
              source={require("..//assets/avatars/avatar4.webp")}
              size={20}
              style={{ borderWidth: focused ? 1 : 0, borderColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  // console.log("getDynamicStyles", theme.colors);

  return StyleSheet.create({
    customTabBarStyle: {
      // borderTopWidth: 0,
      backgroundColor: theme.colors.background,
      paddingBottom: 6,
      paddingTop: 4,
    },

    customTabBarLabelStyle: {
      fontSize: 11,
      fontWeight: "500",
      letterSpacing: 0.5,
    },
  });
};
