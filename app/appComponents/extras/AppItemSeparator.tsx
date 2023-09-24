import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";


const AppItemSeparator = () => {
  const styles = getDynamicStyles();
  return <View style={styles.separator} />;
};

const getDynamicStyles = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    separator: {
      height: 1, // Adjust the height as needed
      backgroundColor: theme.colors.text.light, // Adjust the color as needed
      marginVertical: 1, // Adjust the margin as needed
    },
  });
};

export default AppItemSeparator;
