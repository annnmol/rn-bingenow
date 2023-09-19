import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ColorUtils, theme } from "../../themes";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { Appearance, useColorScheme } from "react-native";

const Homescreen = () => {
  React.useEffect(() => {
    console.log("Homescreen", theme);

    // console.log("Homescreen",);
  }, []);

  React.useEffect(() => {}, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Homescreen</Text>
        <Text style={styles.text2}>Homescreen</Text>
        <Text style={styles.text3}>Homescreen</Text>

        <Text style={styles.textLight}>Homescreen</Text>
        <Text style={styles.textLight2}>Homescreen</Text>
        <Text style={styles.textLight3}>Homescreen</Text>

        <Text style={[styles.text2, { color: theme.colors.notification}]}>
        notification
        </Text>
        <Text style={[styles.text2, { color: theme.colors.card}]}>
        card
        </Text>
        <Text style={[styles.text2, { color: theme.colors.border}]}>
        border
        </Text>
      {/* <View style={styles.lightBg}>
      </View> */}
      {/* <View style={styles.lightBg}>
        <Text style={[styles.text, { color: "rgba(17, 60, 207, 1)" }]}>
          Homescreen
        </Text>
        <Text style={[styles.text2, { color: "rgba(17, 60, 207, 0.60)" }]}>
          Homescreen
        </Text>
        <Text style={[styles.text3, { color: "rgba(17, 60, 207, 0.38)" }]}>
          Homescreen
        </Text>
      </View> */}
      {/*
      <View style={[styles.darkBg,{
        backgroundColor: "rgba(17, 60, 207, 0.87)",
        height:50
      }]}>
      </View>
      <View style={[styles.darkBg,{
        backgroundColor: "rgba(17, 60, 207, 0.60)",
        height:50
      }]}>
      </View>
      <View style={[styles.darkBg,{
        backgroundColor: "rgba(17, 60, 207, 0.38)",
        height:50
      }]}>
      </View>
      <View style={styles.darkBg}>
        <Text style={styles.textLight}>Homescreen</Text>
        <Text style={styles.textLight2}>Homescreen</Text>
        <Text style={styles.textLight3}>Homescreen</Text>
      </View>
      <View style={[styles.darkBg,{
        backgroundColor: "#121623",
      }]}>
        <Text style={styles.textLight}>Homescreen</Text>
        <Text style={styles.textLight2}>Homescreen</Text>
        <Text style={styles.textLight3}>Homescreen</Text>
      </View>
      <View style={[styles.darkBg,{
        backgroundColor: "#121A34",
      }]}>
        <Text style={styles.textLight}>Homescreen</Text>
        <Text style={styles.textLight2}>Homescreen</Text>
        <Text style={styles.textLight3}>Homescreen</Text>
      </View>
      <View style={[styles.darkBg,{
        backgroundColor: "#121D46",
      }]}>
        <Text style={styles.textLight}>Homescreen</Text>
        <Text style={styles.textLight2}>Homescreen</Text>
        <Text style={styles.textLight3}>Homescreen</Text>
      </View> */}
      {/* <View style={[styles.darkBg,{
        backgroundColor: "#122157",
      }]}>
        <Text style={styles.textLight}>Homescreen</Text>
        <Text style={styles.textLight2}>Homescreen</Text>
        <Text style={styles.textLight3}>Homescreen</Text>
      </View> */}
      {/* <View style={[styles.darkBg,{
        backgroundColor: "#113CCF",
      }]}>
        <Text style={styles.textLight}>Homescreen</Text>
        <Text style={styles.textLight2}>Homescreen</Text>
        <Text style={styles.textLight3}>Homescreen</Text>
      </View> */}
    </ScrollView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(17, 60, 207, 0.9)",
    // backgroundColor: ColorUtils.mixColors("rgba(17, 60, 207, 1)", "rgba(18, 18, 18, 1)", 2),
    backgroundColor: theme.colors.primaryScheme?.[6],
},
  lightBg: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.87)",
    height: 120,
    width: "100%",
  },
  text: {
    color: theme.colors.text.main,
    fontSize: 20,
  },
  text2: {
    color: theme.colors.text.medium,
    // fontSize: 20,
    ...theme.font,
  },
  text3: {
    color: theme.colors.text.light,
    fontSize: 20,
  },
  darkBg: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    height: 120,
    width: "100%",
  },
  textLight: {
    color: theme.colors.primary_text.main,
    fontSize: 20,
  },
  textLight2: {
    color: theme.colors.primary_text.medium,
    fontSize: 20,
  },
  textLight3: {
    color: theme.colors.primary_text.light,
    fontSize: 20,
  },
});
