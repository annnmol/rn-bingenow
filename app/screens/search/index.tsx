import { useTheme } from "@react-navigation/native";
import { ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "../../store";
import { authUserStore } from "../../store/slices/AuthUserSlice";

interface Props {
  //   children: ReactNode;
}

const SearchScreen: React.FC<Props> = () => {
  const styles = getDynamicStyles();
  const { authUser } = useAppSelector(authUserStore);

  console.log("🚀 ~ file: index.tsx:12 ~ SearchScreen:");
  

  return (
    <SafeAreaView style={styles.container}>
      <Text>SearchScreen</Text>
    </SafeAreaView>
  );
};
export default SearchScreen;

const getDynamicStyles = () => {
  const theme: any = useTheme();

//   console.log("getDynamicStyles", theme.colors);

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
