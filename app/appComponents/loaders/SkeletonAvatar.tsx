import {
  Animated,
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { constants } from "../../themes";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const SkeletonAvatar: React.FC<Props> = ({ style }) => {
  const styles = getDynamicStyles();

  const [circleAnimatedValue] = React.useState(new Animated.Value(0));

  const circleAnimated = () => {
    circleAnimatedValue.setValue(0);
    Animated.timing(circleAnimatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false, // Add this line
    }).start(() => {
      setTimeout(() => {
        circleAnimated();
      }, 1000);
    });
  };

  React.useEffect(() => {
    circleAnimated();
  }, []);

  const translateX = circleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 100],
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.bar,
          {
            transform: [{ translateX: translateX }],
          },
        ]}
      ></Animated.View>
    </View>
  );
};

export default SkeletonAvatar;

const getDynamicStyles = () => {
  const theme: any = useTheme();
  return StyleSheet.create({
    container: {
      width: 100,
      height: 100,
      backgroundColor: theme.colors.background,
      overflow: "hidden",
      borderRadius: 60,
      ...theme.shadow,
    },

    bar: {
      width: 10,
      height: "100%",
      backgroundColor:theme.colors.default.surfaceHigh,
      opacity: 0.5,
    },
  });
};
