import { useTheme } from "@react-navigation/native";
import { ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  // children: ReactNode;
}

const UserScreen: React.FC<Props> = () => {
  const styles = getDynamicStyles();

  return (
    <View>
      <Text>UserScreen</Text>
    </View>
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
