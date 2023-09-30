import {
  NavigationProp,
  useTheme
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Animated as AnimatedNative,
  ImageBackground,
  StyleSheet,
  View
} from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming
} from "react-native-reanimated";
import { AppButton } from "../../appComponents/buttons";
import { AppText } from "../../appComponents/forms";
import { ROUTES_NAMES } from "../../navigation/Routes";
import { constants } from "../../themes";

const SPLASH_DELAY = 5000; // 5 seconds
const SPLASH_ANIMATION_DURATION = 2000; // 2 seconds
const SPLASH_ANIMATION_DELAY = 1000; // 1 second
const SPLASH_ANIMATION_EASING = Easing.linear;
const SPLASH_IMAGE = require("../../assets/images/backdrop.webp");
// const SPLASH_IMAGE = "https://picsum.photos/200/300";
// const SPLASH_IMAGE = "../../../assets/splash.png";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getDynamicStyles();
  const theme: any = useTheme();

  const fadeAnim = new AnimatedNative.Value(0);
  React.useEffect(() => {
    // AnimatedNative.timing(fadeAnim, {
    //   toValue: 1,
    //   duration: 2000, // Adjust the duration as needed (in milliseconds)
    //   useNativeDriver: true,
    // }).start();
    //   handleAnimation();
    //   StatusBar.setBarStyle("light-content");
    //   StatusBar.setBackgroundColor(theme.colors.primaryDarkScheme?.[7]);
    //   // After 5 seconds, navigate to your main app screen
    //   const timer = setTimeout(() => {
    //     console.log("time khatm", navigation);
    //     navigation.navigate(ROUTES_NAMES.TABS_NAVIGATOR);
    //     ToastAndroid.show("App Loaded", ToastAndroid.SHORT); // Replace 'MainApp' with your main screen name
    //   }, 5000); // 5000 milliseconds (5 seconds)
    //   return () => clearTimeout(timer);
  }, []);

  const h = useSharedValue(0);
  const w = useSharedValue(0);
  const br = useSharedValue(0);
  const o = useSharedValue(1);
  const r = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // width: w.value,
      // height: h.value,
      // borderRadius: br.value,
      // opacity: o.value,
      // transform: [
      //   // { translateY: 20 },
      //   // { translateX: 40 },
      //   { rotate: `${r.value}deg` },
      // ],
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

  const handleContinueClick = () => {
    navigation.navigate(ROUTES_NAMES.LOGIN);
  };
  return (
    <ImageBackground source={SPLASH_IMAGE} style={styles.image}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(0,0,0,0.2)",
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0.8)",
          "rgba(0,0,0,1)",
          "rgba(0,0,0,1)",
        ]}
        style={styles.backdrop}
      />

      <View style={styles.infoBox}>
        <AppText
          variant="H1"
          style={{
           color:"rgba(255,255,255,1)",
          }}
        >
          BingeNow
        </AppText>
        <AppText
          variant="body1"
          style={{
            textAlign: "center",
            marginBottom: constants.spacingLXX,
            marginTop: -constants.spacingSX,
           color:"rgba(255,255,255,0.8)",

          }}
        >
          Endless entertainment, all in one place.
        </AppText>
        <AppButton onPress={() => handleContinueClick()} textVariant="button1">
          Continue
        </AppButton>
        <AppText variant="body3" style={{ textAlign: "center", 
           color:"rgba(255,255,255,0.5)",
      
      }}>
          By creating an account you get access to an unlimited number of
          exercises
        </AppText>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    backdrop: {
      flex: 1,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    infoBox: {
      justifyContent: "center",
      alignItems: "center",
      gap: constants.spacingM,
      width: constants.windowWidth,
      height: constants.windowHeight / 3,
      paddingHorizontal: constants.spacingL,
      paddingVertical: constants.spacingL,
      marginBottom: constants.spacingLX,
    },
  });
};
