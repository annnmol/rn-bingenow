import React, { memo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { constants } from "../../themes";
import { getRandomArrayIndex } from "../../utils/utils";
import { AppText } from "../forms";

const funnyMessages = [
  "Oopsie-doodle! Looks like the data went on vacation and forgot to come back. 🏝️🤷‍♂️",
  "Whoopsie-daisy! The data seems to have taken an unexpected detour. 🛣️😮",
  "Oh no! The data has decided to play hide and seek. Can you find it? 🔍🤔",
  "Houston, we have a problem! The data is MIA. 🚀🌌",
  "Well, this is awkward. The data seems to have ghosted us. 👻😕",
  "No data, no cry. Bob Marley would understand. 🎵🎶",
  "Looks like the data went on a coffee break. ☕️😴",
  "The data has joined a secret society and is refusing to divulge its whereabouts. 🤐🔒",
  "Data? Data? Where art thou, data? 🤷‍♀️🌍",
  "Alert! The data has taken a spontaneous vacation. 🏖️✈️",
];

interface Props {
  style?: StyleProp<ViewStyle>;
  title?: string;
}

const AppNoData: React.FC<Props> = ({ style, title }) => {
  const randomIndex = getRandomArrayIndex(funnyMessages);
  const displayTitle = title || funnyMessages[randomIndex];
  return (
    <View style={[styles.container, style && style]}>
      <AppText
        variant="body3"
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{ textAlign: "center", lineHeight: 24,fontSize: 15, width: "85%" }}
      >
        {displayTitle}
      </AppText>
    </View>
  );
};

export default memo(AppNoData);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: constants.spacingL,
    paddingVertical: 2,
    width: constants.windowWidth,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    gap: 12,
  },
});
