import React from "react";
import {
  Image,
  ImageContentFit,
  ImageSource,
  ImageStyle,
  ImageTransition,
  ImageProps,
} from "expo-image";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
interface Props extends ImageProps {
  source: string | { uri: string } | number;
  style?: ImageStyle | ImageStyle[];
  transition?: number | ImageTransition | null | undefined;
  contentFit?: ImageContentFit;
  size?: number;
  [otherProps: string]: any;
}

const AppAvatar: React.FC<Props> = ({
  source,
  size = 24,
  style,
  transition = 200,
  contentFit = "cover",
  ...otherProps
}) => {
  return (
    <Image
      style={[
        {
          height: size,
          width: size,
          borderRadius: size / 2,
          overflow: "hidden",
        },
        style,
      ]}
      source={source}
      cachePolicy="memory-disk"
      contentFit={contentFit}
      transition={transition}
      recyclingKey={"unknown_99382329"}
      placeholder={blurhash}
      // onLoadEnd={()=>console.log("image loaded")}
      {...otherProps}
    />
  );
};

export default AppAvatar;
