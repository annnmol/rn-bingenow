import { NavigationProp, useTheme } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SectionCard } from "../../appComponents/cards";
import { withDelayedComponentLoader } from "../../appComponents/hoc";
import { ILoaderProps } from "../../appComponents/hoc/withDelayedComponentLoader";
import { getHomeContent } from "../../appComponents/hooks";
import { useAppSelector } from "../../store";
import { authUserStore } from "../../store/slices/AuthUserSlice";
import { nowPlayingMoviesStore } from "../../store/slices/movies/NowPlayingMoviesSlice";
import { constants } from "../../themes";
import { Endpoints } from "../../services/ApiService";
import { trendingAllStore } from "../../store/slices/movies/TrendingAllSlice";
import { topRatedStore } from "../../store/slices/movies/TopRatedSlice";
import { freshTvStore } from "../../store/slices/movies/FreshTvSlice";
import { upcomingMoviesStore } from "../../store/slices/movies/UpcomingMoviesSlice";
import { ultimateMoviesStore } from "../../store/slices/movies/UltimateMoviesSlice";
import { popularMoviesStore } from "../../store/slices/movies/PopularMoviesSlice";

interface Props extends ILoaderProps {
  navigation: NavigationProp<any>; // Define the type for navigation
}
const Homescreen: React.FC<Props> = ({ navigation, setShowLoader }) => {
  const styles = getDynamicStyles();
  const theme: any = useTheme();

  // const { onRefresh, refreshing } = getHomeContent();
  const { authUser } = useAppSelector(authUserStore);
  // const { getHomepageData } = getHomeContent();

  // React.useEffect(() => {
  //   getHomepageData();
  // }, []);
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
  // const { savedItems } = useAppSelector(useSavedItemsStore);
  // const { defaultUserAvatars } = useAppSelector(useDefaultUserAvatarStore);

  // // const { defaultUserAvatars } = useAppSelector(useDefaultUserAvatarStore);

  // console.log(
  //   "nowPlayingMovies",
  //   nowPlayingMovies?.length,
  //   nowPlayingMovies?.[0]
  // );
  // console.log("trendingAll", trendingAll?.length);
  // console.log("topRated", topRated?.length);
  // console.log("freshTv", freshTv?.length);
  // console.log("upcomingMovies", upcomingMovies?.length);
  // console.log("ultimateMovies", ultimateMovies?.length);
  // console.log("popularMovies", popularMovies?.length);
  // console.log("savedItems", savedItems?.length);
  // console.log("defaultUserAvatars", defaultUserAvatars?.[0])

  console.log("🚀 ~ file: index.tsx:12 ~ homescreen:");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      >
        <SectionCard data={nowPlayingMovies} title="Now Playing Movies" />
        <SectionCard
         data={trendingAll}
         title="Trending in India"
         searchSlug={Endpoints.TRENDING_ALL}
        />
        <SectionCard
          data={popularMovies}
          title="Top Picks"
          searchSlug={Endpoints.POPULAR_MOVIES}
        />
        <SectionCard
          data={topRated}
          title="Top Rated Originals ✨"
          searchSlug={Endpoints.TOP_RATED_MOVIES}
        />
        <SectionCard
         data={freshTv}
         title="Fresh TV Shows 📺"
         searchSlug={Endpoints.TRENDING_TV}
        />
        <SectionCard
         data={ultimateMovies}
         title="The Ultimate Hollywood 🍿"
         searchSlug={Endpoints.DISCOVER_MOVIES}
        />
        <SectionCard
       data={upcomingMovies}
       title="Upcoming"
       searchSlug={Endpoints.UPCOMING_MOVIES}
        />

        {/* <View style={{ height: 500, width:200 }}>
          <FlashList
            data={trendingAll}
            estimatedItemSize={20}
            keyExtractor={(item: any, index: number) => index?.toString()}
            renderItem={({ item, index }) => {
              const imageURl = movieImageUrl500(item?.poster_path);
              const isPremium = checkPremiumContent(
                item?.vote_average,
                item?.vote_count
              );

              return (
                <TwoByFourCard
                  key={index?.toString()}
                  onPress={() => console.log("onPress")}
                  image={imageURl}
                  isPremium={isPremium}
                />
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionFlatlist}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: constants.spacing,
                }}
              />
            )}
          />
        </View> */}
        {/* <AppText variant="H2">Home</AppText> */}
        {/* <AppSectionCard
        title="Now Playing"
        onViewAllPress={() => ToastAndroid.show("View All", ToastAndroid.SHORT)}
        showViewAllBtn={false}
      >
        {nowPlayingMovies?.length > 0 && (
          <FlashList
            data={nowPlayingMovies}
            estimatedItemSize={20}
            keyExtractor={(item: any, index: number) => index?.toString()}
            renderItem={({ item, index }) => {
              const imageURl = movieImageUrl500(item?.poster_path);
              const isPremium = checkPremiumContent(
                item?.vote_average,
                item?.vote_count
              );

              return (
                <ThreeByThreeCard
                  key={index?.toString()}
                  onPress={() => console.log("onPress")}
                  image={imageURl}
                  isPremium={isPremium}
                />
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionFlatlist}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: constants.spacing
                }}
              />
            )}
          />
     ) } 
      </AppSectionCard>
      
   
      {trendingAll?.length > 0 ? (
      <AppSectionCard
        title="Trending Today"
        onViewAllPress={() => ToastAndroid.show("View All", ToastAndroid.SHORT)}
        showViewAllBtn={true}
      >
          <FlashList
            data={trendingAll}
            estimatedItemSize={20}
            keyExtractor={(item: any, index: number) => index?.toString()}
            renderItem={({ item, index }) => {
              const imageURl = movieImageUrl500(item?.poster_path);
              const isPremium = checkPremiumContent(
                item?.vote_average,
                item?.vote_count
              );

              return (
                <TwoByFourCard
                  key={index?.toString()}
                  onPress={() => console.log("onPress")}
                  image={imageURl}
                  isPremium={isPremium}
                />
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionFlatlist}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: constants.spacing
                }}
              />
            )}
          />
      </AppSectionCard>
         ) : null}  */}
        {/* <AppSectionCard
        title="Trending Today"
        onViewAllPress={() => ToastAndroid.show("View All", ToastAndroid.SHORT)}
        showViewAllBtn={true}
      >
        {trendingAll?.length > 0 ? (
          <FlashList
            data={trendingAll}
            estimatedItemSize={20}
            keyExtractor={(item: any, index: number) => index?.toString()}
            renderItem={({ item, index }) => {
              const imageURl = movieImageUrl500(item?.poster_path);
              const isPremium = checkPremiumContent(
                item?.vote_average,
                item?.vote_count
              );

              return (
                <TwoByTwoCard
                  key={index?.toString()}
                  onPress={() => console.log("onPress")}
                  image={imageURl}
                  isPremium={isPremium}
                  
                />
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionFlatlist}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: constants.spacing
                }}
              />
            )}
          />
        ) : null}
      </AppSectionCard>
      <AppSectionCard
        title="Trending Today"
        onViewAllPress={() => ToastAndroid.show("View All", ToastAndroid.SHORT)}
        showViewAllBtn={true}
      >
        {trendingAll?.length > 0 ? (
          <FlashList
            data={trendingAll}
            estimatedItemSize={20}
            keyExtractor={(item: any, index: number) => index?.toString()}
            renderItem={({ item, index }) => {
              const imageURl = movieImageUrl500(item?.poster_path);
              const isPremium = checkPremiumContent(
                item?.vote_average,
                item?.vote_count
              );

              return (
                <TwoByTwoSquareCard
                  key={index?.toString()}
                  onPress={() => console.log("onPress")}
                  image={imageURl}
                  isPremium={isPremium}
                  
                />
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionFlatlist}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: constants.spacing
                }}
              />
            )}
          />
        ) : null}
      </AppSectionCard>
      <AppSectionCard
        title="Trending Today"
        onViewAllPress={() => ToastAndroid.show("View All", ToastAndroid.SHORT)}
        showViewAllBtn={true}
      >
        {trendingAll?.length > 0 ? (
          <FlashList
            data={trendingAll?.slice(0,1)}
            estimatedItemSize={20}
            keyExtractor={(item: any, index: number) => index?.toString()}
            renderItem={({ item, index }) => {
              const imageURl = movieImageUrl500(item?.poster_path);
              const isPremium = checkPremiumContent(
                item?.vote_average,
                item?.vote_count
              );

              return (
                <OneByOneCard
                  key={index?.toString()}
                  onPress={() => console.log("onPress")}
                  image={imageURl}
                  isPremium={isPremium}
                  
                />
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionFlatlist}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: constants.spacing
                }}
              />
            )}
          />
        ) : null}
      </AppSectionCard> */}
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
      backgroundColor: theme.colors.background,
      // backgroundColor: "green",
    },
    scrollContainer: {
      // backgroundColor: "red",
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

    section: {
      // backgroundColor: theme.colors.default.surface,
      backgroundColor: "green",
      paddingVertical: constants.spacingM,
      gap: constants.spacingM,
      // height: 500,
      // width: "100%",
    },

    sectionTitleBox: {
      paddingHorizontal: constants.spacing,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    sectionFlatlist: {
      paddingHorizontal: constants.spacing,
    },
  });
};
