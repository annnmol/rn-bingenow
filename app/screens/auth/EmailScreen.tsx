import { NavigationProp, useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../../appComponents/buttons";
import { AppText } from "../../appComponents/forms";
import { constants } from "../../themes";
import { AppExpoIcons } from "../../appComponents/icons";
import { ROUTES_NAMES } from "../../navigation/Routes";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const EmailScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getDynamicStyles();
  const theme: any = useTheme();

  React.useEffect(() => {}, []);

  const handleBackClick = () => {
    navigation.navigate(ROUTES_NAMES.WELCOME);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => handleBackClick()}>
        <AppExpoIcons name="close" size={32} />
      </TouchableOpacity>
      <AppText variant="H1">BingeNow</AppText>
      <AppText
        variant="H5"
        style={{
          textAlign: "center",
          marginBottom: constants.spacingLX,
          marginTop: -constants.spacingSX,
        }}
      >
        Endless entertainment, all in one place.
      </AppText>
      <AppText variant="body3" style={{ textAlign: "center" }}>
        I would like to receive updates, special offers, and other information
        from bingeNow and The Walt Disney Family of Companies.
      </AppText>
      <View style={styles.infoBox}>
        <AppText variant="body3">
          BingeNow will use your data to personalize and enhance your bingeNow
          experience. We may also send you information about bingeNow. You have
          the option to change your communication preferences at any time. Your
          data may be used in accordance with our Privacy Policy, which includes
          sharing it with The Now Family of Companies. By clicking
          'Agree and Continue,' you are indicating your consent to our
          Subscriber Agreement. You acknowledge that you have read our Privacy
          Policy and the Supplemental Privacy Policy for Singapore.
        </AppText>
        <AppButton onPress={() => {}} textVariant="button1">
          Agree & Continue
        </AppButton>
        {/* <AppText variant="body2" style={{ textAlign: "center" }}>
          By creating an account you get access to an unlimited number of
          exercises
        </AppText> */}
      </View>
    </SafeAreaView>
  );
};

export default EmailScreen;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor:'red'
      //
    },

    infoBox: {
      gap: constants.spacingM,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      backgroundColor:theme.colors.card,
      // backgroundColor: theme.colors.primaryLightScheme?.[8],
      elevation: 2,
      width: constants.windowWidth - constants.spacingLXX,
      // height: constants.windowHeight / 3,
      paddingHorizontal: constants.spacingM,
      paddingVertical: constants.spacingM,
      marginHorizontal: constants.spacingLX,
      // marginBottom: constants.spacingLXX,
    },
  });
};
