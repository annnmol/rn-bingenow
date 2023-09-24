import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppText } from "../forms";
import { useFunnyTextLoader } from "../hooks";

export interface ILoaderProps {
  setShowLoader: (showLoader: boolean) => void;
}

const withDelayedComponentLoader = (
  WrappedComponent: React.FC<any>,
  delayDuration: number
) => {
  return () => {
    const [showLoader, setShowLoader] = useState(true);
    const funnyText = useFunnyTextLoader();

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, delayDuration);

      return () => clearTimeout(timer);
    }, [delayDuration]);

    const handleModalPress = () => {
      // You can add logic here to prevent user interaction during loading if needed
      ToastAndroid.show("thoda Wait karle bhai", ToastAndroid.SHORT);
    };

    return showLoader ? (
      <SafeAreaView style={styles.container}>
        <Modal
          transparent={true}
          animationType="fade"
          visible={showLoader}
          onRequestClose={() => {}}
        >
          <TouchableWithoutFeedback onPress={handleModalPress}>
            <View style={styles.container}>
              <View style={styles.loaderBox}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
              <AppText variant="body3" style={{ fontSize: 15 }}>
                {funnyText}
              </AppText>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </SafeAreaView>
    ) : (
      <WrappedComponent setShowLoader={setShowLoader} />
    );
  };
};

export default withDelayedComponentLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  loaderBox: {
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 8,
  },
});
