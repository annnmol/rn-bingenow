import { FlashList, ListRenderItem } from "@shopify/flash-list";
import React from "react";
import AppItemSeparator from "./AppItemSeparator";

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
  estimatedItemSize = 50,
  ItemSeparatorComponent = AppItemSeparator,
  ...otherProps
}) => {
  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item:any, index:number) => index?.toString()}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      estimatedItemSize={estimatedItemSize}
      ItemSeparatorComponent={ItemSeparatorComponent} // Use your custom separator component
      {...otherProps}
    />
  );
};

export default AppFlatList;
