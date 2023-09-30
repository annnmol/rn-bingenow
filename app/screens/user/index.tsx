import { NavigationProp, useTheme } from "@react-navigation/native";
import { ReactNode } from "react";
import { Text, View, StyleSheet, ToastAndroid } from "react-native";
import {
  useFirebaseAuthService,
  useFirebaseDBService,
} from "../../services/firebase";
import { useAppSelector } from "../../store";
import { authUserStore } from "../../store/slices/AuthUserSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppText } from "../../appComponents/forms";
import { AppExpoIcons, AppIconButton } from "../../appComponents/icons";
import { ROUTES_NAMES } from "../../navigation/Routes";

interface Props {
  navigation: NavigationProp<any>; // Define the type for navigation
}

const UserScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getDynamicStyles();

  const { logOutUser, updateUserProfile } = useFirebaseAuthService();
  const { getFirebase } = useFirebaseDBService();

  const { authUser } = useAppSelector(authUserStore);
  const handleLogout = () => {
    logOutUser().finally(() => {
      ToastAndroid.show("User Logged out", ToastAndroid.SHORT);
      // navigation.navigate(ROUTES_NAMES.TABS_NAVIGATOR);
    });
  };
  const handleProfileUpdate = () => {
    updateUserProfile({
      displayName: "Anmol Tanwar",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  };

  return (
    <SafeAreaView>
      <Text>UserScreen</Text>
      <AppText>UserAccount Hello {authUser?.email}</AppText>

      {/* <AppFastImage source={"https://source.unsplash.com/random/?city"} />

       <AppButton variant="text" onPress={() => handleProfileUpdate()}>
         Update profile name
       </AppButton> */}

      {/* <UserPictureCard image={{uri:'https://source.unsplash.com/random/?profile'}} title={authUser.displayName} subTitle={authUser.email}/> */}

      <AppIconButton onPress={() => handleLogout()}>
        <AppExpoIcons name="logout" size={30} />
      </AppIconButton>
    </SafeAreaView>
  );
};
export default UserScreen;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  // console.log("getDynamicStyles", theme.colors);

  return StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    lightBg: {
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.primaryDarkScheme?.[8],
      height: 220,
      width: "100%",
    },
    text: {
      color: theme.colors.text.main,
      fontSize: 40,
    },
    text2: {
      color: theme.colors.text.medium,
      ...theme.font,
    },
    text3: {
      color: theme.colors.text.light,
      fontSize: 40,
    },
  });
};
