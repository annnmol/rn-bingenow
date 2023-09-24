import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { AppFlatList } from "../../appComponents/extras";
import { AppFastImage } from "../../appComponents/images";
import { SafeAreaView } from "react-native-safe-area-context";

// Sample data with id, name, subtitle (optional), and image URL
const sampleData = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  name: `User ${index + 1}`,
  subtitle:
    index % 2 === 0
      ? `Address ${
          index + 1
        } sdffds sds sfdfasdsads sasdadsads  wewefdfd sdsfasdas sasd`
      : undefined,
  image:
    index % 2 === 0
      ? "https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      : "https://source.unsplash.com/random",
}));

interface Props {
  //   children: ReactNode;
}

const MyListScreen: React.FC<Props> = () => {
  const styles = getDynamicStyles();

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.listItem} key={index?.toString()}>
        <AppFastImage
          source={{ uri: item.image }}
          style={styles.avatar}
          key={item?.id}
          contentFit="contain"
        />
        <View style={styles.messageContainer}>
          <Text style={styles.title}>{item.name}</Text>
          {item.subtitle && (
            <Text
              style={styles.subtitle}
              numberOfLines={1} // Limit the number of lines to 1
              ellipsizeMode="tail" // Truncate with an ellipsis at the end
            >
              {item.subtitle}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>MyListScreen</Text> */}
      {/* <ChatList/> */}

      <AppFlatList data={sampleData} renderItem={renderItem} />
    </SafeAreaView>
  );
};
export default MyListScreen;

const getDynamicStyles = () => {
  const theme: any = useTheme();

  // console.log("getDynamicStyles", theme.colors);

  return StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
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

    listItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 14,
      backgroundColor: theme.colors.background,
      //   borderBottomWidth: 1,
      //   borderBottomColor: theme.colors.text.light,
      //   shadowColor: theme.colors.text.light,
      //   shadowOffset: {
      //     width: 0,
      //     height: 1,
      //   },
      //   shadowOpacity: 0.3,
      //   shadowRadius: 1,
      //   elevation: 1,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: 16,
      resizeMode: "contain",
    },
    messageContainer: {
      flex: 1,
      justifyContent: "center",
      gap: 4,
    },
    title: {
      fontSize: 17,
      fontWeight: "400",
      letterSpacing: 0.5,
      color: theme.colors.text.medium,
    },
    subtitle: {
      fontSize: 14,
      color: theme.colors.text.light,
    },
  });
};
