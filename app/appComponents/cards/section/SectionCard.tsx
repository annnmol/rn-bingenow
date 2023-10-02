import { useNavigation, useTheme } from "@react-navigation/native";
import { ContentStyle, FlashList } from "@shopify/flash-list";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  ToastAndroid,
  View,
  ViewStyle,
} from "react-native";
import {
  checkPremiumContent,
  movieImageUrl500,
} from "../../../services/ApiService";
import { constants } from "../../../themes";
import { AppText } from "../../forms";
import { AppExpoIcons, AppIconButton } from "../../icons";
import { SkeletonCard } from "../../loaders";
import ThreeByThreeCard from "../ThreeByThreeCard";

interface Props {
  data: any[];
  style?: StyleProp<ViewStyle>;
  showViewAllBtn?: boolean;
  title: string;
  contentContainerStyle?: ContentStyle | undefined;
  ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;
  searchSlug?: string;
}

const SectionCard: React.FC<Props> = ({
  title,
  data,
  style,
  searchSlug,
  showViewAllBtn = data?.length > 0 ? true : false,
  contentContainerStyle = { paddingHorizontal: constants.spacing },
  ItemSeparatorComponent = () => (
    <View
      style={{
        width: constants.spacing,
      }}
    />
  ),
}) => {
  const styles = getDynamicStyles();
  const navigation = useNavigation<any>();

  const handleViewAllPress = () => {
    ToastAndroid.show(`${title} View All`, ToastAndroid.SHORT);
    // navigation.navigate(ROUTES_NAMES.VIEW_ALL_LISTINGS, {
    //   id: title,
    //   searchSlug:searchSlug ?? title
    // });
  };

  const handleItemClick = (item: any, index: number) => {
    ToastAndroid.show("card clicked", ToastAndroid.SHORT);
    // let mediaType = item?.hasOwnProperty("first_air_date") ? "tv" : "movie";
    // navigation.navigate(ROUTES_NAMES.DETAILS, {
    //   id: item?.id,
    //   mediaType: mediaType,
    // });
  };

  console.log("🚀 ~ file: index.tsx:12 ~ trenidn all:");

  return (
    <View style={styles.section}>
      <View style={styles.sectionTitleBox}>
        <AppText variant="H5">{title}</AppText>
        {showViewAllBtn ? (
          <AppIconButton onPress={() => handleViewAllPress()}>
            <AppExpoIcons
              name="chevron-forward-outline"
              size={20}
              style={styles.icon}
            />
          </AppIconButton>
        ) : null}
      </View>
      <View style={styles.containerFlatlist}>
        {data?.length > 0 ? (
          <FlashList
            data={data}
            estimatedItemSize={20}
            keyExtractor={(item: any, index: number) => index?.toString()}
            renderItem={({ item, index }: any) => {
              const imageURl = movieImageUrl500(item?.poster_path);
              const isPremium = checkPremiumContent(
                item?.vote_average,
                item?.vote_count
              );
              return (
                <ThreeByThreeCard
                  key={index?.toString()}
                  onPress={() => handleItemClick(item, index)}
                  image={imageURl}
                  isPremium={isPremium}
                />
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={contentContainerStyle}
            ItemSeparatorComponent={ItemSeparatorComponent} // Use your custom separator component
          />
        ) : (
          <FlashList
            data={[1, 2, 3, 4]}
            estimatedItemSize={20}
            keyExtractor={(item: any, index: number) => index?.toString()}
            renderItem={({ item, index }: any) => {
              return (
                <SkeletonCard
                  style={{
                    width: constants.windowWidth / 3.6,
                    height: constants.windowHeight / 6,
                    borderRadius: constants.spacingS,
                  }}
                  key={index?.toString()}
                />
              );
            }}
            horizontal={true}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={contentContainerStyle}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        )}
      </View>
    </View>
  );
};

export default React.memo(SectionCard);

const getDynamicStyles = () => {
  const theme: any = useTheme();
  return StyleSheet.create({
    section: {
      flex: 1,
      backgroundColor: theme.colors.default.surface,
      // backgroundColor: "red",
      paddingVertical: constants.spacingM,
      gap: constants.spacingM,
    },
    containerFlatlist: {
      minWidth: 3,
      minHeight: 3,
      flex: 1,
    },
    icon: {
      color: theme.colors.text.medium,
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
