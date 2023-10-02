import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useTheme } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../../appComponents/buttons";
import { AppDivider } from "../../appComponents/extras";
import {
  AppForm,
  AppFormPasswordField,
  AppFormSubmitButton,
  AppFormTextField,
  AppText,
} from "../../appComponents/forms";
import { ROUTES_NAMES } from "../../navigation/Routes";
import {
  getRefinedFirebaseAuthErrorMessage,
  useFirebaseAuthService,
} from "../../services/firebase";
import { constants } from "../../themes";
import { LoginSchema } from "./contants";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getDynamicStyles();
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
    getValues,
    formState: { errors },
  } = methods;

  const handleSubmitFn = (data: any) => {
    console.info({ data, errors });

    return new Promise((resolve) => {
      logInUser(data.email, data.password)
        .then((res) => {
          // console.log("res", res.user.displayName);
          if (!res.user.displayName) {
            navigation.navigate(ROUTES_NAMES.UPDATE_NAME);
          }
          ToastAndroid.show("User Logged In", ToastAndroid.SHORT);
        })
        .catch((err: any) => {
          const message = getRefinedFirebaseAuthErrorMessage(err?.message);
          if (
            message?.includes("no user record") ||
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

  return (
    <SafeAreaView style={styles.container}>
      <AppText variant="body1" style={styles.titleText}>
        Back Again! Login{" "}
      </AppText>
      <AppForm methods={methods}>
        <AppFormTextField
          name="email"
          label="Email"
          control={control}
          keyboardType={"email-address"}
          caretHidden={false}
          textContentType="emailAddress"
          autoComplete={"email"}
          icon="alternate-email"
          placeholder={"Enter your email"}
          autoFocus
        />
        <AppFormPasswordField
          label="Password"
          name="password"
          control={control}
          placeholder={"******"}
          icon="lock"
        />

        <AppFormSubmitButton
          handleSubmit={handleSubmit(handleSubmitFn)}
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
        onPress={() => handleSignUpBtnClick()}
        textVariant="button2"
        variant="outline"
      >
        Create Account
      </AppButton>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    titleText: {
      textTransform: "uppercase",
      marginBottom: constants.spacingS,
    },
  });
};
