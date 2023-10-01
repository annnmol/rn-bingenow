import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useTheme } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../../appComponents/buttons";
import { AppFlatList, AppItemSeparator } from "../../appComponents/extras";
import {
  AppForm,
  AppFormSubmitButton,
  AppFormTextField,
  AppText,
} from "../../appComponents/forms";
import { AppAvatar } from "../../appComponents/images";
import { ROUTES_NAMES } from "../../navigation/Routes";
import { getRefinedFirebaseAuthErrorMessage, useFirebaseAuthService } from "../../services/firebase";
import { useAppDispatch, useAppSelector } from "../../store";
import { useDefaultUserAvatarStore } from "../../store/slices/DefaultUserAvatarSlice";
import { constants } from "../../themes";
import { UPDATE_NAME_SCHEMA } from "./contants";
import App from "../../../App";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const UpdateNameScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getDynamicStyles();
  const dispatch = useAppDispatch();
  const { updateUserProfile } = useFirebaseAuthService();
  const { defaultUserAvatars } = useAppSelector(useDefaultUserAvatarStore);

  const [userInput, setUserInput] = React.useState({
    displayName: "",
  });
  const [selectedAvatarIndex, setSelectedAvatarIndex] =
    React.useState<number>(0);


  const methods = useForm({
    resolver: yupResolver(UPDATE_NAME_SCHEMA),
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
    setValue,
    formState: { errors },
  } = methods;

  const handleSubmitFn = (data:any) => {
    console.info({ data, errors }); 
    let update = {
      displayName:data?.displayName,
      photoURL: defaultUserAvatars?.[selectedAvatarIndex]?.url ?? defaultUserAvatars?.[0]?.url,
    }
    return new Promise((resolve) => {
      updateUserProfile(update)
        .then((res: any) => {
          ToastAndroid.show("Profile Updated", ToastAndroid.SHORT);
        })
        .catch((err: any) => {
          const message = getRefinedFirebaseAuthErrorMessage(err?.message);
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

  const handleSkipBtnClick = () => {
    ToastAndroid.show("skip pressed", ToastAndroid.SHORT);
  };

  const renderItem = ({ item, index }: any) => {
    const isActive = selectedAvatarIndex === index;

    const handleAvatarClick = (item: any, index: number) => {
      setSelectedAvatarIndex(index);
    };

    return (
      <TouchableOpacity
        onPress={() => handleAvatarClick(item, index)}
        style={{ marginBottom: 10 }}
      >
        <AppAvatar
          source={{ uri: item?.url }}
          style={{
            width: 80,
            height: 80,
            borderWidth: isActive ? 2 : 0,
            borderColor: "yellow",
            borderRadius: 40,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppText variant="body1" style={{ textTransform: "uppercase" }}>
        Add Profile
      </AppText>
      <AppForm methods={methods}>
        <AppText variant="H5">Enter your profile name </AppText>

        <AppFormTextField
          name="displayName"
          control={control}
          keyboardType={"default"}
          caretHidden={false}
          icon="account-cowboy-hat"
          autoFocus
        />
        <AppText variant="H5">Select a avatar </AppText>

        <View
          style={{
            // flexDirection: "row",
            justifyContent: "flex-start",
            height: 290,
            // backgroundColor: "red",
          }}
        >
          <AppFlatList
            data={defaultUserAvatars?.slice(0, 9)}
            renderItem={renderItem}
            estimatedItemSize={10}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            contentContainerStyle={styles.flatlist}
            scrollEnabled = {false}
            ItemSeparatorComponent={() => (
              <AppItemSeparator
                style={{ marginVertical: constants.spacingSX, height: 0 }}
              />
            )}
          />
        </View>

        <AppFormSubmitButton
          handleSubmit={handleSubmit(handleSubmitFn)}
          style={{ marginVertical: constants.spacingL }}
        >
          Finish Setup
        </AppFormSubmitButton>
      </AppForm>
      <AppItemSeparator
        style={{
          marginTop: -constants.spacingSX,
          marginBottom: constants.spacingS,
        }}
      />
      <AppButton
        onPress={() => handleSkipBtnClick()}
        textVariant="button2"
        variant="outline"
        style={{ backgroundColor: "grey" }}
        textStyle={{ color: "white" }}
      >
        Not Now
      </AppButton>
    </SafeAreaView>
  );
};

export default UpdateNameScreen;

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
      textDecorationLine: "underline",
    },
    flatlist: {
      padding: constants.spacingM,
    },
  });
};
