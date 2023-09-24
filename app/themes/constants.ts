import { Dimensions, Platform, StatusBar } from "react-native";
import colors from "./colors";

const constants = {
  spacingLXX: 32,
  spacingLX: 24,
  spacingL: 20,
  spacing: 16,
  spacingM: 12,
  spacingS: 8,
  spacingSX: 4,
  spacingSXX: 4,

  appBackgroundColor: '#121212',
  statusBarHeight: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
  windowWidth: Dimensions.get("window").width,
  windowHeight: Dimensions.get("window").height,
};

export default constants;

const swiggyTheme = {
  orange1: "#FF321E",
  orange2: "#F15700",
  orange3: "#E24F24",

  //bg
  slate_00: "",
  // divider
  slate_15: "",
  //border
  slate_30: "",

  //text
  slate_a90: "",
  slate_a75: "",
  slate_a60: "",

  //green
  green: "#1ba672",
};
