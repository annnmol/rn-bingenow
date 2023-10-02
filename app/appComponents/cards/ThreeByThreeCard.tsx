import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { constants } from "../../themes";
import { AppExpoIcons } from "../icons";
import { AppFastImage } from "../images";

interface Props {
  image: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  isPremium?: boolean;
}

const ThreeByThreeCard: React.FC<Props> = ({
  style,
  onPress,
  image,
  isPremium = false,
}) => {
  const styles = getDynamicStyles();

  const scale = useSharedValue(1);
  const b = useSharedValue(16);
  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scale.value) }],
    };
  });

  const onLongPress = () => {
    scale.value = 0.95;
  };
  const onPressOut = () => {
    scale.value = 1;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      onLongPress={() => onLongPress()}
      onPressOut={() => onPressOut()}
      style={[styles.container, style]}
    >
      <AppExpoIcons
        name="crown-circle-outline"
        color={"yellow"}
        size={20}
        style={[styles.premiumIcon, !isPremium && { display: "none" }]}
      />
      <Animated.View style={[styles.viewContainer, cardAnimatedStyle]}>
        <AppFastImage source={{ uri: image }} style={styles.image} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default React.memo(ThreeByThreeCard);

const getDynamicStyles = () => {
  const theme: any = useTheme();
  return StyleSheet.create({
    container: {
      width: constants.windowWidth / 3.6,
      height: constants.windowHeight / 6,
      borderRadius: constants.spacingS,
      backgroundColor: theme.colors.default.surface,
      alignItems: "center",
      justifyContent: "flex-start",
      overflow: "hidden",
      position: "relative",
      ...theme.shadow,
    },
    viewContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    image: {
      width: "100%",
      height: "100%",
      resizeMode: "stretch",
      borderRadius: constants.spacingS,
    },
    premiumIcon: {
      zIndex: 1,
      width: 36,
      height: 36,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "absolute",
      left: 6,
      top: 6,
      color: "#ffffff",
    },
  });
};
