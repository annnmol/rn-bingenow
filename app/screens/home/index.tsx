import { NavigationProp, useTheme } from "@react-navigation/native";
import React from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppFlatList, AppNoData } from "../../appComponents/extras";
import { AppText } from "../../appComponents/forms";
import { withDelayedComponentLoader } from "../../appComponents/hoc";
import { ILoaderProps } from "../../appComponents/hoc/withDelayedComponentLoader";
import { getHomeContent } from "../../appComponents/hooks";
import { AppAvatar, AppFastImage } from "../../appComponents/images";
import { movieImageUrl500 } from "../../services/ApiService";
import { useAppSelector } from "../../store";
import { useSavedItemsStore } from "../../store/slices/SavedItemsSlice";
import { freshTvStore } from "../../store/slices/movies/FreshTvSlice";
import { nowPlayingMoviesStore } from "../../store/slices/movies/NowPlayingMoviesSlice";
import { popularMoviesStore } from "../../store/slices/movies/PopularMoviesSlice";
import { topRatedStore } from "../../store/slices/movies/TopRatedSlice";
import { trendingAllStore } from "../../store/slices/movies/TrendingAllSlice";
import { ultimateMoviesStore } from "../../store/slices/movies/UltimateMoviesSlice";
import { upcomingMoviesStore } from "../../store/slices/movies/UpcomingMoviesSlice";

interface Props extends ILoaderProps {
  navigation: NavigationProp<any>; // Define the type for navigation
}
const Homescreen: React.FC<Props> = ({ navigation, setShowLoader }) => {
  const styles = getDynamicStyles();
  const { onRefresh, refreshing } = getHomeContent();

  const { data: nowPlayingMovies, loading: nowPlayingMoviesLoading } =
    useAppSelector(nowPlayingMoviesStore);
  const { data: trendingAll, loading: trendingAllLoading } =
    useAppSelector(trendingAllStore);
  const { data: topRated, loading: topRatedLoading } =
    useAppSelector(topRatedStore);
  const { data: freshTv, loading: freshTvLoading } =
    useAppSelector(freshTvStore);
  const { data: upcomingMovies, loading: upcomingMoviesLoading } =
    useAppSelector(upcomingMoviesStore);
  const { data: ultimateMovies, loading: ultimateMoviesLoading } =
    useAppSelector(ultimateMoviesStore);
  const { data: popularMovies, loading: popularMoviesLoading } =
    useAppSelector(popularMoviesStore);
  const { savedItems } = useAppSelector(useSavedItemsStore);

  console.log(
    "--------------------------------------------------------------------"
  );
  // console.log("nowPlayingMovies", nowPlayingMovies?.length, nowPlayingMovies?.[0]);
  // console.log("trendingAll", trendingAll?.length);
  // console.log("topRated", topRated?.length);
  // console.log("freshTv", freshTv?.length);
  // console.log("upcomingMovies", upcomingMovies?.length);
  // console.log("ultimateMovies", ultimateMovies?.length);
  // console.log("popularMovies", popularMovies?.length);
  // console.log("savedItems", savedItems?.length);

  React.useEffect(() => {}, []);

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.card} key={index?.toString()}>
        <AppFastImage
          source={{ uri: movieImageUrl500(item?.backdrop_path) }}
          style={styles.image}
        />
        <Text style={styles.title}>{item?.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
      style={{ flex: 1, backgroundColor: "red" , padding: 10}}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
      <AppAvatar
        source={require("../../assets/avatars/avatar4.webp")}
        size={32}
      />
      <AppText variant="H4">Homescreen</AppText>
      <AppText variant="body3">Homescreen</AppText>
      <AppText>Homescreen</AppText>
      <AppNoData />
      {/* <ScrollView contentContainerStyle={styles.container}> */}
        <View style={styles.lightBg}>
          <Text style={styles.text}>Homescreen Main</Text>
          <Text style={styles.text2}>Homescreen Medium</Text>
          <Text style={styles.text3}>Homescreen light</Text>
        </View>
        <View style={styles.lightBg}>
          <Text style={styles.text}>Homescreen Main</Text>
          <Text style={styles.text2}>Homescreen Medium</Text>
          <Text style={styles.text3}>Homescreen light</Text>
        </View>
        <AppFlatList
          data={nowPlayingMovies}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
        />
      {/* </ScrollView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default withDelayedComponentLoader(Homescreen, 2000);

const getDynamicStyles = () => {
  const theme: any = useTheme();
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
      marginTop: 50,
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
    flatlist: {
      backgroundColor: "#121212",
      padding: 10,
    },
    card: {
      width: 150,
      height: 200,
      borderRadius: 10,
      backgroundColor: "#232323",
      margin: 10,
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
    },
    title: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      padding: 10,
    },
  });
};
