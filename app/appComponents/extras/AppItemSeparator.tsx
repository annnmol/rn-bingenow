import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface Props extends React.ComponentProps<typeof View> {
  style?: StyleProp<ViewStyle>;
}

const AppItemSeparator: React.FC<Props> = ({ style, ...otherProps }) => {
  const styles = getDynamicStyles();
  return <View style={[styles.separator, style]} {...otherProps} />;
};

const getDynamicStyles = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    separator: {
      width: "100%",
      height: 1, // Adjust the height as needed
      backgroundColor: theme.dark ? "rgba(0,0,0,0.5)" :  "rgba(0,0,0,0.1)", // Adjust the color as needed
      marginVertical: 1, // Adjust the margin as needed
    },
  });
};

export default AppItemSeparator;
