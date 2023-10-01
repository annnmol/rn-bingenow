import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "./AppText";


interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
}) => {
  const styles = getDynamicStyles();

  // Logic to check password strength (you can customize this as needed)
  const getPasswordStrength = () => {
    if (/[0-9]/.test(password) && /[a-zA-Z]/.test(password)) {
      return "Strong";
    } else if (/[0-9]/.test(password) || /[a-zA-Z]/.test(password)) {
      return "Medium";
    } else {
      return "Weak";
    }
  };

  // Determine the strength and set styles accordingly
  const strength = getPasswordStrength();
  const indicatorStyles = {
    weak: styles.weak,
    medium: styles.medium,
    strong: styles.strong,
  }[strength.toLowerCase()];

  // if (!password) return null;

  return (
    <View style={styles.container}>
      <AppText variant="body3">
        Use a mimimum of 6 characters (case senstive) with at least one number.
      </AppText>
      {/* <Text style={styles.label}>Password Strength:</Text> */}
      {/* <View style={[styles.strengthIndicator, indicatorStyles]}>
        <Text style={[styles.strengthText, indicatorStyles]}>{strength}</Text>
      </View> */}
    </View>
  );
};

export default PasswordStrengthIndicator;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-end",
      marginTop: -8,
    },
    label: {
      marginRight: 10,
      fontWeight: "bold",
      color: theme.colors.text.light,
    },
    strengthIndicator: {
      width: 80,
      height: 14,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    strengthText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 10,
    },
    weak: {
      backgroundColor: theme.colors.error.main,
    },
    medium: {
      backgroundColor: "orange",
    },
    strong: {
      backgroundColor: theme.colors.success.main,
    },
  });
};
