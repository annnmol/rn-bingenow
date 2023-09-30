import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useTheme } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../../appComponents/buttons";
import {
  AppForm,
  AppFormPasswordField,
  AppFormSubmitButton,
  AppFormTextField,
  AppText,
} from "../../appComponents/forms";
import { AppExpoIcons } from "../../appComponents/icons";
import { ROUTES_NAMES } from "../../navigation/Routes";
import {
  getRefinedFirebaseAuthErrorMessage,
  useFirebaseAuthService,
} from "../../services/firebase";
import { useAppDispatch } from "../../store";
import { constants } from "../../themes";
import { LoginSchema } from "./contants";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const EmailScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getDynamicStyles();
  const dispatch = useAppDispatch();

  React.useEffect(() => {}, []);

  const handleBackClick = () => {
    navigation.navigate(ROUTES_NAMES.WELCOME);
  };

  const { logInUser } = useFirebaseAuthService();

  const [userInput, setUserInput] = React.useState({
    email: "",
    password: "",
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    delayError: 300,
    mode: "onChange",
    defaultValues: userInput,
    values: userInput,
  });

  let {
    control,
    setError,
    handleSubmit,
    formState: {
      errors,
    },
  } = methods;

  const handleSubmitFn = (data: any) => {
    console.info({ data, errors });

    logInUser(data.email, data.password)
      .then((res: any) => {
        ToastAndroid.show("User Logged In", ToastAndroid.SHORT);
      })
      .catch((err: any) => {
        const message = getRefinedFirebaseAuthErrorMessage(err?.message);
        if (message?.includes("email") || message?.includes("Email")) {
          setError("email", { message: message });
        }
        ToastAndroid.show(message, ToastAndroid.SHORT);
      })
      .finally(() => {
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppForm methods={methods}>
        <AppFormTextField
          name="email"
          control={control}
          label="Email"
          keyboardType={"email-address"}
          caretHidden={false}
          textContentType="emailAddress"
          autoComplete={"email"}
          icon="alternate-email"
        />
        <AppFormPasswordField
          name="password"
          control={control}
          label="Password"
          placeholder={"******"}
          icon="lock"
        />

        <AppFormSubmitButton
          handleSubmit={handleSubmit(handleSubmitFn)}
          // onPress={handleSubmit(onSubmit)}
          style={{ marginVertical: 10 }}
        >
          Login
        </AppFormSubmitButton>
      </AppForm>
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
      <AppText variant="body2" style={{ textAlign: "center" }}>
        I would like to receive updates, special offers, and other information
        from bingeNow and The Walt Disney Family of Companies.
      </AppText>
      <View style={styles.infoBox}>
        <AppText variant="body3">
          BingeNow will use your data to personalize and enhance your bingeNow
          experience. We may also send you information about bingeNow. You have
          the option to change your communication preferences at any time. Your
          data may be used in accordance with our Privacy Policy, which includes
          sharing it with The Now Family of Companies. By clicking 'Agree and
          Continue,' you are indicating your consent to our Subscriber
          Agreement. You acknowledge that you have read our Privacy Policy and
          the Supplemental Privacy Policy for Singapore.
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
      // justifyContent: "center",
      // alignItems: "center",
      backgroundColor: theme.colors.background,
      paddingHorizontal: constants.spacingLX,
      // backgroundColor:theme.colors.default.surfaceContainer
      //
    },

    infoBox: {
      gap: constants.spacingM,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      backgroundColor: theme.colors.default.surfaceHigh,
      // backgroundColor: theme.colors.primaryLightScheme?.[8],
      // elevation: 2,
      width: constants.windowWidth - constants.spacingLXX,
      // height: constants.windowHeight / 3,
      paddingHorizontal: constants.spacingM,
      paddingVertical: constants.spacingM,
      marginHorizontal: constants.spacingLX,
      ...theme.shadow,
      // marginBottom: constants.spacingLXX,
    },
  });
};
