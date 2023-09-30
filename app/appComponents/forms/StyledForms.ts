import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const getStyledForms = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    StyledForm: {
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      gap: 12,
    },
  
    errorText: {
      color: theme.colors.error.main,
      fontSize: 14,
      marginLeft: 2,
    },
  
    labelText: {
      color: theme.colors.text.medium,
      fontSize: 14,
      fontWeight: "500",
      letterSpacing: 0.5,
    },
  
    formControl: {
      flexDirection: "column",
      width: "100%",
      gap: 4,
      position: "relative",
    },
  
    inputField: {
      width: "100%",
      height: 44,
      backgroundColor: theme.colors.default.surface,
      borderRadius: 4,
      paddingRight: 10,
      paddingLeft: 48,
      fontSize: 15,
      paddingVertical:0,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
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
      top: 33,
      right: 8,
      zIndex: 1,
      borderRightWidth: 1,
      borderRightColor: theme.colors.text.light,
      width: 32,
      color: theme.colors.text.medium,
    },
  
    leftIcon: {
      position: "absolute",
      top: 33,
      left: 8,
      zIndex: 1,
      borderRightWidth: 1,
      borderRightColor: theme.colors.text.light,
      width: 32,
      color: theme.colors.text.medium,
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
      color: 'rgba(255,255,255,0.9)',
    },
  
    switchField: {
      width: "15%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    styledIconButton:{
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      overflow: "hidden",
    }
  });
};

