import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { constants } from "../../themes";

export const getStyledForms = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    StyledForm: {
      // alignItems: "center",
      // justifyContent: "center",
      // overflow: "hidden",
      gap: 12,
    },

    errorText: {
      color: theme.colors.error.main,
      fontSize: 14,
      marginLeft: 2,
    },

    labelText: {
      color: theme.colors.text.light,
      marginBottom: constants.spacingSX,
    },

    formControl: {
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      gap: 4,
      position: "relative",
    },

    inputFieldContainer: {
      position: "relative", // Make the container relative for positioning the icon
      flexDirection: "row", // Align icon and input horizontally
      alignItems: "center", // Vertically align icon and input
    },

    inputField: {
      // flex: 1,
      width: "100%",
      height: 56,

      backgroundColor: theme.colors.default.surface,
      borderRadius: 4,
      paddingRight: 10,
      paddingLeft: 48,
      fontSize: 16,
      paddingVertical: 0,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      color: theme.colors.text.main,
    },
    inputFieldFocused: {
      borderLeftWidth: 2,
      color: theme.colors.text.light,
    },
    inputFieldError: {
      borderLeftWidth: 2,
      color: theme.colors.error.main,
    },
    inputFieldSuccess: {
      borderLeftWidth: 2,
      borderColor: theme.colors.success.main,
    },

    endIcon: {
      position: "absolute",
      right: 8,
      top: "50%", // Center vertically
      transform: [{ translateY: -12 }], // Adjust 
      zIndex: 1,
      borderRightWidth: 1,
      borderRightColor: theme.colors.text.light,
      width: 32,
      color: theme.colors.text.light,
    },
    endIconColor: {
      color: theme.colors.text.light,
    },
    inputFieldPlaceholder: {
      color: theme.colors.text.light,
    },

    leftIcon: {
      position: "absolute",
      left: 8,
      width: 32,
      top: "50%", // Center vertically
      transform: [{ translateY: -10 }], // Adjust this value as needed
      zIndex: 1,
      borderRightWidth: 1,
      borderRightColor: theme.colors.text.light,
      color: theme.colors.text.light,
    },

    leftIconError: {
      color: theme.colors.error.main,
    },
    leftIconSuccess: {
      color: theme.colors.success.main,
    },

    submitBtn: {
      backgroundColor: theme.colors.primary.main,
      width: "100%",
      height: 48,
      borderRadius: 8,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    disabledSubmitBtn: {
      backgroundColor: theme.colors.text.light,
      width: "100%",
      height: 48,
      borderRadius: 8,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    submitBtnDisabled: {
      backgroundColor: theme.colors.text.light,
    },

    submitBtnText: {
      ...theme.typography.button1,
      color: "rgba(255,255,255,0.9)",
    },

    switchField: {
      width: "15%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    styledIconButton: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      overflow: "hidden",
    },
  });
};
