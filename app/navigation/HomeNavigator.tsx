import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../screens/home/Homescreen";

import { ROUTES_NAMES } from "./Routes";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerPressOpacity: 1,
        headerBackTitleStyle: false,
        gestureEnabled: true,
        presentation: "card",

        // headerShown: false,
      }}
      initialRouteName={ROUTES_NAMES.HOMESCREEN}
    >
      <Stack.Screen
        name={ROUTES_NAMES.HOMESCREEN}
        component={Homescreen}
        options={{ presentation: "card", headerShown: false }}
      />
      {/* <Stack.Screen name={ROUTES_NAMES.DETAILS} component={DetailsScreen} options={{presentation:'modal', headerShown:false}}/>
    <Stack.Screen name={ROUTES_NAMES.SEARCH} component={SearchScreen} options={{presentation:'modal', headerShown:false}}/>
    <Stack.Screen name={ROUTES_NAMES.VIEW_ALL_LISTINGS} component={ViewAllListings} options={{presentation:'card', headerShown:true}}/>
    <Stack.Screen name={ROUTES_NAMES.CAST_DETAILS} component={CastDetailsScreen} options={{presentation:'modal', headerShown:false}}/> */}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
