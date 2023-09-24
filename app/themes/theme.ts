import { DarkTheme, DefaultTheme, useTheme } from "@react-navigation/native";
import { Appearance, ColorSchemeName, StatusBar } from "react-native";
import ColorUtils from "./colorUtils";

// Appearance.getColorScheme() === "light"
//   ? StatusBar.setBarStyle("dark-content")
//   : StatusBar.setBarStyle("light-content");

// Define your primary color
export let DEFAULT_UI_SCHEME = Appearance.getColorScheme() ?? "dark";
const PRIMARY = "#113ccf";
const WHITE = "#ffffff";
const WHITE_SURFACE = "#FEF7FF";
const BLACK = "#000000";
const BLACK_SURFACE = "#121212";



const defaultFont = {
  // fontFamily: "Inter", // Use your desired font,
  fontSize: 14,
};

// // Define your custom theme
const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: WHITE_SURFACE, // Change as needed
    primary: PRIMARY,
    primaryLightScheme: ColorUtils.generateShades(PRIMARY, WHITE, 10),
    primaryDarkScheme: ColorUtils.generateShades(PRIMARY, BLACK_SURFACE, 10),
    primaryText: {
      main: ColorUtils.hexToRgba(PRIMARY, 0.87),
      medium: ColorUtils.hexToRgba(PRIMARY, 0.7),
      light: ColorUtils.hexToRgba(PRIMARY, 0.4),
    }, // Initial text variant
    text: {
      main: ColorUtils.hexToRgba(BLACK, 0.87),
      medium: ColorUtils.hexToRgba(BLACK, 0.65),
      light: ColorUtils.hexToRgba(BLACK, 0.4),
    },
  },
  font: defaultFont,
};

const darktheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: BLACK_SURFACE, // Change as needed
    primary: PRIMARY,
    primaryLightScheme: ColorUtils.generateShades(PRIMARY, WHITE, 10),
    primaryDarkScheme: ColorUtils.generateShades(PRIMARY, BLACK, 10),
    primaryText: {
      main: ColorUtils.hexToRgba(PRIMARY, 0.87),
      medium: ColorUtils.hexToRgba(PRIMARY, 0.7),
      light: ColorUtils.hexToRgba(PRIMARY, 0.4),
    }, // Initial text variant
    text: {
      main: ColorUtils.hexToRgba(WHITE, 0.87),
      medium: ColorUtils.hexToRgba(WHITE, 0.65),
      light: ColorUtils.hexToRgba(WHITE, 0.4),
    },
  },
  font: defaultFont,
};

export const getCurrentTheme = (
  scheme: ColorSchemeName = DEFAULT_UI_SCHEME
) => {
  if (scheme === "light") {
    return lightTheme;
  } else {
    return darktheme;
  }
};

const theme = getCurrentTheme();

// Define a type for your custom theme
export type CustomTheme = typeof theme;

export default theme;
