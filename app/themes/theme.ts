import { DarkTheme, DefaultTheme, useTheme } from "@react-navigation/native";
import {
  Appearance,
  ColorSchemeName,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import ColorUtils from "./colorUtils";
import constants from "./constants";
import typography from "./typography";

// Appearance.getColorScheme() === "light"
//   ? StatusBar.setBarStyle("dark-content")
//   : StatusBar.setBarStyle("light-content");

// Define your primary color
export let DEFAULT_UI_SCHEME = Appearance.getColorScheme() ?? "dark";
// const PRIMARY = "#FF321E";
const PRIMARY = "#113ccf";
// const PRIMARY = "#01147C";
const WHITE = "#ffffff";
// const WHITE_SURFACE = "#FEF7FF";
const WHITE_SURFACE = "#f0f0f5";
const BLACK = "#000000";
// const BLACK_SURFACE = "#121212";
const BLACK_SURFACE = "#1b1e24";
const ERROR = "#ba1a1a";
const SUCCESS = "#1ba672";

const defaultFont = {
  // fontFamily: "Inter", // Use your desired font,
  fontSize: 14,
};

// // Define your custom theme
// const lightTheme = {
//   ...DefaultTheme,
//   dark: false,
//   colors: {
//     ...DefaultTheme.colors,
//     background: WHITE_SURFACE, // Change as needed
//     primary: PRIMARY,
//     primaryLightScheme: ColorUtils.generateShades(PRIMARY, WHITE, 10),
//     primaryDarkScheme: ColorUtils.generateShades(PRIMARY, BLACK_SURFACE, 10),
//     primaryText: {
//       main: ColorUtils.hexToRgba(PRIMARY, 0.87),
//       medium: ColorUtils.hexToRgba(PRIMARY, 0.7),
//       light: ColorUtils.hexToRgba(PRIMARY, 0.4),
//     }, // Initial text variant
//     text: {
//       main: ColorUtils.hexToRgba(BLACK, 0.87),
//       medium: ColorUtils.hexToRgba(BLACK, 0.65),
//       light: ColorUtils.hexToRgba(BLACK, 0.4),
//     },
//   },
//   font: defaultFont,
// };

// const darktheme = {
//   ...DarkTheme,
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     background: BLACK_SURFACE, // Change as needed
//     primary: PRIMARY,
//     primaryLightScheme: ColorUtils.generateShades(PRIMARY, WHITE, 10),
//     primaryDarkScheme: ColorUtils.generateShades(PRIMARY, BLACK, 10),
//     primaryText: {
//       main: ColorUtils.hexToRgba(PRIMARY, 0.87),
//       medium: ColorUtils.hexToRgba(PRIMARY, 0.7),
//       light: ColorUtils.hexToRgba(PRIMARY, 0.4),
//     }, // Initial text variant
//     text: {
//       main: ColorUtils.hexToRgba(WHITE, 0.87),
//       medium: ColorUtils.hexToRgba(WHITE, 0.65),
//       light: ColorUtils.hexToRgba(WHITE, 0.4),
//     },
//   },
//   font: defaultFont,
// };

export const getCurrentTheme = (
  scheme: ColorSchemeName = DEFAULT_UI_SCHEME
) => {
  if (scheme === "light") {
    return lightTheme;
  } else {
    return darkTheme;
  }
};

const theme = getCurrentTheme();

// Define a type for your custom theme
export type CustomTheme = typeof theme;

export default theme;

const lightTheme = {
  dark: false,
  colors: {
    background: WHITE_SURFACE,
    text: {
      dark: ColorUtils.getColor(BLACK, 0.9),
      main: ColorUtils.getColor(BLACK, 0.85),
      medium: ColorUtils.getColor(BLACK, 0.7),
      light: ColorUtils.getColor(BLACK, 0.55),
    },
    default: {
      surface: ColorUtils.getColor(WHITE, 0.6),
      surfaceHigh: ColorUtils.getColor(WHITE, 0.9),

      //  //containers
      //  surfaceContainer: ColorUtils.getColor(WHITE, 0.94),
      //  surfaceContainerLowest: ColorUtils.getColor(WHITE, 1),
      //  surfaceContainerLow: ColorUtils.getColor(WHITE, 0.96),
      //  surfaceContainerHigh: ColorUtils.getColor(WHITE, 0.92),
      //  surfaceContainerHighest: ColorUtils.getColor(WHITE, 0.9),
    },
    primary: {
      main: PRIMARY,
      onPrimary: WHITE,
      primaryContainer: ColorUtils.getColor(PRIMARY, 0.1),
      OnPrimaryContainer: ColorUtils.getColor(PRIMARY, 0.9),
    },
    error: {
      main: ERROR,
      onError: WHITE,
      errorContainer: ColorUtils.getColor(ERROR, 0.1),
      OnErrorContainer: ColorUtils.getColor(ERROR, 0.9),
    },
    success: {
      main: SUCCESS,
      onSuccess: WHITE,
      successContainer: ColorUtils.getColor(SUCCESS, 0.1),
      OnSuccessContainer: ColorUtils.getColor(SUCCESS, 0.9),
    },
  },

  shadow: {
    shadowColor: ColorUtils.getColor(BLACK_SURFACE, 0.15),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  border: {
    borderColor: ColorUtils.getColor(BLACK_SURFACE, 0.05),
    borderWidth: 1,
  },

  constants: constants,
  typography: typography,
};
const darkTheme = {
  dark: true,
  colors: {
    background: BLACK_SURFACE,
    text: {
      dark: ColorUtils.getColor(WHITE, 0.9),
      main: ColorUtils.getColor(WHITE, 0.85),
      medium: ColorUtils.getColor(WHITE, 0.7),
      light: ColorUtils.getColor(WHITE, 0.55),
    },
    default: {
      surface: ColorUtils.getColor(BLACK, 0.12),
      surfaceHigh: ColorUtils.getColor(BLACK, 0.24),
      // //containers
      // surfaceContainer: ColorUtils.getColor(BLACK, 0.88),
      // surfaceContainerLowest: ColorUtils.getColor(BLACK, 1),
      // surfaceContainerLow: ColorUtils.getColor(BLACK, 0.96),
      // surfaceContainerHigh: ColorUtils.getColor(BLACK, 0.92),
      // surfaceContainerHighest: ColorUtils.getColor(BLACK, 0.9),
    },
    primary: {
      main: ColorUtils.getColor(PRIMARY, 0.6),
      onPrimary: ColorUtils.getColor(PRIMARY, 0.8),
      primaryContainer: ColorUtils.getColor(PRIMARY, 0.7),
      OnPrimaryContainer: ColorUtils.getColor(PRIMARY, 0.1),
    },
    error: {
      main: ColorUtils.getColor(ERROR, 0.2),
      onError: ColorUtils.getColor(ERROR, 0.8),
      errorContainer: ColorUtils.getColor(ERROR, 0.7),
      OnErrorContainer: ColorUtils.getColor(ERROR, 0.1),
    },
    success: {
      main: ColorUtils.getColor(SUCCESS, 0.2),
      onSuccess: ColorUtils.getColor(SUCCESS, 0.8),
      successContainer: ColorUtils.getColor(SUCCESS, 0.7),
      OnSuccessContainer: ColorUtils.getColor(SUCCESS, 0.1),
    },
  },

  shadow: {
    shadowColor: ColorUtils.getColor(BLACK_SURFACE, 0.15),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  border: {
    borderColor: ColorUtils.getColor(WHITE_SURFACE, 0.05),
    borderWidth: 1,
  },

  constants: constants,
  typography: typography,
};
