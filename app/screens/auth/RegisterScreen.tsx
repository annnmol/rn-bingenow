import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useTheme } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Linking, StyleSheet, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AppForm,
  AppFormCheckboxField,
  AppFormPasswordField,
  AppFormSubmitButton,
  AppFormTextField,
  AppText,
  PasswordStrengthIndicator,
} from "../../appComponents/forms";
import { ROUTES_NAMES } from "../../navigation/Routes";
import {
  getRefinedFirebaseAuthErrorMessage,
  useFirebaseAuthService,
} from "../../services/firebase";
import { constants } from "../../themes";
import { LoginSchema } from "./contants";
import { AppDivider } from "../../appComponents/extras";
import { AppButton } from "../../appComponents/buttons";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getDynamicStyles();
  const { registerUser } = useFirebaseAuthService();

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
    getValues,
    formState: { errors },
  } = methods;

  const handleSubmitFn = (data: any) => {
    console.info({ data, errors });
    return new Promise((resolve) => {
      registerUser(data.email, data.password)
        .then((res) => {
          // console.log({ res });
          if(!res.user.displayName){
            navigation.navigate(ROUTES_NAMES.UPDATE_NAME);
          }
          ToastAndroid.show("New account created", ToastAndroid.SHORT);
        })
        .catch((err: any) => {
          const message = getRefinedFirebaseAuthErrorMessage(err?.message);
          if (
            // message?.includes("no user record") ||
            message?.includes("email")
          ) {
            setError("email", { message: message }, { shouldFocus: true });
          }
          if (message?.includes("password")) {
            setError("password", { message: message }, { shouldFocus: true });
          }
          console.log({ err, message });
          ToastAndroid.show(message, ToastAndroid.SHORT);
        })
        .finally(() => {
          resolve(true);
        });
    });
  };

  const handleSignUpBtnClick = () => {
    navigation.navigate(ROUTES_NAMES.SIGNUP);
  };

  const handleLoginBtnClick = () => {
    navigation.navigate(ROUTES_NAMES.LOGIN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppText variant="body1" style={styles.titleText}>
        CREATE A NEW ACCOUNT
      </AppText>

      <AppForm methods={methods}>

        <AppFormTextField
          name="email"
          control={control}
          label="Email"
          placeholder={"Enter your email"}
          keyboardType={"email-address"}
          caretHidden={false}
          textContentType="emailAddress"
          autoComplete={"email"}
          icon="alternate-email"
          autoFocus
        />
        <AppFormPasswordField
          name="password"
          control={control}
          label="Password"
          placeholder={"******"}
          icon="lock"
        />

        {/* <View style={styles.infoBox}>
          <AppText variant="body3">
            Welcome to BingeNow! 🍿 Get ready for movie magic. As a dedicated student developer, I'm
            here to share the world of movies with you. While our app may not
            stream actual movies (I'm still learning the magic behind that 🧙‍♂️).
            Feel like peeking behind the scenes? Check out my GitHub{" "}
            <AppText
              variant="body3"
              style={styles.hyperlinkStyle}
              onPress={() => {
                Linking.openURL("https://www.github.com/annnmol");
              }}
            >
              (github/@annnmol)
            </AppText>
            . 
          </AppText>
        </View> */}
        <AppFormSubmitButton
          handleSubmit={handleSubmit(handleSubmitFn)}
          // onPress={handleSubmit(onSubmit)}
          style={{ marginVertical: constants.spacingL }}
        >
          CONTINUE
        </AppFormSubmitButton>
      </AppForm>
      <AppDivider
        style={{
          marginTop: -constants.spacingSX,
          marginBottom: constants.spacingS,
        }}
      />
      <AppButton
        onPress={() => handleLoginBtnClick()}
        textVariant="button2"
        variant="outline"
      >
        Already a memeber? Login
      </AppButton>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      gap: constants.spacingS,
      justifyContent: "flex-start",
      backgroundColor: theme.colors.background,
      paddingHorizontal: constants.spacingL,
      paddingTop: -constants.spacingM,
    },
    hyperlinkStyle: {
      color: "#007AFF",
      // textDecorationLine: "underline",
    },
    infoBox: {
      gap: constants.spacingM,
      borderRadius: 10,
      backgroundColor: theme.colors.default.surfaceHigh,
      paddingHorizontal: constants.spacingM,
      paddingVertical: constants.spacingM,
      marginTop: constants.spacingS,
      ...theme.shadow,
    },

    titleText: {
      textTransform: "uppercase",
      marginBottom: constants.spacingS,
    },
  });
};
