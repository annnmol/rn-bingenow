import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Appearance, StatusBar } from "react-native";
import ColorUtils from "./colorUtils";

Appearance.getColorScheme() === "light"
  ? StatusBar.setBarStyle("light-content")
  : StatusBar.setBarStyle("dark-content");

// Define your primary color
export const DEFAULT_UI_SCHEME = Appearance.getColorScheme() ?? "dark";
const PRIMARY = "#113ccf";
const WHITE = "#ffffff";
const WHITE_SURFACE = "#f9f9f9";
const BLACK = "#000000";
const BLACK_SURFACE = "#121212";

// // Define your custom theme
const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: WHITE_SURFACE, // Change as needed
    primary: PRIMARY,
    primaryScheme: ColorUtils.generateShades(PRIMARY, WHITE, 10),
    primary_text: {
      main: ColorUtils.hexToRgba(PRIMARY, 0.87),
      medium: ColorUtils.hexToRgba(PRIMARY, 0.6),
      light: ColorUtils.hexToRgba(PRIMARY, 0.4),
    }, // Initial text variant
    text: {
      main: ColorUtils.hexToRgba(BLACK, 0.87),
      medium: ColorUtils.hexToRgba(BLACK, 0.6),
      light: ColorUtils.hexToRgba(BLACK, 0.4),
    },
  },
  font: {
    //   fontFamily: "Inter", // Use your desired font,
    fontSize: 30,
  },
};

const darktheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: BLACK_SURFACE, // Change as needed
    primary: PRIMARY,
    primaryScheme: ColorUtils.generateShades(PRIMARY, BLACK, 10),
    primary_text: {
      main: ColorUtils.hexToRgba(PRIMARY, 0.87),
      medium: ColorUtils.hexToRgba(PRIMARY, 0.6),
      light: ColorUtils.hexToRgba(PRIMARY, 0.4),
    }, // Initial text variant
    text: {
      main: ColorUtils.hexToRgba(WHITE, 0.87),
      medium: ColorUtils.hexToRgba(WHITE, 0.6),
      light: ColorUtils.hexToRgba(WHITE, 0.4),
    },
  },
  fontFamily: "Inter", // Use your desired font,
  font: {
    fontSize: 30,
  },
};

const theme = DEFAULT_UI_SCHEME === "dark" ? darktheme : lightTheme;

// Define a type for your custom theme
export type CustomTheme = typeof theme;

export default theme;
