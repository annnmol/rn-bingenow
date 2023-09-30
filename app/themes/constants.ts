import { Dimensions, Platform, StatusBar } from "react-native";

const constants = {
  spacingLXX: 32,
  spacingLX: 24,
  spacingL: 20,
  spacing: 16,
  spacingM: 12,
  spacingS: 8,
  spacingSX: 4,
  spacingSXX: 2,
  statusBarHeight: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
  windowWidth: Dimensions.get("window").width,
  windowHeight: Dimensions.get("window").height,
};

export default constants;
