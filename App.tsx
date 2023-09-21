// Before rendering any navigation stack
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens"; // Import enableScreens

import "react-native-gesture-handler";
import { Provider } from "react-redux";
import RootNavigator from "./app/navigation/RootNavigator";
import { store } from "./app/store";

enableScreens(); // Enable the use of screens

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}


