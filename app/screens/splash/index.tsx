import {
  NavigationProp,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated as AnimatedNative,
  ImageBackground,
  Image,
  StatusBar,
  ToastAndroid,
} from "react-native";
import { ROUTES_NAMES } from "../../navigation/Routes";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { AppFastImage } from "../../appComponents/images";
import { AppExpoIcons } from "../../appComponents/icons";

const SPLASH_DELAY = 5000; // 5 seconds
const SPLASH_ANIMATION_DURATION = 2000; // 2 seconds
const SPLASH_ANIMATION_DELAY = 1000; // 1 second
const SPLASH_ANIMATION_EASING = Easing.linear;
const SPLASH_IMAGE = require("../../../assets/splash.png");
// const SPLASH_IMAGE = "https://picsum.photos/200/300";
// const SPLASH_IMAGE = "../../../assets/splash.png";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getDynamicStyles();
  const theme: any = useTheme();

  const fadeAnim = new AnimatedNative.Value(0);
  React.useEffect(() => {
    // AnimatedNative.timing(fadeAnim, {
    //   toValue: 1,
    //   duration: 2000, // Adjust the duration as needed (in milliseconds)
    //   useNativeDriver: true,
    // }).start();

    handleAnimation();

    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor(theme.colors.primaryDarkScheme?.[7]);
    // After 5 seconds, navigate to your main app screen
    const timer = setTimeout(() => {
      console.log("time khatm", navigation);
      navigation.navigate(ROUTES_NAMES.TABS_NAVIGATOR);
      ToastAndroid.show("App Loaded", ToastAndroid.SHORT); // Replace 'MainApp' with your main screen name
    }, 5000); // 5000 milliseconds (5 seconds)

    return () => clearTimeout(timer);
  }, []);

  const h = useSharedValue(0);
  const w = useSharedValue(0);
  const br = useSharedValue(0);
  const o = useSharedValue(1);
  const r = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: w.value,
      height: h.value,
      borderRadius: br.value,
      opacity: o.value,
      transform: [
        // { translateY: 20 },
        // { translateX: 40 },
        { rotate: `${r.value}deg` },
      ],
    };
  });

  // const translateX = useSharedValue(-200); // Initial position off-screen to the left

  // const animatedTextStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateX: translateX.value }],
  //   };
  // });

  const handleAnimation = () => {
    // translateX.value = translateX.value = withTiming(5, {
    //   duration: 2000, // Adjust the duration as needed
    //   easing: Easing.linear,
    //   // delay: 2 * 100, // Delay each letter by 100 milliseconds
    // });
    // if (w.value === 100) {
      r.value = withDelay(
        4000,
        withTiming(360, {
          duration: 500,
          easing: Easing.linear,
        })
      );
      w.value = withDelay(
        4000,
        withTiming(1000, {
          duration: 500,
          easing: Easing.linear,
        })
      );
      h.value = withDelay(
        4000,
        withTiming(1000, {
          duration: 500,
          easing: Easing.linear,
        })
      );
      br.value = withDelay(
        4000,
        withTiming(1000, {
          duration: 500,
          easing: Easing.linear,
        })
      );
      o.value = withDelay(
        4000,
        withTiming(0, {
          duration: 500,
          easing: Easing.linear,
        })
      );
      // o.value = withDelay(0,5000);
    // } else {
    //   h.value = withSpring(100);
    //   br.value = withSpring(0);
    //   w.value = withSpring(100);
    //   // { rotate: `${rotationValue.value}deg` }
    // }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={SPLASH_IMAGE} style={styles.image}>
    
        <Animated.View style={[styles.logoBox, animatedStyle]} />

        {/* <AnimatedNative.View style={{ opacity: fadeAnim }}>
        </AnimatedNative.View> */}
          {/* <Text>Splash Screen</Text> */}
    
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  // console.log("getDynamicStyles", theme.colors.primaryDarkScheme?.[8]);

  return StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",
      // alignItems: "center",
      // justifyContent: "center",
      // backgroundColor: theme.colors.primaryDarkScheme?.[7], // Set your desired background color
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    text: {
      fontSize: 48,
      fontWeight: "bold",
      color: theme.colors.text.main,
    },
    logoBox: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
