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
      color: theme.colors.text.main,
      fontWeight: "600",
      fontSize: 32,
      letterSpacing: 1,
    },
    H2: {
      color: theme.colors.text.medium,
      fontWeight: "500",
      fontSize: 28,
      letterSpacing: 1,
    },
    H3: {
      color: theme.colors.text.light,
      fontWeight: "600",
      fontSize: 24,
      letterSpacing: 1,
    },
    H4: {
      color: theme.colors.text.main,
      fontWeight: "600",
      fontSize: 20,
      letterSpacing: 1,
    },
    H5: {
      color: theme.colors.text.main,
      fontWeight: "600",
      fontSize: 18,
      letterSpacing: 1,
    },

    //buttons
    button1: {
      color: theme.colors.text.main,
      fontWeight: "600",
      fontSize: 18,
      textTransform: "uppercase",
      letterSpacing: 1.5,
    },
    button2: {
      color: theme.colors.text.main,
      fontWeight: "600",
      fontSize: 18,
      letterSpacing: 1.5,
    },
    button3: {
      color: theme.colors.text.main,
      fontWeight: "600",
      fontSize: 16,
      letterSpacing: 1.5,
    },

    //body
    body1: {
      // ...theme.font,
      color: theme.colors.text.medium,
      fontSize: 16,
      lineHeight:20,
      letterSpacing: 0.5,
    },
    body2: {
      // ...theme.font,
      color: theme.colors.text.medium,
      fontSize: 14,
      lineHeight:16,
      letterSpacing: 0.5,
    },
    body3: {
      // ...theme.font,
      color: theme.colors.text.light,
      fontSize: 14,
      letterSpacing: 0.5,
    },
  });
};
