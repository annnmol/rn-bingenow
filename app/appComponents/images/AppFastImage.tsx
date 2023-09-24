import React from "react";
import {
  Image,
  ImageContentFit,
  ImageSource,
  ImageStyle,
  ImageTransition,
  ImageProps
} from "expo-image";


interface Props extends ImageProps {
  source: string | { uri: string } | number;
  style?: ImageStyle | ImageStyle[];
  transition?: number | ImageTransition | null | undefined;
  contentFit?: ImageContentFit;
  [otherProps: string]: any;
}

const AppFastImage: React.FC<Props> = ({
  source,
  style = { width: "100%", height: 200, borderRadius: 4 },
  transition = 200,
  contentFit = "cover",
  ...otherProps
}) => {
  return (
    <Image
      style={style}
      source={source}
      cachePolicy="memory-disk"
      contentFit={contentFit}
      transition={transition}
      recyclingKey={
        'unknown_993829'
      }
      // onLoadEnd={()=>console.log("image loaded")}
      {...otherProps}
    />
  );
};

export default AppFastImage;

// interface Props {
//   style?: ImageStyle | ImageStyle[];
//   source: string | number | ImageSource | ImageSource[] | string[];
//   placeholder?: string | number | string[] | ImageSource | ImageSource[];
//   contentFit?: ImageContentFit;
//   children?: React.ReactNode;
//   [otherProps: string]: any;
// }

// const AppFastImage: React.FC<Props> = ({
//   style = { width: "100%", height: 200, borderRadius: 4 },
//   source,
//   contentFit='cover',
//   children,
//   ...otherProps
// }) => {
//   return (
//     <Image
//       style={style}
//       source={source ? source : require("../../assets/images/blurHash.png")}
//       placeholderContentFit="fill"
//       contentFit={contentFit}
//       transition={800}
//       cachePolicy="memory-disk"
//       {...otherProps}
//     />
//   );
// };

// export default AppFastImage;
