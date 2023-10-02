import { FlashList, ListRenderItem } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, View } from "react-native";
import { constants } from "../../themes";

interface Props {
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  estimatedItemSize?: number;
  ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;
  data: any[];
  renderItem: ListRenderItem<any> | null | undefined;
  [otherProps: string]: any;
}

const AppFlatList: React.FC<Props> = ({
  renderItem,
  data,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  estimatedItemSize = data?.length ?? 20,
  ItemSeparatorComponent = () => (
    <View
      style={{
        width: constants.spacing,
      }}
    />
  ),
  ...otherProps
}) => {

  if (!data) {
    return null;
  }
  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: any, index: number) => index?.toString()}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      estimatedItemSize={estimatedItemSize}
      ItemSeparatorComponent={ItemSeparatorComponent} // Use your custom separator component
      // contentContainerStyle={styles.sectionFlatlist}
      {...otherProps}
    />
  );
};

export default AppFlatList;

const styles = StyleSheet.create({
  sectionFlatlist: {
    paddingHorizontal: constants.spacing,
  },
});
