import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface Props extends React.ComponentProps<typeof Text> {
  style?: StyleProp<TextStyle>;
  variant?:
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "H5"
    | "button1"
    | "button2"
    | "button3"
    | "body1"
    | "body2"
    | "body3";
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppText: React.FC<Props> = ({
  style,
  variant = "body1",
  children,
  ...otherProps
}) => {
  const styles = getDynamicStyles();

  if (variant === "H1") {
    return (
      <Text style={[styles.H1, style]} {...otherProps}>
        {children}
      </Text>
    );
  }

  if (variant === "H2") {
    return (
      <Text style={[styles.H2, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
  if (variant === "H3") {
    return (
      <Text style={[styles.H3, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
  if (variant === "H4") {
    return (
      <Text style={[styles.H4, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
  if (variant === "H5") {
    return (
      <Text style={[styles.H5, style]} {...otherProps}>
        {children}
      </Text>
    );
  }

  if (variant === "button1") {
    return (
      <Text style={[styles.button1, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
  if (variant === "button2") {
    return (
      <Text style={[styles.button2, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
  if (variant === "button3") {
    return (
      <Text style={[styles.button3, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
  if (variant === "body2") {
    return (
      <Text style={[styles.body2, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
  if (variant === "body3") {
    return (
      <Text style={[styles.body3, style]} {...otherProps}>
        {children}
      </Text>
    );
  }

  return (
    <Text style={[styles.body1, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    //heading
    H1: {
      ...theme.typography.H1,
      color:theme.colors.text.dark
    },
    H2: {
      ...theme.typography.H2,
      color:theme.colors.text.medium
    },
    H3: {
      ...theme.typography.H3,
      color:theme.colors.text.light
    },
    H4: {
      ...theme.typography.H4,
      color:theme.colors.text.main
    },
    H5: {
      ...theme.typography.H5,
      color:theme.colors.text.medium
    },

    //buttons
    button1: {
      ...theme.typography.button1,
      color:theme.colors.text.main
    },
    button2: {
      ...theme.typography.button2,
      color:theme.colors.text.main
    },
    button3: {
      ...theme.typography.button3,
      color:theme.colors.text.main
    },

    //body
    body1: {
      ...theme.typography.body1,
      color:theme.colors.text.medium
    },
    body2: {
      ...theme.typography.body2,
      color:theme.colors.text.medium
    },
    body3: {
      ...theme.typography.body3,
      color:theme.colors.text.light
    },
  });
};
